
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Methodology from './components/Methodology';
import Routines from './components/Routines';
import ChatBot from './components/ChatBot';
import { REGISTRATION_FORM_URL, WHATSAPP_URL } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    { name: 'TikTok', url: 'https://www.tiktok.com/@socceracademythemachine?is_from_webapp=1&sender_device=pc' },
    { name: 'Instagram', url: 'https://www.instagram.com/socceracademythemachine' },
    { name: 'Facebook', url: 'https://www.facebook.com/socceracademythemachine' }
  ];

  return (
    <div className="relative bg-black min-h-screen selection:bg-fuchsia-600 selection:text-white selection:bg-opacity-80">
      <Navbar />
      <main>
        <Hero />
        
        {/* Sección ADN / Filosofía */}
        <section className="py-32 bg-black overflow-hidden relative" id="about">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[40rem] font-black font-oswald text-white leading-none">MACHINE</span>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-7 reveal">
                <header className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-px w-12 bg-fuchsia-500"></span>
                    <span className="text-fuchsia-500 font-black uppercase tracking-[0.5em] text-[10px]">ADN DE CAMPEONES</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black font-oswald uppercase italic tracking-tighter leading-[0.85] text-white mb-8">
                    PROGRAMAS DE ÉLITE DESDE LOS <span className="text-fuchsia-500 stroke-text-fuchsia neon-glow-fuchsia">5 AÑOS</span>.
                  </h2>
                </header>

                <div className="space-y-10">
                  <div className="relative p-10 bg-zinc-900/40 border-l-4 border-fuchsia-600 rounded-r-[2rem] backdrop-blur-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <p className="text-xl md:text-2xl text-white font-black italic leading-tight">
                      "Diseñamos un camino de éxito para <span className="text-fuchsia-500">niñas, niños y adolescentes</span>, aplicando metodología profesional desde el primer día."
                    </p>
                  </div>

                  <div className="space-y-6 max-w-2xl">
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                      En <span className="text-white font-bold italic">Soccer Academy The Machine</span>, no hay distinción: todos entrenan bajo un sistema de alto rendimiento adaptado a su etapa evolutiva.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                          <svg className="w-4 h-4 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest leading-snug italic">Inclusión Total: Niñas y Niños</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center shrink-0 border border-fuchsia-500/20">
                          <svg className="w-4 h-4 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest leading-snug italic">Elite Core desde los 5 años</p>
                      </div>
                    </div>

                    <p className="text-xl md:text-2xl text-white font-black uppercase italic tracking-tighter pt-6 border-t border-white/10">
                      Calibramos el <span className="text-fuchsia-500">talento</span> de la próxima generación.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-6 p-6 bg-zinc-950 border border-white/5 rounded-full hover:border-fuchsia-500/50 transition-all group">
                    <div className="w-12 h-12 bg-fuchsia-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.4)] group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    </div>
                    <div>
                      <p className="text-[9px] text-fuchsia-500 font-black uppercase tracking-[0.3em]">Centro de Alto Rendimiento</p>
                      <p className="text-white font-bold text-sm uppercase tracking-tighter italic">40 LAWRENCE ST, LAWRENCE MA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative reveal">
                <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] group">
                  <img 
                    src="https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200" 
                    alt="Entrenamiento enfocado de alta intensidad" 
                    className="w-full h-full object-cover saturate-150 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] text-white font-black uppercase tracking-widest">Compromiso Total</span>
                    </div>
                    <p className="text-gray-300 text-[10px] font-bold uppercase leading-tight">Formamos a los líderes del mañana, dentro y fuera del campo.</p>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600/20 blur-[80px] rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fuchsia-600/20 blur-[80px] rounded-full"></div>
              </div>

            </div>
          </div>
        </section>

        <div className="reveal">
          <Programs />
        </div>
        
        <div className="reveal">
          <Methodology />
        </div>
        
        <div className="reveal">
          <Routines />
        </div>

        {/* Galería de Impacto */}
        <section className="bg-black py-4 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200",
              "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
              "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
              "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200"
            ].map((img, i) => (
              <div key={i} className="aspect-[4/5] overflow-hidden border border-white/5 relative group cursor-crosshair">
                <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms] saturate-125 group-hover:saturate-150" alt={`Acción Machine ${i+1}`} />
                <div className="absolute inset-0 bg-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
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
              <h2 className="text-5xl md:text-8xl font-black font-oswald uppercase italic tracking-tighter text-white mb-8 leading-none">
                SOCCER ACADEMY <br /> <span className="text-fuchsia-500">THE MACHINE</span>
              </h2>
              <p className="text-gray-500 uppercase tracking-[0.8em] text-[10px] font-bold mb-16 italic opacity-60 italic">DESDE LOS 5 AÑOS • NIÑAS, NIÑOS Y ADOLESCENTES</p>
              
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
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-fuchsia-500 transition-colors uppercase font-black text-[10px] tracking-[0.5em]"
                >
                  {social.name}
                </a>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mb-20 text-left bg-zinc-950/40 p-10 md:p-14 border border-white/5 backdrop-blur-sm reveal">
              <h3 className="text-fuchsia-500 font-black uppercase text-[9px] tracking-[0.4em] mb-8">AVISO LEGAL • PRIVACIDAD</h3>
              <div className="space-y-6 text-zinc-600 text-[8px] leading-relaxed uppercase font-bold tracking-widest">
                <p>La integridad de nuestros atletas es nuestra prioridad. Los datos personales son tratados bajo estrictos protocolos de seguridad de acuerdo a las leyes de Massachusetts.</p>
                <p className="italic border-l-2 border-fuchsia-500/40 pl-6 text-zinc-500">© 2026 SOCCER ACADEMY THE MACHINE. TODOS LOS DERECHOS RESERVADOS. EL FÚTBOL NO ES SOLO UN JUEGO, ES UNA CIENCIA.</p>
              </div>
            </div>
            
            <div className="text-zinc-900 text-[9px] uppercase tracking-[1em] font-black">
              DESIGNED FOR ELITE PERFORMANCE • MACHINE CORE v3.3
            </div>
          </div>
        </footer>
      </main>

      <ChatBot />
    </div>
  );
};

export default App;