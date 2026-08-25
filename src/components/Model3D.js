"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, Suspense } from "react";

function ActualModel() {
  const modelRef = useRef();
  const { scene } = useGLTF("/telescope.glb"); 

  // Continuous useFrame rotation loop removed for optimal performance!
  return <primitive ref={modelRef} object={scene} scale={1.8} position={[0, 0.3, 0]} />;
}

export default function Model3D() {
  return (
    <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[480px] flex items-center justify-center bg-transparent">
      
      <div className="absolute w-64 h-64 bg-[#1D63B8]/15 rounded-full blur-3xl pointer-events-none"></div>

      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        camera={{ position: [0, 1.5, 3.2], fov: 45 }}
        // 1. Clamp pixel ratio to max 2 to prevent heavy retina display memory spikes
        dpr={[1, 2]} 
        // 2. Optimize performance and power preference for the browser's GPU
        gl={{ 
          alpha: true, 
          powerPreference: "high-performance",
          antialias: true
        }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            console.warn("WebGL context lost. Attempting to restore...");
          }, false);
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2.5} />

        <Suspense fallback={null}>
          <ActualModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
    </div>
  );
}