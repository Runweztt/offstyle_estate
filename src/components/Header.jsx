import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHomeDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', hasDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`
      fixed w-full z-[1001] transition-all duration-300 bg-white
      ${isScrolled ? 'shadow-lg' : ''}
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          <div id="logo">
            <Link to="/">
              <img 
                src="/images/logo.png" 
                alt="Off-Style Real Estate" 
                className="h-[40px] md:h-[50px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li 
                  key={link.path} 
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsHomeDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsHomeDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`
                      text-[17px] font-bold py-6 inline-block transition-colors
                      ${isActive(link.path) ? 'text-heading' : 'text-heading hover:text-primary'}
                    `}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <span className="ml-1 text-[8px] opacity-50">▼</span>
                    )}
                  </Link>
                  
                  {/* Mega Menu Dropdown for Home */}
                  {link.hasDropdown && isHomeDropdownOpen && (
                    <>
                      {/* Invisible bridge */}
                      <div className="absolute top-full left-0 w-[200px] h-4"></div>
                      <div 
                        className="fixed left-4 bg-white shadow-xl rounded-lg z-[1002] border border-gray-100"
                        style={{ top: '60px', width: '680px' }}
                        onMouseEnter={() => setIsHomeDropdownOpen(true)}
                        onMouseLeave={() => setIsHomeDropdownOpen(false)}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-5 gap-3">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <div key={num} className="text-center group cursor-pointer" style={{ width: '120px' }}>
                                <div className="relative overflow-hidden rounded-md">
                                  <img 
                                    src={`/images/demo/homepage-${num}.webp`} 
                                    alt={`Homepage ${num}`}
                                    className="w-full h-[80px] object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                                    <Link to="/" className="btn-main text-[10px] px-2 py-1">
                                      Multipage
                                    </Link>
                                    <Link to="/" className="btn-main text-[10px] px-2 py-1">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <h5 className="mt-2 mb-0 text-sm font-medium">Homepage {num}</h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link 
                to="/contact" 
                className="btn-main fx-slide"
              >
                <span>Schedule Visit</span>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-heading transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-heading transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-heading transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}
        `}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`
                    block py-3 px-4 text-[17px] font-bold rounded transition-colors
                    ${isActive(link.path) 
                      ? 'bg-primary/10 text-heading' 
                      : 'text-heading hover:bg-gray-100'}
                  `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link to="/contact" className="btn-main w-full text-center block">
                Schedule Visit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
