
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Methodology from './components/Methodology';
import Routines from './components/Routines';
import Stats from './components/Stats';
import ChatBot from './components/ChatBot';
import { REGISTRATION_FORM_URL, WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Asegurar que al cargar la página estemos arriba
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-black min-h-screen selection:bg-fuchsia-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Sección ADN / Sobre Nosotros */}
        <section className="py-32 bg-black overflow-hidden relative" id="about">
          <div className="container mx-auto px-6 relative">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
              <span className="text-[35rem] font-black font-oswald text-white leading-none">MACHINE</span>
            </div>
            
            <div className="max-w-4xl relative z-10 reveal">
              <h2 className="text-fuchsia-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-8">NUESTRO ADN • ELITE SYSTEM</h2>
              <p className="text-6xl md:text-8xl font-black font-oswald uppercase italic tracking-tighter mb-10 leading-[0.85] text-white text-shadow-sharp">
                CALIBRAMOS EL <span className="text-fuchsia-500">TALENTO</span>, <br />
                FORJAMOS <span className="stroke-text-fuchsia neon-glow-fuchsia">LEYENDAS</span>.
              </p>
              <div className="h-1.5 w-32 bg-fuchsia-500 mb-16 shadow-[0_0_40px_rgba(217,70,239,0.8)]"></div>
              
              <div className="space-y-10">
                <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                  En <span className="text-white font-black italic">SOCCER ACADEMY THE MACHINE</span>, no solo entrenamos jugadores; construimos atletas de alto impacto mediante un sistema de calibración técnica único en Massachusetts.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 p-10 bg-zinc-900/30 rounded-sm border-l-4 border-fuchsia-600 backdrop-blur-md max-w-3xl hover:bg-zinc-900/50 transition-colors">
                  <div className="w-20 h-20 bg-fuchsia-600 flex items-center justify-center rounded-sm shrink-0 shadow-[0_0_30px_rgba(217,70,239,0.3)] transform -rotate-2">
                    <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-fuchsia-500 font-black uppercase text-[10px] tracking-[0.3em] mb-1">Centro de Alto Rendimiento</p>
                    <p className="text-white text-3xl md:text-4xl font-black font-oswald uppercase tracking-tighter">40 LAWRENCE ST, LAWRENCE, MA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <Programs />
        </div>
        
        <div className="reveal">
          <Stats />
        </div>
        
        <div className="reveal">
          <Methodology />
        </div>
        
        <div className="reveal">
          <Routines />
        </div>

        {/* Galería de Impacto */}
        <section className="bg-black py-2 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200",
              "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200",
              "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
              "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1200"
            ].map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden border border-white/5 relative group cursor-crosshair">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms] grayscale group-hover:grayscale-0" alt={`Acción Machine ${i+1}`} />
                <div className="absolute inset-0 bg-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <div className="border border-white/40 px-6 py-3">
                     <span className="text-white font-black uppercase tracking-[0.5em] text-[10px]">THE MACHINE • PRO</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Élite */}
        <footer className="py-32 bg-black border-t border-white/5 text-center relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="mb-24 reveal">
              <div className="inline-block w-20 h-20 bg-fuchsia-500 rotate-45 mb-12 shadow-[0_0_60px_rgba(217,70,239,0.3)] transition-all hover:rotate-[225deg] duration-1000">
                <div className="-rotate-45 flex items-center justify-center w-full h-full">
                  <span className="text-black font-black text-4xl italic">M</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-8xl font-black font-oswald uppercase italic tracking-tighter text-white mb-8">
                SOCCER ACADEMY <br /> <span className="text-fuchsia-500">THE MACHINE</span>
              </h2>
              <p className="text-gray-500 uppercase tracking-[0.8em] text-[10px] font-bold mb-16 italic opacity-60">HIGH PERFORMANCE • MASSACHUSETTS</p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
                 <a 
                   href={REGISTRATION_FORM_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full md:w-auto bg-fuchsia-600 text-white px-16 py-7 rounded-sm font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-2xl active:scale-95"
                 >
                   Iniciar Inscripción
                 </a>
                 <a 
                   href={WHATSAPP_URL}
                   target="_blank"
                   className="w-full md:w-auto border border-white/20 text-white px-16 py-7 rounded-sm font-black uppercase text-sm tracking-widest hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all active:scale-95"
                 >
                   Chat WhatsApp
                 </a>
              </div>
            </div>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/5 py-12 reveal">
              {['TikTok', 'Instagram', 'Facebook'].map(social => (
                <a 
                  key={social}
                  href={`https://www.${social.toLowerCase()}.com/socceracademythemachine`} 
                  target="_blank" 
                  className="text-zinc-600 hover:text-fuchsia-500 transition-colors uppercase font-black text-[10px] tracking-[0.5em]"
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mb-20 text-left bg-zinc-950/40 p-10 md:p-14 border border-white/5 backdrop-blur-sm reveal">
              <h3 className="text-fuchsia-500 font-black uppercase text-xs tracking-[0.4em] mb-8">AVISO LEGAL • PRIVACIDAD</h3>
              <div className="space-y-6 text-zinc-600 text-[10px] leading-relaxed uppercase font-bold tracking-widest">
                <p>La integridad de nuestros atletas es lo primero. Los datos personales son tratados con protocolos de seguridad de acuerdo a las leyes vigentes en el estado de Massachusetts.</p>
                <p className="italic border-l-2 border-fuchsia-500/40 pl-6 text-zinc-500">© 2026 SOCCER ACADEMY THE MACHINE. TODOS LOS DERECHOS RESERVADOS. EL ÉXITO NO ES UN ACCIDENTE, ES CALIBRACIÓN.</p>
              </div>
            </div>
            
            <div className="text-zinc-900 text-[9px] uppercase tracking-[1em] font-black">
              DESIGNED FOR ELITE PERFORMANCE • MACHINE CORE v3.1
            </div>
          </div>
        </footer>
      </main>

      <ChatBot />
    </div>
  );
};

export default App;