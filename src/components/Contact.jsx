import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    onShowToast('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSendEmail = (e) => {
    if (e) e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onShowToast('Please fill out Name, Email, and Message.');
      return;
    }

    const subject = encodeURIComponent(formState.subject ? `[Portfolio] ${formState.subject}` : `[Portfolio] Message from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject || 'N/A'}\n\nMessage:\n${formState.message}`
    );

    window.open(`mailto:${personalData.email}?subject=${subject}&body=${body}`, '_blank');
    onShowToast('Opening Email app with pre-filled message!');
    triggerConfetti();
  };

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    if (!formState.name || !formState.message) {
      onShowToast('Please fill out your Name and Message to send via WhatsApp.');
      return;
    }

    const cleanPhone = personalData.phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `*Portfolio Message*\n*Name:* ${formState.name}\n*Email:* ${formState.email || 'N/A'}\n*Subject:* ${formState.subject || 'General Inquiry'}\n\n*Message:*\n${formState.message}`
    );

    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    onShowToast('Opening WhatsApp with pre-filled message!');
    triggerConfetti();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      
      {/* Background Ambient Glows */}
      <div className="glow-orb-cyan top-1/4 -right-20 opacity-30" />
      <div className="glow-orb-emerald bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-multi">Great Together</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have a data analytics project, an AWS basic learning inquiry, an IoT hardware concept, or full-time opportunity — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & One-Click Copy Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-cyan-950 border border-cyan-800/80 text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors break-all"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shrink-0 ml-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & WhatsApp Contact Card */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-emerald-950 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Phone / WhatsApp</div>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all shrink-0 ml-2"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct WhatsApp Chat CTA */}
              <a
                href={`https://wa.me/${personalData.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-amber-950 border border-amber-800/80 text-amber-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location & Campus</div>
                <div className="text-sm font-bold text-slate-100">
                  {personalData.location}
                </div>
                <div className="text-xs text-cyan-400 font-mono mt-0.5">
                  Sri Krishna College of Technology (SKCT)
                </div>
              </div>
            </div>

            {/* Quick Links Banner */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Professional Handles</div>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalData.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <LeetcodeIcon className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Interactive Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-slate-800 relative">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" />
              <span>Send a Direct Message</span>
            </h3>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Data Analytics / IoT Hardware Project"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your idea, project, or role details..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Dual Action Send Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold text-xs shadow-md hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-md hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
