import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-terminal-bg text-terminal-error font-mono p-4">
          <div className="terminal-window p-8 max-w-2xl">
            <div className="terminal-header">
              <span className="terminal-button bg-terminal-error"></span>
              <span className="terminal-button bg-terminal-warning"></span>
              <span className="terminal-button bg-terminal-text"></span>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl mb-4 glow-text">$ Error: Something went wrong</h1>
              <p className="text-terminal-text/70 mb-4">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 border border-terminal-text/30 hover:bg-terminal-text/10 transition-colors"
              >
                Reload Application
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
