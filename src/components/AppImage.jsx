import React from 'react';

const AppImage = ({ src, alt, className = '', fallback = '/assets/placeholder.png' }) => {
  const [imageSrc, setImageSrc] = React.useState(src);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    setImageSrc(fallback);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-terminal-text/10 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
};

export default AppImage;
