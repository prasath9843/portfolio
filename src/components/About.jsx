import React from 'react';
import { BarChart2, CloudRain, Cpu, Users, CheckCircle, Sparkles, Award } from 'lucide-react';
import { personalData, coreValues } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BarChart2':
        return <BarChart2 className="w-6 h-6 text-sky-400" />;
      case 'CloudRain':
        return <CloudRain className="w-6 h-6 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Subtle Background Orbs */}
      <div className="glow-orb-cyan top-1/4 -left-32 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Prasath S</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Insights Through{' '}
            <span className="text-gradient-cyan">Data, Cloud & Hardware</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Combining analytical precision, scalable cloud computing, and real-time embedded systems to solve practical real-world problems.
          </p>
        </div>

        {/* Bio Card & Stats Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-8 glass-card rounded-2xl p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 font-mono text-xs font-bold">
                  SKCT CSE (AI & ML)
                </div>
                <div className="text-slate-400 text-xs font-mono flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>SRM National Robotics Finalist</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-100">
                Driven by curiosity, fueled by data, powered by continuous learning.
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {personalData.aboutBio}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                Whether it's optimizing SQL queries to unearth hidden business trends, building automated sensor networks with ESP8266 microchips, or exploring foundational AWS cloud services like S3 and EC2, I thrive at the intersection of intelligence and execution.
              </p>
            </div>

            {/* Quick Core Competencies Chips */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Data Analytics & EDA
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" /> AWS Basic Learner
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> ESP8266 IoT Sensors
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400" /> Python & C++ Logic
              </span>
            </div>
          </div>

          {/* Quick Academic Focus Highlight Box */}
          <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between bg-gradient-to-b from-slate-900/90 to-slate-950/90">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Education Focus</div>
              <h4 className="text-lg font-bold text-slate-100 mb-1">Sri Krishna College of Technology</h4>
              <p className="text-slate-400 text-xs font-mono mb-4">Coimbatore, Tamil Nadu, India</p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs text-slate-400">Degree</div>
                  <div className="text-sm font-semibold text-slate-200">B.E. CSE (AI & ML)</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs text-slate-400">Core Areas</div>
                  <div className="text-xs text-cyan-300 font-mono mt-0.5">Algorithms • Cloud • Data Mining • Embedded IoT</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-xs text-slate-200 mt-0.5">Palani / Coimbatore, Tamil Nadu</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-center">
              <a
                href="#education"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
              >
                View Academic Timeline &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* 4 Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(value.icon)}
                </div>

                <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h4>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PILLAR 0{index + 1}</span>
                <span className="text-cyan-400/80">★ CORE STRENGTH</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
