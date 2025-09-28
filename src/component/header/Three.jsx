import React from 'react'
import { useGLTF } from '@react-three/drei'

// The path in useGLTF should reference the model in the public folder
export default function Three(props) { 
  const { nodes, materials } = useGLTF('/models/Fullsetup.glb') 
  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes.MeshName1.geometry} 
        material={materials.MaterialName1} 
      />
      <mesh 
        geometry={nodes.MeshName2.geometry} 
        material={materials.MaterialName2} 
      />
    </group>
  )
}

// Preload the model
useGLTF.preload('/models/Fullsetup.glb')