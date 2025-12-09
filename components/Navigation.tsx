import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Affiliations', href: '#affiliations' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-mint-500 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
              K
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-slate-800 tracking-wide">Dr. Kalkidan</h1>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Smile Enthusiast</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-mint-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#book"
              onClick={(e) => handleNavClick(e, '#book')}
              className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-mint-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-slate-100">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-mint-600 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#book"
                onClick={(e) => handleNavClick(e, '#book')}
                className="block px-3 py-3 text-base font-bold text-mint-600 hover:bg-slate-50 rounded-lg"
              >
                Book Appointment
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a 
        href="https://instagram.com/kalkidanephrem_" 
        target="_blank" 
        rel="noreferrer"
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-pink-600 hover:scale-110 transition-transform duration-300 border border-slate-100"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="#"
        className="w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 animate-pulse"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};