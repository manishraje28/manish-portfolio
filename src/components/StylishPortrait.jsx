import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Ultra-creative animated portrait with:
 * - Floating particles
 * - Glowing aura effect
 * - Dynamic parallax tilt
 * - Animated tech circles
 * - Color-shifting glow
 * - Floating code snippets
 */
export default function StylishPortrait({ src = '/images/potrat.png', alt = 'Manish Raje' }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 25, y: -x * 25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Tech orbit rings
  const orbits = [
    { size: 320, duration: 20, direction: 1 },
    { size: 380, duration: 25, direction: -1 },
    { size: 440, duration: 30, direction: 1 },
  ];

  // Code snippets floating
  const codeSnippets = ['<div>', '</>', '{...}', '( )', '[ ]', '=> ', '::'];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, type: 'spring' }}
      className="relative group cursor-pointer"
      style={{ perspective: 1200, width: 420, height: 520 }}
    >
      {/* Animated background gradient blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl opacity-60"
        style={{ top: '10%', left: '10%', right: '10%', bottom: '10%' }}
      />

      {/* Tech orbit rings */}
      {orbits.map((orbit, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 * orbit.direction }}
          transition={{ duration: orbit.duration, repeat: Infinity, ease: 'linear' }}
          className="absolute border border-accent-primary/20 rounded-full pointer-events-none"
          style={{
            width: orbit.size,
            height: orbit.size,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Orbiting dot */}
          <div
            className="absolute w-2 h-2 bg-accent-primary rounded-full shadow-lg shadow-accent-primary/50"
            style={{ top: -4, left: '50%', transform: 'translateX(-50%)' }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-accent-primary/60"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 ${p.size * 2}px ${p.size / 2}px rgba(var(--accent-primary-rgb, 99, 102, 241), 0.4)`,
          }}
        />
      ))}

      {/* Floating code snippets */}
      {codeSnippets.map((code, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
          className="absolute text-accent-primary/40 font-mono text-sm pointer-events-none select-none"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        >
          {code}
        </motion.span>
      ))}

      {/* Main 3D container */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out',
        }}
        className="relative w-full h-full"
      >
        {/* Glowing backdrop */}
        <div className="absolute inset-8 bg-gradient-to-b from-accent-primary/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

        {/* Animated border frame */}
        <motion.div
          className="absolute inset-4 rounded-3xl overflow-hidden"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-purple-500 to-pink-500 animate-gradient-xy opacity-80" />
          <div className="absolute inset-[2px] bg-bg-primary/90 rounded-3xl" />
        </motion.div>

        {/* Inner glow ring */}
        <div className="absolute inset-6 rounded-2xl border-2 border-accent-primary/30 group-hover:border-accent-primary/60 transition-colors duration-500" style={{ transform: 'translateZ(30px)' }} />

        {/* The portrait image - larger and more prominent */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center overflow-hidden"
          style={{ transform: 'translateZ(50px)' }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-[380px] h-[480px] object-contain object-bottom drop-shadow-2xl transition-all duration-500 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.3))',
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        {/* Scan line effect */}
        <motion.div
          animate={{ y: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent pointer-events-none"
          style={{ transform: 'translateZ(60px)' }}
        />

        {/* Corner tech accents */}
        {[
          { top: 12, left: 12, rotate: 0 },
          { top: 12, right: 12, rotate: 90 },
          { bottom: 12, left: 12, rotate: -90 },
          { bottom: 12, right: 12, rotate: 180 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="absolute w-8 h-8 pointer-events-none"
            style={{ ...pos, transform: `translateZ(40px) rotate(${pos.rotate}deg)` }}
          >
            <div className="w-full h-[2px] bg-gradient-to-r from-accent-primary to-transparent" />
            <div className="w-[2px] h-full bg-gradient-to-b from-accent-primary to-transparent" />
          </motion.div>
        ))}

        {/* Holographic shimmer */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none skew-x-12"
          style={{ transform: 'translateZ(70px)' }}
        />
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-bg-secondary/95 backdrop-blur-md px-6 py-3 rounded-full border border-accent-primary/30 shadow-xl shadow-accent-primary/10"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
        <span className="text-sm font-medium text-text-primary">Available for opportunities</span>
      </motion.div>

      {/* Floating tech icons around */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none"
      >
        {['⚛️', '🚀', '💻', '⚡'].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl"
            style={{
              top: `${20 + i * 20}%`,
              left: i % 2 === 0 ? '-5%' : '95%',
            }}
            animate={{ y: [0, -10, 0], rotate: [0, 360] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
