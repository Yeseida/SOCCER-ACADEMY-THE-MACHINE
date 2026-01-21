import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="reveal">
          <span className="text-fuchsia-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">RESULTADOS COMPROBADOS</span>
          <h2 className="text-5xl md:text-8xl font-black font-oswald uppercase mb-20 italic">
            NUESTROS <span className="text-fuchsia-500">NÚMEROS</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 reveal">
          {STATS.map((stat, idx) => (
            <div key={idx} className="group p-8 bg-black/20 border border-white/5 rounded-2xl hover:border-fuchsia-500/30 transition-all duration-500">
              <div className="text-5xl md:text-7xl font-black font-oswald text-white mb-2 group-hover:text-fuchsia-500 transition-colors">
                {stat.value}
              </div>
              <div className="h-1 w-12 bg-fuchsia-500 mx-auto mb-4 group-hover:w-20 transition-all"></div>
              <div className="text-gray-500 uppercase text-[10px] md:text-xs font-black tracking-[0.3em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
    </section>
  );
};

export default Stats;