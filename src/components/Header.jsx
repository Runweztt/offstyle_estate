import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Homepage data - centralized configuration
const HOMEPAGE_VARIANTS = [
  { id: 1, path: '/', label: 'Classic Hero', description: 'Full-screen slider with overlay content' },
  { id: 2, path: '/home-2', label: 'Split Layout', description: 'Side-by-side content and imagery' },
  { id: 3, path: '/home-3', label: 'Minimal Center', description: 'Centered hero with stats bar' },
  { id: 4, path: '/home-4', label: 'Navigation Slider', description: 'Full-screen with nav arrows' },
  { id: 5, path: '/home-5', label: 'Thumbnail Gallery', description: 'Interactive thumbnail slider' },
];

const NAV_LINKS = [
  { name: 'Home', path: '/', hasDropdown: true, dropdownItems: HOMEPAGE_VARIANTS },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedItem(null);
  }, [location]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileExpandedItem(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Debounced dropdown handlers to prevent flickering
  const handleDropdownEnter = useCallback((linkName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(linkName);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname.startsWith('/home-');
    }
    return location.pathname === path;
  };

  const isCurrentPage = (path) => location.pathname === path;

  return (
    <header 
      className={`
        fixed w-full z-[1001] transition-all duration-300 bg-white
        ${isScrolled ? 'shadow-lg py-0' : 'py-1'}
      `}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Go to homepage">
            <img 
              src="/images/logo.png" 
              alt="Off-Style Real Estate" 
              className={`transition-all duration-300 ${isScrolled ? 'h-[35px] md:h-[45px]' : 'h-[40px] md:h-[50px]'} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" role="navigation" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li 
                  key={link.name} 
                  className="relative"
                  ref={link.hasDropdown ? dropdownRef : null}
                  onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.name)}
                  onMouseLeave={() => link.hasDropdown && handleDropdownLeave()}
                >
                  <Link
                    to={link.path}
                    className={`
                      text-[17px] font-bold py-6 inline-flex items-center gap-1 transition-colors
                      ${isActive(link.path) ? 'text-primary' : 'text-heading hover:text-primary'}
                    `}
                    aria-haspopup={link.hasDropdown ? 'true' : undefined}
                    aria-expanded={link.hasDropdown ? activeDropdown === link.name : undefined}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg 
                        className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && (
                    <MegaDropdown 
                      isOpen={activeDropdown === link.name}
                      items={link.dropdownItems}
                      currentPath={location.pathname}
                      onMouseEnter={() => handleDropdownEnter(link.name)}
                      onMouseLeave={handleDropdownLeave}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="!hidden lg:!inline-flex btn-main fx-slide"
            >
              <span>Schedule Visit</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-heading transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav 
          isOpen={isMobileMenuOpen}
          links={NAV_LINKS}
          currentPath={location.pathname}
          expandedItem={mobileExpandedItem}
          onToggleExpand={setMobileExpandedItem}
          isActive={isActive}
        />
      </div>
    </header>
  );
}

// Mega Dropdown Component
function MegaDropdown({ isOpen, items, currentPath, onMouseEnter, onMouseLeave }) {
  return (
    <>
      {/* Invisible bridge to prevent gap issues */}
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 w-full h-4 ${isOpen ? 'block' : 'hidden'}`}
        onMouseEnter={onMouseEnter}
      />
      
      <div 
        className={`
          absolute left-1/2 -translate-x-1/2 top-full mt-2
          bg-white rounded-2xl shadow-2xl border border-gray-100
          transition-all duration-300 origin-top
          ${isOpen 
            ? 'opacity-100 scale-100 visible translate-y-0' 
            : 'opacity-0 scale-95 invisible -translate-y-2'
          }
        `}
        style={{ width: '720px' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="menu"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h6 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Homepage Styles</h6>
            <span className="text-xs text-gray-400">{items.length} variations</span>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {items.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                className="group block"
                role="menuitem"
              >
                <div className={`
                  relative overflow-hidden rounded-xl border-2 transition-all duration-300
                  ${currentPath === item.path 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-transparent hover:border-primary/50'
                  }
                `}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={`/images/demo/homepage-${item.id}.webp`} 
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium">View Demo</span>
                  </div>
                  
                  {/* Current Page Indicator */}
                  {currentPath === item.path && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-heading" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="mt-3 text-center">
                  <h5 className={`text-sm font-semibold mb-0.5 transition-colors ${currentPath === item.path ? 'text-primary' : 'group-hover:text-primary'}`}>
                    {item.label}
                  </h5>
                  <p className="text-xs text-gray-400 leading-tight hidden lg:block">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile Navigation Component
function MobileNav({ isOpen, links, currentPath, expandedItem, onToggleExpand, isActive }) {
  return (
    <nav 
      className={`
        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}
      `}
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-1 pt-4">
        {links.map((link) => (
          <li key={link.name}>
            {link.hasDropdown ? (
              <>
                <button
                  onClick={() => onToggleExpand(expandedItem === link.name ? null : link.name)}
                  className={`
                    w-full flex items-center justify-between py-3 px-4 text-[17px] font-bold rounded-lg transition-colors
                    ${isActive(link.path) ? 'bg-primary/10 text-primary' : 'text-heading hover:bg-gray-100'}
                  `}
                  aria-expanded={expandedItem === link.name}
                >
                  <span>{link.name}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${expandedItem === link.name ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown Items */}
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${expandedItem === link.name ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-lg mt-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`
                          flex items-center gap-3 p-3 rounded-lg transition-colors
                          ${currentPath === item.path 
                            ? 'bg-primary text-heading' 
                            : 'bg-white hover:bg-primary/10'
                          }
                        `}
                      >
                        <div className="w-12 h-9 rounded overflow-hidden flex-shrink-0 bg-gray-200">
                          <img 
                            src={`/images/demo/homepage-${item.id}.webp`} 
                            alt={item.label}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-medium truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Link
                to={link.path}
                className={`
                  block py-3 px-4 text-[17px] font-bold rounded-lg transition-colors
                  ${isActive(link.path) 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-heading hover:bg-gray-100'}
                `}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
