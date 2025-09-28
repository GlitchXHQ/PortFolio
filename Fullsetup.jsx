import React from 'react';
import { useGLTF } from '@react-three/drei';

// Renamed to 'Fullsetup' for clarity, matching the file name
export function Fullsetup(props) { 
  // 🟢 CORRECT PATH: References the file in public/models/
  const { nodes, materials } = useGLTF('/models/Fullsetup.glb');
  
  return (
    <group {...props} dispose={null}>
      {/* MOUSE */}
      <mesh geometry={nodes.Mouse_Plane.geometry} material={materials.Mouse} position={[2.309, 0, 0.82]} rotation={[Math.PI / 2, 0, 0]} scale={0.172} />
      
      {/* KEYBOARD */}
      <mesh geometry={nodes.Keyboard_Plane.geometry} material={materials.Keyboard} position={[-0.687, 0, 0.799]} rotation={[Math.PI / 2, 0, 0]} scale={0.765} />
      
      {/* MONITOR GROUP (includes screen and body) */}
      <group position={[0, 0, -0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Monitor_Cube_1.geometry} material={materials.Monitor} />
        <mesh geometry={nodes.Monitor_Cube_2.geometry} material={materials.Screen} />
      </group>
      
      {/* MONITOR STAND PARTS */}
      <mesh geometry={nodes.Support_Cube002.geometry} material={materials.Monitor} position={[0, 0, -0.76]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Stand_Plane001.geometry} material={materials.Monitor} position={[0, 0, -0.76]} rotation={[Math.PI / 2, 0, 0]} />
      
      {/* COMPUTER CASE */}
      <mesh geometry={nodes.Computer_Cube.geometry} material={materials.Computer} position={[4.056, 0, -0.579]} rotation={[Math.PI / 2, 0, 1.317]} scale={1.272} />
    </group>
  );
}

// 🟢 CORRECT PRELOAD PATH
useGLTF.preload('/models/Fullsetup.glb');