import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-fuchsia-500 font-black uppercase tracking-[0.4em] text-sm mb-4 block">FORMACIÓN INTEGRAL</span>
            <h2 className="text-5xl md:text-7xl font-black font-oswald uppercase leading-none">PROGRAMAS DE <span className="text-fuchsia-500">ÉLITE</span></h2>
            <p className="text-gray-400 mt-6 font-bold uppercase tracking-widest text-xs md:text-sm">
              Diseñados específicamente para <span className="text-white">niñas, niños y adolescentes</span>. 
              En The Machine, la excelencia no tiene edad: calibramos el talento desde los <span className="text-fuchsia-500 underline decoration-2 underline-offset-8">5 años</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group relative h-[550px] overflow-hidden rounded-3xl bg-zinc-950 border border-white/5 transition-all duration-500 hover:border-fuchsia-500/40 hover:shadow-[0_0_50px_rgba(217,70,239,0.15)]">
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-1000 saturate-[1.2] contrast-[1.1] group-hover:scale-110 group-hover:opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              
              <div className="absolute top-8 right-8">
                 <div className="bg-fuchsia-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-black italic text-xl shadow-xl transform group-hover:rotate-[360deg] transition-transform duration-700">
                   M
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-fuchsia-500"></span>
                  <span className="text-fuchsia-400 text-[10px] font-black uppercase tracking-widest">{program.age}</span>
                </div>
                <h3 className="text-4xl font-black font-oswald uppercase mb-6 text-white group-hover:text-fuchsia-500 transition-colors drop-shadow-xl">{program.title}</h3>
                <p className="text-gray-300 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                  {program.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all delay-100">
                  <span className="text-[9px] text-white font-black uppercase tracking-widest">Inscripciones Abiertas</span>
                  <svg className="w-5 h-5 text-fuchsia-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;