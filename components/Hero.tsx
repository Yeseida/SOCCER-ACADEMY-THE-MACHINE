
import React from 'react';
import { REGISTRATION_FORM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" 
          alt="Acción de fútbol profesional" 
          className="w-full h-full object-cover grayscale-[20%] opacity-70 scale-105 transform transition-transform duration-[20s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-fuchsia-500/10 mix-blend-color"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div className="inline-block border-2 border-fuchsia-500 text-fuchsia-500 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-[0_0_30px_rgba(217,70,239,0.3)] backdrop-blur-sm">
          MATRÍCULA GRATUITA • TEMPORADA 2026
        </div>
        
        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-black font-oswald uppercase tracking-tighter italic leading-[0.85] mb-12 text-shadow-sharp">
          SOCCER ACADEMY <br />
          <span className="text-fuchsia-500 stroke-text-fuchsia neon-glow-fuchsia">THE MACHINE</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-fuchsia-500 text-black px-16 py-7 rounded-sm font-black uppercase text-xl hover:bg-white transition-all shadow-[0_0_60px_rgba(217,70,239,0.5)] text-center transform hover:-translate-y-2 active:scale-95"
          >
            Sincronizar Inscripción
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;