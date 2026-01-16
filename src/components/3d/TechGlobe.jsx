import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Text, Float, Billboard } from '@react-three/drei';
import * as THREE from 'three';

const TECH_STACK = [
  { name: 'React', color: '#61dafb', position: [2.5, 1, 1] },
  { name: 'Node.js', color: '#68a063', position: [-2.5, 0.5, 1.5] },
  { name: 'Python', color: '#3776ab', position: [0, 2.5, -1] },
  { name: 'JS', color: '#f7df1e', position: [1.5, -2, 1.5] },
  { name: 'TS', color: '#3178c6', position: [-1.5, -1.8, -1.5] },
  { name: 'AWS', color: '#ff9900', position: [2, 0, -2] },
  { name: 'Docker', color: '#2496ed', position: [-2, 1.5, -1] },
  { name: 'Next', color: '#ffffff', position: [0, -2.5, 2] },
  { name: 'Tailwind', color: '#38b2ac', position: [1, 2, 1.5] },
  { name: 'MongoDB', color: '#47a248', position: [-2.2, -1, 1] },
  { name: 'Git', color: '#f05032', position: [2.2, -1, -1.5] },
  { name: 'Three', color: '#ffffff', position: [0, 1.5, 2.2] }
];

function FloatingTechText({ radius = 3 }) {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
       // Slowly rotate the text cloud in opposite direction
       group.current.rotation.y = -state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={group}>
      {TECH_STACK.map((tech, i) => {
        // Calculate spherical distribution if positions aren't enough
        const phi = Math.acos(-1 + (2 * i) / TECH_STACK.length);
        const theta = Math.sqrt(TECH_STACK.length * Math.PI) * phi;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={[x, y, z]}>
               <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
                <Text
                  fontSize={0.4}
                  color={tech.color}
                  outlineWidth={0.02}
                  outlineColor="#000000"
                  anchorX="center"
                  anchorY="middle"
                >
                  {tech.name}
                </Text>
              </Billboard>
              {/* Simple geometric icon representation */}
              <mesh position={[0, -0.4, 0]}>
                <octahedronGeometry args={[0.1, 0]} />
                <meshStandardMaterial color={tech.color} wireframe />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

function GlobePoints({ radius = 2 }) {
  const points = useRef();
  
  const { positions, connections } = useMemo(() => {
    const pos = [];
    const conn = [];
    const numPoints = 80;
    
    // Generate points on sphere surface (fibonacci sphere)
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      
      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      pos.push(new THREE.Vector3(x, y * radius, z));
    }
    
    // Create connections between nearby points
    for (let i = 0; i < pos.length; i++) {
      for (let j = i + 1; j < pos.length; j++) {
        if (pos[i].distanceTo(pos[j]) < radius * 0.8) {
          conn.push([pos[i], pos[j]]);
        }
      }
    }
    
    return { positions: pos, connections: conn };
  }, [radius]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={points}>
      {/* Points */}
      {positions.map((pos, i) => (
        <Sphere key={i} args={[0.03, 8, 8]} position={pos}>
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.5} />
        </Sphere>
      ))}
      
      {/* Connection lines */}
      {connections.slice(0, 100).map((conn, i) => (
        <Line
          key={i}
          points={conn}
          color="#8b5cf6"
          lineWidth={0.5}
          transparent
          opacity={0.3}
        />
      ))}
      
      {/* Outer sphere wireframe */}
      <Sphere args={[radius * 1.02, 32, 32]}>
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.1} />
      </Sphere>
    </group>
  );
}

function OrbitRing({ radius, speed, color }) {
  const ring = useRef();
  
  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return pts;
  }, [radius]);

  return (
    <group ref={ring}>
      <Line points={points} color={color} lineWidth={1} transparent opacity={0.4} />
      <Sphere args={[0.08, 8, 8]} position={[radius, 0, 0]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
      </Sphere>
    </group>
  );
}

export default function TechGlobe({ className = '', size = 'default' }) {
  const scale = size === 'small' ? 0.7 : size === 'large' ? 1.3 : 1;
  
  return (
    <div className={`w-full h-full min-h-[300px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <group scale={scale}>
          <GlobePoints radius={2} />
          
          {/* Floating Tech Stack Icons/Text */}
          <FloatingTechText radius={3.2} />

          {/* Orbit rings */}
          <group rotation={[Math.PI / 6, 0, 0]}>
            <OrbitRing radius={2.5} speed={0.3} color="#ec4899" />
          </group>
          <group rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <OrbitRing radius={2.8} speed={-0.2} color="#06b6d4" />
          </group>
          <group rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
            <OrbitRing radius={3.1} speed={0.15} color="#10b981" />
          </group>
        </group>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
