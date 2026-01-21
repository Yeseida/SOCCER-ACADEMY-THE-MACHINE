import React, { useState, useEffect } from 'react';
import { REGISTRATION_FORM_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Programas', href: '#programs' },
    { name: 'Método', href: '#methodology' },
    { name: 'ADN', href: '#about' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl md:text-2xl font-black font-oswald tracking-tighter uppercase italic text-white group-hover:text-fuchsia-500 transition-all">
            THE <span className="text-fuchsia-500">MACHINE</span>
          </span>
        </div>
        
        <div className="hidden lg:flex space-x-10 font-bold uppercase text-[10px] tracking-[0.5em] text-gray-400">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="hover:text-fuchsia-500 transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a 
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fuchsia-500 text-black px-8 py-3 rounded-sm font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(217,70,239,0.2)] whitespace-nowrap"
        >
          ¡Inscripción!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
