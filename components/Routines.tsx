import React from 'react';
import { ROUTINES } from '../constants';

const Routines: React.FC = () => {
  return (
    <section id="routines" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black font-oswald uppercase text-center mb-16 italic">RUTINAS THE MACHINE</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {ROUTINES.map((routine, index) => (
            <div key={index} className="group relative h-[450px] overflow-hidden border-r border-white/5 last:border-0">
              <img 
                src={routine.image} 
                alt={routine.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 saturate-150 contrast-110 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-black font-oswald uppercase mb-4 text-white group-hover:text-fuchsia-500 drop-shadow-lg transition-colors">{routine.title}</h3>
                <p className="text-gray-200 text-sm font-medium drop-shadow-md">{routine.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Routines;