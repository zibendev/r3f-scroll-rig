import React from 'react'
import { Color } from 'three'

export const DebugMesh = ({ scale }: { scale: [x: number, y: number, z: number] }) => (
  <mesh scale={scale}>
    <planeGeometry />
    <meshBasicMaterial color="hotpink" opacity={0.5} transparent={true} />
  </mesh>
)
