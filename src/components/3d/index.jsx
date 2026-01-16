import React, { Suspense } from 'react';

// Lazy load 3D components for better performance
const ParticleField = React.lazy(() => import('./ParticleField'));
const FloatingShapes = React.lazy(() => import('./FloatingShapes'));
const TechGlobe = React.lazy(() => import('./TechGlobe'));
const WaveDivider = React.lazy(() => import('./WaveDivider'));
const Text3DScene = React.lazy(() => import('./Text3DScene'));

// Re-export TiltCard (not lazy as it's lightweight)
export { default as TiltCard } from './TiltCard';

// Wrapper components with Suspense fallbacks
export function ParticleFieldWrapper(props) {
  return (
    <Suspense fallback={<div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg-primary to-bg-secondary" />}>
      <ParticleField {...props} />
    </Suspense>
  );
}

export function FloatingShapesWrapper(props) {
  return (
    <Suspense fallback={<div className="absolute inset-0 -z-10" />}>
      <FloatingShapes {...props} />
    </Suspense>
  );
}

export function TechGlobeWrapper(props) {
  return (
    <Suspense fallback={
      <div className="w-full h-full min-h-[300px] flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin" />
      </div>
    }>
      <TechGlobe {...props} />
    </Suspense>
  );
}

export function WaveDividerWrapper(props) {
  return (
    <Suspense fallback={<div className="w-full h-[200px] bg-gradient-to-b from-transparent to-bg-secondary/20" />}>
      <WaveDivider {...props} />
    </Suspense>
  );
}

export function Text3DSceneWrapper(props) {
  return (
    <Suspense fallback={<div className="w-full h-[200px]" />}>
      <Text3DScene {...props} />
    </Suspense>
  );
}

// Export all
export {
  ParticleFieldWrapper as ParticleField,
  FloatingShapesWrapper as FloatingShapes,
  TechGlobeWrapper as TechGlobe,
  WaveDividerWrapper as WaveDivider,
  Text3DSceneWrapper as Text3DScene,
};
