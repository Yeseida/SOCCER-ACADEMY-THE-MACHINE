import React from 'react';
import { REGISTRATION_FORM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Fondo Dinámico con Imagen Élite */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2000" 
          alt="Acción de fútbol profesional" 
          className="w-full h-full object-cover grayscale-[30%] opacity-60 scale-100 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-fuchsia-900/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <div className="inline-flex items-center gap-3 border border-fuchsia-500/40 bg-black/60 backdrop-blur-2xl text-fuchsia-400 px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-12 shadow-[0_0_40px_rgba(217,70,239,0.3)] animate-in fade-in slide-in-from-top-10 duration-1000">
          <span className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full animate-ping shadow-[0_0_15px_#d946ef]"></span>
          MATRÍCULA GRATUITA • LAWRENCE MA
        </div>
        
        <h1 className="text-6xl md:text-[9rem] lg:text-[11rem] font-black font-oswald uppercase tracking-tighter italic leading-[0.8] mb-12 text-shadow-sharp animate-in zoom-in-90 duration-800">
          THE <br className="hidden md:block" />
          <span className="text-fuchsia-500 stroke-text-fuchsia neon-glow-fuchsia">MACHINE</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gray-300 font-bold uppercase tracking-[0.4em] text-[10px] md:text-base mb-14 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500">
          Calibramos el talento. Forjamos la élite del fútbol moderno.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <a 
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto overflow-hidden bg-fuchsia-600 text-white px-16 py-7 rounded-sm font-black uppercase text-xl tracking-widest transition-all hover:bg-white hover:text-black shadow-[0_25px_50px_rgba(217,70,239,0.4)] transform hover:-translate-y-2 active:scale-95"
          >
            <span className="relative z-10 italic">Únete a la Élite</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a 
            href="#about"
            className="w-full md:w-auto border border-white/30 hover:border-fuchsia-500 text-white px-14 py-7 rounded-sm font-black uppercase text-sm tracking-widest transition-all backdrop-blur-md hover:bg-white/10"
          >
            Nuestra Metodología
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 opacity-50 hover:opacity-100 transition-opacity group cursor-pointer">
        <div className="w-[1px] h-20 bg-gradient-to-b from-fuchsia-500 via-fuchsia-500/50 to-transparent animate-pulse"></div>
      </a>
    </section>
  );