import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';
import StudioGreenLogo from './StudioGreenLogo';

export default function Navbar({ activeSection, onNavigate, onReplayIntro, onOpenClientPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'stories', label: 'Stories' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'films', label: 'Films' },
    { id: 'packages', label: 'Packages' },
    { id: 'date-checker', label: 'Check Date' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/97 backdrop-blur-xl border-b border-gold-400/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16 sm:h-18">

          {/* ── BRAND ── */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center space-x-3 group cursor-pointer shrink-0"
          >
            <StudioGreenLogo size={32} />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-sm font-extrabold tracking-[0.28em] text-gold-gradient uppercase">
                STUDIO GREEN
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-champagne-300/60 uppercase mt-0.5">
                CUDDALORE · TAMIL NADU
              </span>
            </div>
          </button>

          {/* ── CENTER NAV ── */}
          <nav className="hidden lg:flex items-center space-x-9 xl:space-x-11">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="relative group cursor-pointer py-1"
                >
                  <span className={`font-mono text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-gold-300 font-bold' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  {/* Hairline underline reveal */}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(220,180,106,0.8)]' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Client Vault */}
            <button
              onClick={onOpenClientPortal}
              className="hidden md:flex items-center space-x-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-gold-400/50 text-gray-400 hover:text-gold-300 text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <Lock size={11} />
              <span>VAULT</span>
            </button>

            {/* Reserve Date — Gold Fill CTA */}
            <button
              onClick={() => handleLinkClick('date-checker')}
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif font-bold text-[11px] tracking-[0.18em] uppercase shadow-[0_4px_20px_rgba(220,180,106,0.35)] hover:shadow-[0_4px_25px_rgba(220,180,106,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>RESERVE DATE</span>
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-gold-300 hover:text-white transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* ── BOTTOM HAIRLINE ── */}
        <div className={`h-px w-full transition-all duration-500 ${
          scrolled ? 'opacity-0' : 'bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-100'
        }`} />
      </header>

      {/* ── MOBILE FULLSCREEN DRAWER ── */}
      <div className={`fixed inset-0 z-40 bg-black transition-all duration-500 ease-in-out lg:hidden ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col h-full pt-24 pb-12 px-8">
          {/* Mobile Nav Links */}
          <nav className="flex-1 flex flex-col justify-center space-y-1">
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="group flex items-center justify-between py-4 border-b border-white/5 text-left cursor-pointer"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-baseline space-x-4">
                  <span className="text-[10px] font-mono text-gold-400/50 tracking-widest">0{idx + 1}</span>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-white group-hover:text-gold-300 transition-colors uppercase tracking-wide">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight size={18} className="text-gold-400/40 group-hover:text-gold-400 transition-colors" />
              </button>
            ))}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="space-y-3 pt-8 border-t border-white/10">
            <a
              href={STUDIO_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-4 rounded-full bg-gold-400 text-black font-serif font-bold text-xs tracking-[0.2em] uppercase shadow-[0_4px_20px_rgba(220,180,106,0.4)]"
            >
              <MessageSquare size={15} />
              <span>WHATSAPP: 090921 41112</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenClientPortal(); }}
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-full border border-gold-400/30 text-gold-300 font-mono text-xs tracking-widest uppercase cursor-pointer"
            >
              <Lock size={13} />
              <span>CLIENT VAULT LOGIN</span>
            </button>
          </div>

          {/* Footer info */}
          <div className="pt-6 text-center">
            <p className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
              Studio Green · Cuddalore · Est. 2016
            </p>
          </div>
        </div>
      </div>
    </>
  );
}



