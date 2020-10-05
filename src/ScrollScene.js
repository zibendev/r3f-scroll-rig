import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Math as MathUtils } from 'three'
import { useFrame, useThree } from 'react-three-fiber'
import { useViewportScroll } from 'framer-motion'

import requestIdleCallback from './hooks/requestIdleCallback'

import config from './config'
import { useCanvasStore } from './store'
import useScrollRig from './useScrollRig'

/**
 * Generic THREE.js Scene that tracks the dimensions and position of a DOM element while scrolling
 * Scene is positioned above DOM element and scissored around it for better performance (only updates pixels within that area)
 *
 * @author david@14islands.com
 */
let ScrollScene = ({
  el,
  lerp = config.scrollLerp,
  lerpOffset = 0,
  children,
  renderOrder,
  margin = 14, // Margin outside viewport to avoid clipping vertex displacement (px)
  inViewportMargin, // Margin outside viewport to avoid clipping vertex displacement (px)
  visible = true,
  layoutOffset = () => {},
  layoutLerp = 0.1,
  scissor = true,
  debug = false,
  softDirection = false, // experimental
  setInViewportProp = false,
  updateLayout = 0,
  ...props
}) => {
  const scene = useRef()
  const group = useRef()

  const [inViewport, setInViewport] = useState(false)
  const [scale, setScale] = useState({ width: 1, height: 1 })
  const { scrollY } = useViewportScroll()
  const { size } = useThree()
  const { requestFrame, renderScissor, renderFullscreen } = useScrollRig()

  const pageReflowCompleted = useCanvasStore((state) => state.pageReflowCompleted)

  // transient state
  const state = useRef({
    mounted: false,
    isFirstRender: true,
    bounds: {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      centerOffset: -1,
      x: 0,
      inViewport: false,
      progress: 0,
      viewport: 0,
      visibility: 0,
      window: size,
      velocity: 0,
    },
    prevBounds: { y: 0, x: 0, direction: 1, directionTime: 0 },
  }).current

  useEffect(() => {
    state.mounted = true
    return () => (state.mounted = false)
  }, [])

  // set ref on intersection observer
  useLayoutEffect(() => {
    // hide image - leave in DOM to measure and get events
    if (!el?.current) return
    el.current.style.opacity = debug ? 0.5 : 0
    return () => {
      if (!el?.current) return
      el.current.style.opacity = ''
    }
  }, [el.current])

  // Trigger render on scroll - if close to viewport
  useEffect(() => scrollY.onChange(requestFrame), [])

  const updateSizeAndPosition = () => {
    if (!el || !el.current) return

    const { bounds, prevBounds } = state
    const { top, left, width, height } = el.current.getBoundingClientRect()
    bounds.top = top + window.pageYOffset
    bounds.left = left
    bounds.width = width
    bounds.height = height
    bounds.centerOffset = size.height * 0.5 - height * 0.5

    setScale({ width, height })
    bounds.window = size

    // place horizontally
    bounds.x = left - size.width * 0.5 + width * 0.5
    scene.current.position.x = bounds.x

    // prevents ghost lerp on first render
    if (state.isFirstRender) {
      prevBounds.y = top - bounds.centerOffset
      prevBounds.x = bounds.x
      state.isFirstRender = false
    }

    requestFrame() // trigger render
  }

  // Find bounding box & scale mesh on resize
  useLayoutEffect(() => {
    updateSizeAndPosition()
  }, [pageReflowCompleted, updateLayout])

  // RENDER FRAME
  useFrame(({ gl, camera, clock }) => {
    const { bounds, prevBounds } = state
    // const clockDelta = clock.getDelta()
    const time = clock.getElapsedTime()

    const layoutOffsetX = bounds.x + (layoutOffset(bounds)?.x || 0)
    const layoutOffsetY = layoutOffset(bounds)?.y || 0

    // Find new Y based on cached position and scroll
    const y = bounds.top - scrollY.get() - bounds.centerOffset + layoutOffsetY

    // if previously hidden and now visible, update previous position to not get ghost easing when made visible
    if (scene.current.visible && !bounds.inViewport) {
      prevBounds.y = y
    }

    // direction check
    const direction = Math.sign(scrollY.getVelocity())
    if (direction !== prevBounds.direction && direction !== 0) {
      if (bounds.inViewport) {
        prevBounds.directionTime = time
      }
      prevBounds.direction = direction
    }

    // adjust lerp if direction changed - soft change
    let yLerp = lerp
    if (softDirection) {
      const t = MathUtils.clamp(time - prevBounds.directionTime, 0, 1.0)
      yLerp = MathUtils.lerp(softDirection, lerp, t)
    }

    // frame delta
    const delta = Math.abs(prevBounds.y - y) + Math.abs(prevBounds.x - layoutOffsetX)

    // Lerp the distance to simulate easing
    const lerpY = MathUtils.lerp(prevBounds.y, y, yLerp + lerpOffset)
    const lerpX = MathUtils.lerp(prevBounds.x, layoutOffsetX, layoutLerp)

    // Abort if element not in screen
    const scrollMargin = inViewportMargin || size.height * 0.33
    const isOffscreen =
      lerpY + size.height * 0.5 + bounds.height * 0.5 < -scrollMargin ||
      lerpY + size.height * 0.5 - bounds.height * 0.5 > size.height + scrollMargin

    // store top value for next frame
    bounds.inViewport = !isOffscreen
    // const velocity = MathUtils.clamp((prevBounds.y - lerpY) / clockDelta / 1000 / 1000 / 100, -1, 1)
    // bounds.velocity = MathUtils.lerp(bounds.velocity, velocity, 0.05)
    setInViewportProp && requestIdleCallback(() => state.mounted && setInViewport(!isOffscreen))
    prevBounds.y = lerpY
    prevBounds.x = lerpX

    // hide/show scene
    if (isOffscreen && scene.current.visible) {
      scene.current.visible = false
    } else if (!isOffscreen && !scene.current.visible) {
      scene.current.visible = visible
    }

    if (scene.current.visible) {
      // move scene
      scene.current.position.y = -lerpY
      scene.current.position.x = lerpX

      const positiveYUpBottom = size.height * 0.5 - (lerpY + bounds.height * 0.5) // inverse Y
      if (scissor) {
        renderScissor(
          scene.current,
          camera,
          bounds.left - margin,
          positiveYUpBottom - margin,
          bounds.width + margin * 2,
          bounds.height + margin * 2,
        )
      } else {
        renderFullscreen()
      }

      // calculate progress of passing through viewport (0 = just entered, 1 = just exited)
      const pxInside = bounds.top - lerpY - bounds.top + size.height - bounds.centerOffset
      bounds.progress = MathUtils.mapLinear(pxInside, 0, size.height + bounds.height, 0, 1) // percent of total visible distance
      bounds.visibility = MathUtils.mapLinear(pxInside, 0, bounds.height, 0, 1) // percent of item height in view
      bounds.viewport = MathUtils.mapLinear(pxInside, 0, size.height, 0, 1) // percent of window height scrolled since visible
    }

    // render another frame if delta is large enough
    if (!isOffscreen && delta > config.scrollRestDelta) {
      requestFrame()
    }
  }, config.PRIORITY_SCISSORS)

  // Clear scene from canvas on unmount
  // useEffect(() => {
  //   return () => {
  //     gl.clear()
  //   }
  // }, [])

  // meshBasicMaterial shaders are excluded from prod build
  const renderDebugMesh = () => (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[scale.width, scale.height, 1, 1]} />
      <meshBasicMaterial color="pink" attach="material" transparent opacity={0.5} />
    </mesh>
  )

  return (
    <scene ref={scene} visible={state.bounds.inViewport && visible}>
      <group renderOrder={renderOrder}>
        {(!children || debug) && renderDebugMesh()}
        {children &&
          children({
            // inherited props
            el,
            lerp,
            lerpOffset,
            layoutLerp,
            renderOrder,
            visible,
            layoutOffset,
            margin,
            // new props
            scale,
            state,
            scene: scene.current,
            inViewport,
            // tunnel the rest
            ...props,
          })}
      </group>
    </scene>
  )
}

ScrollScene = React.memo(ScrollScene)

ScrollScene.propTypes = {
  el: PropTypes.object, // DOM element to track,
  lerp: PropTypes.number, // Base lerp ratio
  lerpOffset: PropTypes.number, // Offset applied to `lerp`
  layoutLerp: PropTypes.number, // lerp ratio used when translating offset or layout changes
  renderOrder: PropTypes.number, // threejs render order
  visible: PropTypes.bool, // threejs render order,
  layoutOffset: PropTypes.func, // {x,y} to translate
  margin: PropTypes.number, // custom margin around scissor to impact clipping
  scissor: PropTypes.bool, // render using scissor test for better peformance
  debug: PropTypes.bool, // show debug mesh
  setInViewportProp: PropTypes.bool, // update inViewport property on child (might cause lag)
}

ScrollScene.childPropTypes = {
  ...ScrollScene.propTypes,
  scale: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  state: PropTypes.shape({
    bounds: PropTypes.shape({
      left: PropTypes.number,
      top: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      inViewport: PropTypes.bool,
      progress: PropTypes.number,
      visibility: PropTypes.number,
    }),
  }),
  scene: PropTypes.object, // Parent scene,
  inViewport: PropTypes.bool, // {x,y} to scale
}

export default ScrollScene