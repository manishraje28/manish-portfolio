import React, { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/homepage'));

const Routes = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-bg-primary text-accent-primary">
        <span className="font-sans text-xl animate-pulse">Loading...</span>
      </div>
    }>
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        {/* Redirect all other routes to Home for Single Page consistency */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </Suspense>
  );
};

export default Routes;
