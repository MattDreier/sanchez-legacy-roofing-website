import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50 relative">
            <svg className="h-8 w-8 text-primary-blue" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="#34A853"></path>
              <path d="M39.998 35.764C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832L24 40L39.998 35.764Z" fill="#1A73E8"></path>
              <path d="M4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.619 33.7259 44 34.8021 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8021 4.38096 33.7259 4.94662 32.777L4.95178 32.7688Z" fill="none" stroke="#5F6368" strokeWidth="2"></path>
            </svg>
            <h2 className="font-display text-xl font-medium tracking-wide text-text-primary-light">Sanchez Legacy Roofing</h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8 font-medium text-text-secondary-light">
              {['Solutions', 'Technology', 'Why Us', 'Support'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary-blue transition-colors relative group">
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>
            <button className="bg-primary-blue text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">
              Get your estimate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 text-text-primary-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div 
        className={`fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 text-lg font-medium ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {['Solutions', 'Technology', 'Why Us', 'Support'].map((item) => (
          <a key={item} href="#" className="text-text-primary-light hover:text-primary-blue" onClick={() => setMobileMenuOpen(false)}>
            {item}
          </a>
        ))}
        <button className="bg-primary-blue text-white px-8 py-3 rounded-full shadow-lg">
          Get your estimate
        </button>
      </motion.div>
    </motion.header>
  );
};

export default Header;