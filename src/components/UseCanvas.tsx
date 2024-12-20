import { forwardRef, ReactNode, ForwardedRef } from 'react'
import { useCanvas } from '../hooks/useCanvas'
import { ScrollRigState } from '../hooks/useScrollRig'

interface IUseCanvas {
  children: ReactNode | ((props: ScrollRigState) => ReactNode)
  id?: string // persistent layout id
  dispose?: boolean // dispose on unmount
  [key: string]: any // Any props to reactively tunnel to the child
}

const UseCanvas = forwardRef<unknown, IUseCanvas>(({ children, id, dispose = true, ...props }, ref) => {
  if (!children) return null
  // auto update canvas with all props
  useCanvas(children, { ...props, id, ref }, { key: id, dispose })
  return null
})

export { UseCanvas }
