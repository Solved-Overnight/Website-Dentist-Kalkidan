import React from 'react';
import { Navbar, FloatingContact } from './components/Navigation';
import { Hero, About } from './components/HeroAndAbout';
import { Services, Gallery, Affiliations } from './components/Features';
import { Testimonials, Booking, DentalChat, FAQ } from './components/Interactive';
import { MapPin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Dr. Kalkidan Ephrem</h3>
            <p className="text-sm max-w-xs text-slate-400">
              Transforming lives one smile at a time. Combining advanced technology with artistic precision.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/kalkidanephrem_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="mailto:info@drkalkidan.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-mint-400 transition-colors">About</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-mint-400 transition-colors">Services</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-mint-400 transition-colors">Smile Makeovers</a></li>
              <li><a href="#book" onClick={(e) => handleNavClick(e, '#book')} className="hover:text-mint-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-mint-500 shrink-0" />
              <p>
                Addis Ababa, Ethiopia<br />
                Near Black Lion Hospital Area<br />
                <span className="text-slate-500 text-xs block mt-2">(Exact location provided upon booking)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Kalkidan Ephrem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Affiliations />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
      <FloatingContact />
      <DentalChat />
    </div>
  );
}

export default App;