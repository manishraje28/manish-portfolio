import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WaveMesh({ color = '#6366f1', wireframe = true, amplitude = 0.3, frequency = 0.5 }) {
  const mesh = useRef();
  
  const { positions, indices } = useMemo(() => {
    const size = 20;
    const segments = 50;
    const pos = [];
    const ind = [];
    
    for (let i = 0; i <= segments; i++) {
      for (let j = 0; j <= segments; j++) {
        const x = (i / segments - 0.5) * size;
        const z = (j / segments - 0.5) * size;
        pos.push(x, 0, z);
      }
    }
    
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < segments; j++) {
        const a = i * (segments + 1) + j;
        const b = a + 1;
        const c = a + segments + 1;
        const d = c + 1;
        ind.push(a, b, c);
        ind.push(b, d, c);
      }
    }
    
    return {
      positions: new Float32Array(pos),
      indices: new Uint16Array(ind),
    };
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const positions = mesh.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      positions[i + 1] = Math.sin(x * frequency + time) * Math.cos(z * frequency + time) * amplitude;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
          itemSize={1}
        />
      </bufferGeometry>
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function WaveDivider({ 
  className = '', 
  height = 200, 
  color = '#6366f1',
  wireframe = true 
}) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height }}>
      <Canvas camera={{ position: [0, 8, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <WaveMesh color={color} wireframe={wireframe} />
      </Canvas>
    </div>
  );
}
