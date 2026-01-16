
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { STATS } from '../constants';

const data = [
  { name: 'Velocidad', value: 95 },
  { name: 'Táctica', value: 88 },
  { name: 'Resistencia', value: 92 },
  { name: 'Fuerza', value: 85 },
  { name: 'Técnica', value: 98 },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-black font-oswald uppercase mb-8">NUESTROS NÚMEROS</h2>
          <div className="grid grid-cols-2 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-fuchsia-500 pl-6">
                <div className="text-4xl font-black font-oswald text-white">{stat.value}</div>
                <div className="text-gray-500 uppercase text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black/40 p-8 rounded-3xl border border-white/10 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #d946ef' }} />
              <Bar dataKey="value">
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#d946ef' : '#fff'} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Stats;
