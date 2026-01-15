import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-light section-dark">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-10 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          
          {/* About */}
          <div className="lg:pr-8">
            <Link to="/" className="inline-block mb-8">
              <img 
                src="/images/logo.png" 
                alt="Off-Style Real Estate" 
                className="h-[70px] w-auto"
              />
            </Link>
            <p className="text-white/70 text-[17px] leading-[1.9] mb-8">
              Discover your perfect home with Offstyle Real Estate. We specialize in premium residential properties designed for modern living.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[22px] font-bold text-white mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 mt-6">
              <li>
                <Link to="/" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 group">
                  <i className="fa-solid fa-arrow-right text-xs text-primary group-hover:translate-x-1 transition-transform"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 group">
                  <i className="fa-solid fa-arrow-right text-xs text-primary group-hover:translate-x-1 transition-transform"></i>
                  About Property
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 group">
                  <i className="fa-solid fa-arrow-right text-xs text-primary group-hover:translate-x-1 transition-transform"></i>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 group">
                  <i className="fa-solid fa-arrow-right text-xs text-primary group-hover:translate-x-1 transition-transform"></i>
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 group">
                  <i className="fa-solid fa-arrow-right text-xs text-primary group-hover:translate-x-1 transition-transform"></i>
                  Schedule a Visit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Property Features */}
          <div>
            <h4 className="text-[22px] font-bold text-white mb-8 relative inline-block">
              Property Features
              <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 mt-6">
              <li className="text-white/70 flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <i className="fa-solid fa-bed text-primary"></i>
                </span>
                <span className="font-medium">4 Bedrooms</span>
              </li>
              <li className="text-white/70 flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <i className="fa-solid fa-bath text-primary"></i>
                </span>
                <span className="font-medium">5 Bathrooms</span>
              </li>
              <li className="text-white/70 flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <i className="fa-solid fa-car text-primary"></i>
                </span>
                <span className="font-medium">3 Car Garage</span>
              </li>
              <li className="text-white/70 flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <i className="fa-solid fa-ruler-combined text-primary"></i>
                </span>
                <span className="font-medium">1,665 sqft</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-[22px] font-bold text-white mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-6 mt-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <i className="fa-solid fa-location-dot text-primary group-hover:text-heading text-lg transition-colors"></i>
                </div>
                <div>
                  <h6 className="text-white font-semibold text-[15px] mb-1">Our Location</h6>
                  <p className="text-white/60 mb-0 text-[15px]">KG 123 Street, Kigali<br />Rwanda</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <i className="fa-solid fa-phone text-primary group-hover:text-heading text-lg transition-colors"></i>
                </div>
                <div>
                  <h6 className="text-white font-semibold text-[15px] mb-1">Call Us</h6>
                  <p className="text-white/60 mb-0 text-[15px]">+250 780 987 150</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <i className="fa-solid fa-envelope text-primary group-hover:text-heading text-lg transition-colors"></i>
                </div>
                <div>
                  <h6 className="text-white font-semibold text-[15px] mb-1">Email Us</h6>
                  <p className="text-white/60 mb-0 text-[15px]">contact@offstyle.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-[15px]">
            <p className="mb-0">© 2026 Offstyle Real Estate. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
