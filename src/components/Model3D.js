"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, Suspense } from "react";

// This component loads your local .glb file and spins it 360 degrees
function ActualModel() {
  const modelRef = useRef();
  
  // Point this to your local file inside the public folder (e.g., public/telescope.glb)
  const { scene } = useGLTF("/telescope.glb"); 

  // Smooth 360-degree continuous rotation every frame
  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} position={[0, 0.3, 0]} />;
}

export default function Model3D() {
  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] flex items-center justify-center bg-transparent">
      
      {/* Background glow */}
      <div className="absolute w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Canvas renders the 3D space natively inside your website */}
      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        camera={{ position: [0, 1.5, 4], fov: 45 }}
        gl={{ alpha: true }}
      >
        {/* Soft lighting to make it look clean and professional */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={2} />

        <Suspense fallback={null}>
          <ActualModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
    </div>
  );
}