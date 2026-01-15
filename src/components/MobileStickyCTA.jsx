import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-[1000] lg:hidden
      transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="bg-primary p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <Link 
          to="/contact" 
          className="block w-full py-3 text-center text-white font-bold text-lg rounded-lg bg-secondary hover:bg-primary transition-colors"
        >
          <i className="fa-solid fa-calendar-check mr-2"></i>
          Schedule a Visit
        </Link>
      </div>
    </div>
  );
}
