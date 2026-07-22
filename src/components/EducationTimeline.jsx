import React from 'react';
import { GraduationCap, Award, Cloud, Wrench, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { educationAndRoadmap } from '../data/portfolioData';

export default function EducationTimeline() {
  const getTimelineIcon = (type) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Achievement':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Certification':
        return <Cloud className="w-5 h-5 text-emerald-400" />;
      case 'Workshop':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="glow-orb-cyan top-1/2 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Achievements Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education, <span className="text-gradient-cyan">Awards & Workshops</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Academic foundation at Sri Krishna College of Technology alongside national robotics achievements and specialized cloud certifications.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-amber-500 opacity-30 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationAndRoadmap.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Icon in Center */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-500/60 shadow-lg shadow-cyan-950/60">
                    {getTimelineIcon(item.type)}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-3 relative overflow-hidden group">
                      
                      {/* Badge & Period */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/80 flex items-center gap-1">
                          {item.badge}
                        </span>
                        
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <div>
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400 mt-0.5">
                          {item.institution}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                        {item.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
