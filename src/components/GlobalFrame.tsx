import { useFrame } from '@react-three/fiber'
import { useCanvasStore } from '@14islands/r3f-scroll-rig'

export const GlobalFrame = () => {
  useFrame((state, delta) => {
    const frameCallbacks = useCanvasStore.getState().frameCallbacks
    frameCallbacks.forEach((cb) => cb(state, delta))
  })

  return null
}
