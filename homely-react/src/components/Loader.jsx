import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null;

  return (
    <div 
      id="de-loader"
      className={`
        fixed inset-0 bg-bg-default z-[9999] flex items-center justify-center
        transition-opacity duration-500
        ${isLoaded ? 'opacity-0 pointer-events-none' : ''}
      `}
    >
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
