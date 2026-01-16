import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Icosahedron, Torus, Box, Sphere, Octahedron } from '@react-three/drei';

function FloatingShape({ position, shape, color, speed = 1, distort = 0.3, scale = 1 }) {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const ShapeComponent = {
    icosahedron: Icosahedron,
    torus: Torus,
    box: Box,
    sphere: Sphere,
    octahedron: Octahedron,
  }[shape] || Icosahedron;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent ref={mesh} args={shape === 'torus' ? [1, 0.4, 16, 32] : [1]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </ShapeComponent>
    </Float>
  );
}

function WobblyShape({ position, color, scale = 1 }) {
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Sphere args={[1, 32, 32]} position={position} scale={scale}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

export default function FloatingShapes({ className = '', variant = 'default' }) {
  const shapes = variant === 'minimal' ? [
    { position: [-4, 2, 0], shape: 'icosahedron', color: '#6366f1', scale: 0.8 },
    { position: [4, -1, -2], shape: 'octahedron', color: '#8b5cf6', scale: 0.6 },
  ] : [
    { position: [-6, 3, -5], shape: 'icosahedron', color: '#6366f1', scale: 1.2, distort: 0.4 },
    { position: [5, -2, -3], shape: 'torus', color: '#8b5cf6', scale: 0.8, distort: 0.3 },
    { position: [-4, -3, -4], shape: 'octahedron', color: '#ec4899', scale: 0.7, distort: 0.5 },
    { position: [6, 4, -6], shape: 'box', color: '#06b6d4', scale: 0.6, distort: 0.2 },
    { position: [0, 5, -8], shape: 'sphere', color: '#10b981', scale: 0.5, distort: 0.6 },
    { position: [-7, 0, -4], shape: 'icosahedron', color: '#f59e0b', scale: 0.4, distort: 0.3 },
  ];

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        {shapes.map((shape, i) => (
          <FloatingShape key={i} {...shape} />
        ))}
        
        {variant !== 'minimal' && (
          <>
            <WobblyShape position={[3, 1, -2]} color="#a855f7" scale={0.5} />
            <WobblyShape position={[-5, -4, -3]} color="#6366f1" scale={0.4} />
          </>
        )}
      </Canvas>
    </div>
  );
}
