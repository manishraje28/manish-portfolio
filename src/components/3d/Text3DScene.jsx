import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float } from '@react-three/drei';

// eslint-disable-next-line no-unused-vars
function AnimatedText({ text, position = [0, 0, 0], color = '#6366f1', size = 0.5 }) {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={position}>
        <mesh ref={mesh}>
          <textGeometry
            args={[text, {
              font: undefined, // Will use default
              size: size,
              height: 0.1,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.02,
              bevelSize: 0.02,
              bevelOffset: 0,
              bevelSegments: 5,
            }]}
          />
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Center>
    </Float>
  );
}

function GeometricBackground() {
  const group = useRef();
  
  const shapes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 15; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5 - 3,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.5,
        color: ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4'][Math.floor(Math.random() * 4)],
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.rotation.x += shapes[i].speed * 0.01;
        child.rotation.y += shapes[i].speed * 0.01;
      });
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <mesh key={i} position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          {i % 3 === 0 ? (
            <icosahedronGeometry args={[1, 0]} />
          ) : i % 3 === 1 ? (
            <octahedronGeometry args={[1, 0]} />
          ) : (
            <tetrahedronGeometry args={[1, 0]} />
          )}
          <meshStandardMaterial
            color={shape.color}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Text3DScene({ text = 'MANISH', className = '' }) {
  return (
    <div className={`w-full h-[200px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <GeometricBackground />
      </Canvas>
    </div>
  );
}
