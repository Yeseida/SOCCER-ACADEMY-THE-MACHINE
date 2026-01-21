import React from 'react';

const phases = [
  { 
    time: "15 min", 
    title: "CALENTAMIENTO DINÁMICO", 
    subtitle: "Activación muscular y preparación física para evitar lesiones.", 
    items: ["Movilidad articular", "Ejercicios de coordinación", "Activación cardiovascular"], 
    color: "fuchsia" 
  },
  { 
    time: "25 min", 
    title: "TÉCNICA INDIVIDUAL", 
    subtitle: "Desarrollo de habilidades fundamentales con el balón.", 
    items: ["Control y pase", "Conducción", "Regates y fintas"], 
    color: "white" 
  },
  { 
    time: "20 min", 
    title: "TÁCTICA Y ESTRATEGIA", 
    subtitle: "Comprensión del juego y toma de decisiones en el campo.", 
    items: ["Posicionamiento", "Juego en equipo", "Lectura del partido"], 
    color: "fuchsia" 
  },
  { 
    time: "30 min", 
    title: "PARTIDO Y COMPETICIÓN", 
    subtitle: "Aplicación práctica de lo aprendido en situaciones reales.", 
    items: ["Partidos reducidos", "Ejercicios de finalización", "Juego libre"], 
    color: "white" 
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-32 bg-black relative overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 reveal">
          <span className="text-fuchsia-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">SISTEMA DE ALTO RENDIMIENTO</span>
          <h2 className="text-5xl md:text-7xl font-black font-oswald uppercase leading-none text-white italic mb-8">
            METODOLOGÍA DE <span className="text-fuchsia-500 text-shadow-sharp">ENTRENAMIENTO</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl">
            Cada sesión está diseñada para maximizar el desarrollo de nuestros jugadores con una estructura probada y efectiva.
          </p>
          <div className="mt-8 inline-flex items-center gap-4 bg-zinc-900/50 border border-fuchsia-500/20 px-8 py-4 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.1)]">
            <span className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full animate-pulse"></span>
            <span className="text-white font-black uppercase tracking-widest text-sm">Duración total: 90 minutos</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal">
          {phases.map((phase, index) => (
            <div key={index} className="group relative bg-zinc-950/50 border border-white/5 p-12 rounded-[2.5rem] hover:bg-zinc-900 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(217,70,239,0.15)]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
                <span className="text-7xl font-black font-oswald">{index + 1}</span>
              </div>
              
              <div className={`text-4xl font-black font-oswald italic mb-6 ${phase.color === 'fuchsia' ? 'text-fuchsia-500' : 'text-white'}`}>
                {phase.time}
              </div>
              
              <h3 className="text-2xl font-black font-oswald uppercase mb-4 text-white tracking-tight leading-tight">{phase.title}</h3>
              <p className="text-gray-400 text-[11px] mb-8 leading-relaxed font-bold uppercase tracking-wider">{phase.subtitle}</p>
              
              <ul className="space-y-4">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-fuchsia-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full shadow-[0_0_8px_rgba(217,70,239,0.8)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal flex justify-center">
          <div className="max-w-3xl bg-zinc-950 border border-white/5 border-l-4 border-l-fuchsia-500 p-10 rounded-r-[2rem] rounded-l-md italic text-gray-400 text-sm md:text-lg font-medium shadow-2xl">
            "Nuestros entrenadores adaptan cada rutina según la edad y nivel de los jugadores para asegurar una evolución constante y personalizada."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;