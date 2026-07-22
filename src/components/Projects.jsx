import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Trophy, 
  BarChart3, 
  ShieldAlert, 
  Zap, 
  Terminal, 
  X, 
  Sparkles, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = ['All', 'AI & Data', 'IoT & Hardware'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-purple-400" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="glow-orb-amber bottom-1/4 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering & <span className="text-gradient-gold">Build Portfolio</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Real-world systems, award-winning robotics automation, cloud data pipelines, and algorithmic achievements.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-3 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeFilter === tab
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'glass-pill text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${
                    project.badgeColor === 'amber'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-800/80'
                      : project.badgeColor === 'emerald'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80'
                      : 'bg-sky-950/80 text-sky-300 border-sky-800/80'
                  }`}>
                    {project.badge}
                  </span>
                  
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Icon */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-700/80 shrink-0 group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div>
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs">
                  {project.metrics?.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-mono">{m.label}</span>
                      <span className="font-semibold text-slate-200">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition-all"
                  >
                    Details
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 text-xs font-semibold transition-all flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all"
                      aria-label="Code Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-2xl w-full glass-card rounded-2xl p-6 sm:p-8 border border-slate-700 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-800">
                {selectedProject.badge}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <div className="text-xs font-mono text-cyan-400">
                Category: {selectedProject.category}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">System Architecture & Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                {selectedProject.longDescription}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Performance Metrics */}
            {selectedProject.metrics && (
              <div>
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                      <div className="text-sm font-bold text-amber-400 mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-400 transition-all"
                >
                  <span>Open Profile / Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-800 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
