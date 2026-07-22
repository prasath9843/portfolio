import React, { useState } from 'react';
import { Brain, Cloud, Code, Radio, Sparkles, Check, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-sky-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getAccentColor = (accent) => {
    switch (accent) {
      case 'sky':
        return {
          badge: 'bg-sky-950/80 text-sky-400 border-sky-800/80',
          bar: 'from-sky-500 to-cyan-400',
          tag: 'bg-sky-950 text-sky-300 border-sky-800/60'
        };
      case 'amber':
        return {
          badge: 'bg-amber-950/80 text-amber-400 border-amber-800/80',
          bar: 'from-amber-500 to-yellow-400',
          tag: 'bg-amber-950 text-amber-300 border-amber-800/60'
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80',
          bar: 'from-emerald-500 to-teal-400',
          tag: 'bg-emerald-950 text-emerald-300 border-emerald-800/60'
        };
      case 'purple':
        return {
          badge: 'bg-purple-950/80 text-purple-400 border-purple-800/80',
          bar: 'from-purple-500 to-indigo-400',
          tag: 'bg-purple-950 text-purple-300 border-purple-800/60'
        };
      default:
        return {
          badge: 'bg-cyan-950/80 text-cyan-400 border-cyan-800/80',
          bar: 'from-cyan-500 to-sky-400',
          tag: 'bg-cyan-950 text-cyan-300 border-cyan-800/60'
        };
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Glow background */}
      <div className="glow-orb-emerald top-1/2 -right-32 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-gradient-multi">Skills & Stack</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Categorized technical expertise spanning Python data analytics, AWS cloud fundamentals, software engineering algorithms, and IoT sensor hardware.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'glass-pill text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md'
                    : 'glass-pill text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Categorized Glassmorphism Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const styles = getAccentColor(category.accent);
            return (
              <div
                key={category.id}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl border ${styles.badge}`}>
                        {getCategoryIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {category.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-400">
                          {category.skills.length} Technical Metrics
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills List with Proficiency Indicator */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-400" />
                            {skill.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono ${styles.tag}`}>
                            {skill.tag}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${styles.bar} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PRACTICAL IMPLEMENTATION</span>
                  <span className="text-cyan-400">ACTIVE STACK</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
