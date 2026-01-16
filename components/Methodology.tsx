
import React from 'react';

const phases = [
  { time: "15 min", title: "Calentamiento", subtitle: "Activación muscular.", items: ["Movilidad", "Coordinación"], color: "fuchsia" },
  { time: "25 min", title: "Técnica", subtitle: "Dominio del balón.", items: ["Control", "Pase"], color: "white" },
  { time: "20 min", title: "Táctica", subtitle: "Estrategia de juego.", items: ["Posicionamiento", "Lectura"], color: "fuchsia" },
  { time: "30 min", title: "Partido", subtitle: "Competición real.", items: ["Finalización", "Juego libre"], color: "white" }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black font-oswald uppercase mb-12">METODOLOGÍA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="bg-zinc-950 border border-white/5 p-8 rounded-2xl hover:border-fuchsia-500/50 transition-all">
              <div className={`text-3xl font-black font-oswald italic mb-4 ${phase.color === 'fuchsia' ? 'text-fuchsia-500' : 'text-white'}`}>{phase.time}</div>
              <h3 className="text-xl font-black font-oswald uppercase mb-3 text-white">{phase.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{phase.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;