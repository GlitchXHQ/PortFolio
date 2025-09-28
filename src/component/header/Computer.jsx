import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// 🟢 Import the corrected model component
import { Fullsetup } from '../../../Fullsetup';

const Computer = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* Set up the 3D canvas */}
      <Canvas camera={{ position: [5, 5, 6], fov:50 }}>
        {/* Suspense is required while the model oads */}
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Render your model */}
          <Fullsetup position={[0, 0, 0]} rotation={[0, 0, 0]}  scale={[0.5, 0.5, 0.5]}/>
          
          {/* Controls for rotating the view */}
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Computer;