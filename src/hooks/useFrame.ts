import { useCallback, useEffect } from 'react'
import { useCanvasStore } from '@14islands/r3f-scroll-rig'

export function useFrame(
  callback: (state: any, delta: number) => void,
  deps: any[] = []
) {
  const addFrameCallback = useCanvasStore((state) => state.addFrameCallback)
  const removeFrameCallback = useCanvasStore((state) => state.removeFrameCallback)

  useEffect(() => {
    addFrameCallback(callback)
    return () => {
      removeFrameCallback(callback)
    }
  }, [])
}
