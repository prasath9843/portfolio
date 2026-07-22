import React from 'react';
import { X, Download, Printer, ExternalLink, Check, Sparkles, FileText } from 'lucide-react';
import { personalData, keyStats, projects, educationAndRoadmap } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-4xl w-full glass-card rounded-2xl p-6 sm:p-10 border border-slate-700 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-slate-100 text-lg">Curriculum Vitae</span>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              PRASATH S
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 text-slate-200 font-sans text-sm">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              {personalData.name}
            </h1>
            <p className="text-cyan-400 text-xs font-mono font-semibold">
              {personalData.title}
            </p>
            <p className="text-slate-400 text-xs">
              {personalData.location} • Phone: {personalData.phone} • Email: {personalData.email}
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-mono pt-1 text-sky-300">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub: prasath983</a>
              <span>•</span>
              <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={personalData.leetcode} target="_blank" rel="noreferrer" className="hover:underline">LeetCode: prasath_116</a>
            </div>
          </div>

          {/* Objective Statement */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Summary
            </h2>
            <p className="text-slate-300 text-xs leading-relaxed">
              {personalData.objective}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Education
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-slate-100">B.E. Computer Science and Engineering (AI & ML)</h3>
                <p className="text-xs text-slate-400">Sri Krishna College of Technology (SKCT), Coimbatore, India</p>
              </div>
              <span className="text-xs font-mono text-cyan-400">2022 – Present</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">Data Analytics & ML</span>
                <span className="text-slate-300">Python (Pandas, NumPy, Matplotlib, Seaborn), MySQL Query Optimization, Data Cleaning, EDA</span>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-amber-400 block mb-1">AWS Cloud (Basic Learner)</span>
                <span className="text-slate-300">AWS EC2 Basics, AWS S3 Cloud Storage, IAM Access & Policy Fundamentals</span>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-1">Software Engineering</span>
                <span className="text-slate-300">Python, Java Core, C++ Data Structures, HTML5/CSS, Git & GitHub Version Control</span>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                <span className="font-bold text-purple-400 block mb-1">Hardware & IoT Automation</span>
                <span className="text-slate-300">ESP8266 Microcontroller, Gas/Ultrasonic/Temp Sensors, 4-Channel Relays, C++ Embedded</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Key Projects & Engineering Work
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <h3 className="font-bold text-slate-100 text-xs">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                  <p className="text-[11px] font-mono text-cyan-400">Tech: {proj.techStack.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Workshops */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Honors, Awards & Workshops
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li><strong className="text-slate-100">National Finalist</strong> - SRM University Automation & Robotics Challenge (2024-2025)</li>
              <li><strong className="text-slate-100">LeetCode Competitive Portfolio</strong> - Solved 100+ algorithmic problems focusing on arrays and optimization</li>
              <li><strong className="text-slate-100">Selenium Web Automation Workshop</strong> - Sri Eshwar College of Engineering</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-all"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
