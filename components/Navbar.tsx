
import React, { useState, useEffect } from 'react';
import { REGISTRATION_FORM_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <span className="text-2xl md:text-3xl font-black font-oswald tracking-tighter uppercase italic text-white group-hover:text-fuchsia-500 transition-colors">
            SOCCER ACADEMY <span className="text-fuchsia-500">THE MACHINE</span>
          </span>
        </div>
        
        <div className="hidden xl:flex space-x-8 font-bold uppercase text-[10px] tracking-[0.4em] text-gray-400">
          <a href="#hero" className="hover:text-fuchsia-500 transition-all">Inicio</a>
          <a href="#programs" className="hover:text-fuchsia-500 transition-all">Programas</a>
          <a href="#methodology" className="hover:text-fuchsia-500 transition-all">Método</a>
          <a href="#about" className="hover:text-fuchsia-500 transition-all">ADN</a>
        </div>

        <a 
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fuchsia-500 text-black px-6 md:px-10 py-3 rounded-full font-black uppercase text-xs hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(217,70,239,0.3)] whitespace-nowrap"
        >
          ¡Inscripción Gratis!
        </a>
      </div>
    </nav>
  );
};

export default Navbar;