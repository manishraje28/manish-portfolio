import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Routes />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
