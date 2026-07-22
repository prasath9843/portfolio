import React from 'react';
import { Code2, Trophy, Cloud, BarChart3, Sparkles } from 'lucide-react';
import { keyStats } from '../data/portfolioData';

export default function StatsBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-amber-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-sky-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {keyStats.map((stat) => (
          <div
            key={stat.id}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex items-center gap-4 group relative overflow-hidden"
          >
            {/* Background Glow Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 blur-xl rounded-full group-hover:opacity-20 transition-opacity`} />

            {/* Icon Container */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md group-hover:scale-110 transition-transform">
              {getIcon(stat.icon)}
            </div>

            {/* Label & Value */}
            <div>
              <div className={`text-2xl sm:text-3xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {stat.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
