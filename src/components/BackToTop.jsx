import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full
        flex items-center justify-center cursor-pointer
        transition-all duration-300 z-[1000] shadow-lg
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
      aria-label="Back to top"
    >
      <span className="border-solid border-heading border-r-2 border-b-2 inline-block p-1.5 rotate-[-135deg] mb-1"></span>
    </button>
  );
}
