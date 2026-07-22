import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Terminal,
  Cpu,
  Cloud,
  Database,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic Typewriter Effect
  useEffect(() => {
    const fullText = personalData.typingSubtitles[subtitleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2200; // Pause at end
      const timer = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setSubtitleIndex((prev) => (prev + 1) % personalData.typingSubtitles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, subtitleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="glow-orb-cyan -top-20 -left-20 animate-pulse-slow" />
      <div className="glow-orb-emerald top-1/3 -right-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="glow-orb-amber -bottom-20 left-1/3 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Location & College Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-inner">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
              <span>{personalData.locationBadge}</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            {/* Main Title & Gradient */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient-multi inline-block">
                  Prasath S
                </span>
              </h1>

              {/* Dynamic Typewriter Subtitle */}
              <div className="h-12 flex items-center">
                <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-sky-400">
                  {currentText}
                  <span className="animate-pulse text-amber-400 font-extrabold">|</span>
                </span>
              </div>
            </div>

            {/* Objective Bio Statement */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {personalData.objective}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-medium text-sm hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all duration-300 group"
                  aria-label="LeetCode"
                >
                  <LeetcodeIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>

                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glassmorphic Tech Monitor Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md glass-card rounded-2xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>prasath.config.sys</span>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="py-4 font-mono text-xs space-y-3">
                <div className="text-slate-400">
                  <span className="text-emerald-400">prasath@skct-ai</span>:<span className="text-cyan-400">~</span>$ cat profile.json
                </div>
                
                <div className="bg-slate-950/90 rounded-xl p-4 border border-slate-800/90 text-slate-300 space-y-1.5 shadow-inner">
                  <div><span className="text-cyan-400">"name"</span>: <span className="text-amber-300">"Prasath S"</span>,</div>
                  <div><span className="text-cyan-400">"degree"</span>: <span className="text-amber-300">"B.E. CSE (AI & ML)"</span>,</div>
                  <div><span className="text-cyan-400">"institution"</span>: <span className="text-emerald-300">"SKCT Coimbatore"</span>,</div>
                  <div><span className="text-cyan-400">"focus"</span>: [</div>
                  <div className="pl-4 text-sky-300">"Data Analytics", "AWS (Basic Learner)",</div>
                  <div className="pl-4 text-sky-300">"IoT Automation", "Machine Learning"</div>
                  <div>],</div>
                  <div><span className="text-cyan-400">"leetcode_solved"</span>: <span className="text-amber-400 font-bold">100</span>,</div>
                  <div><span className="text-cyan-400">"status"</span>: <span className="text-emerald-400 font-bold">"Ready to Innovate"</span></div>
                </div>

                {/* Live Status Indicators */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <Cloud className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">AWS (Basic Learner)</div>
                      <div className="text-xs font-semibold text-slate-200">S3 / EC2 / IAM Basics</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">Hardware IoT</div>
                      <div className="text-xs font-semibold text-slate-200">ESP8266 & Sensors</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Systems Operational
                  </span>
                  <span className="font-mono text-cyan-400">v2026.1</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
