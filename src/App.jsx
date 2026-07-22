import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import EducationTimeline from './components/EducationTimeline';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between relative overflow-x-hidden font-sans">
      
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="glass-card rounded-2xl px-5 py-3.5 border border-cyan-500/50 shadow-2xl flex items-center gap-3 text-slate-100 text-xs font-semibold">
            <div className="p-1.5 rounded-full bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Layout */}
      <main>
        <Hero onOpenContact={() => {
          const element = document.getElementById('contact');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }} />

        <StatsBar />

        <About />

        <Skills />

        <Projects />

        <ArchitectureVisualizer />

        <EducationTimeline />

        <Contact onShowToast={showToast} />
      </main>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
