import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ChevronRight, Sun, Moon } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Data Architecture', href: '#architecture' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Glowing Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md group-hover:border-cyan-500/60 transition-all duration-300">
              <span className="font-mono font-extrabold text-lg text-gradient-multi tracking-tighter">
                &lt;PS /&gt;
              </span>
              <div className="absolute inset-0 rounded-xl bg-cyan-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
                PRASATH S
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                AI • CLOUD • DATA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 font-semibold bg-slate-800/90 shadow-sm border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Control Switcher */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full glass-card hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/80 transition-all duration-300 flex items-center justify-center group"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-500 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-emerald-500 to-amber-500 rounded-full animate-pulse-slow opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-slate-100 text-xs font-semibold group-hover:bg-slate-900/90 transition-all">
                <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <Sparkles className="w-3 h-3 text-amber-400 animate-bounce" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-500" />
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2">
          <div className="glass-card rounded-2xl p-4 border border-slate-800 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-2 border-t border-slate-800 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
