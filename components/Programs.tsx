
import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-fuchsia-500 font-bold uppercase tracking-widest text-sm">Nuestra Academia</span>
            <h2 className="text-4xl md:text-6xl font-black font-oswald uppercase mt-2">PROGRAMAS DE ÉLITE</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group relative h-[500px] overflow-hidden rounded-xl bg-zinc-950 border border-white/5 transition-all hover:border-fuchsia-500/50">
              <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block px-3 py-1 bg-fuchsia-500 text-black text-xs font-black uppercase mb-3">{program.age}</span>
                <h3 className="text-3xl font-black font-oswald uppercase mb-4 text-white group-hover:text-fuchsia-500">{program.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;