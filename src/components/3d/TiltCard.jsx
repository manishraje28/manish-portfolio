import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 3D Tilt Card with perspective effect
 * Creates a smooth 3D tilt effect following cursor movement
 */
export default function TiltCard({ 
  children, 
  className = '', 
  glareEnabled = true,
  tiltAmount = 15,
  perspective = 1000,
  glareOpacity = 0.15 
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setTilt({
      x: (y - 0.5) * tiltAmount,
      y: (x - 0.5) * -tiltAmount,
    });
    
    setGlarePos({
      x: x * 100,
      y: y * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Glare effect */}
      {glareEnabled && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      
      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.3) 50%, rgba(236,72,153,0.3) 100%)',
          filter: 'blur(10px)',
          transform: 'translateZ(-10px)',
        }}
      />
      
      {children}
    </motion.div>
  );
}
