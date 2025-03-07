import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const RotatingEarth = () => {
  const earthRef = useRef();

  // Rotation animation
  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]} scale={1.8}>
      <MeshDistortMaterial 
        color="#4A90E2" 
        attach="material" 
        distort={0.3} 
        speed={2} 
      />
    </Sphere>
  );
};

const Earth = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center relative">
      {/* Tunisian Flag */}
      <div 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        style={{ width: '200px', height: '400px' }}
      >
        <img 
          src="image/about/tunisiaflag1.jpg"  // Replace with your flag image path
          alt="Tunisian Flag"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3D Earth Canvas */}
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <RotatingEarth />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Earth;