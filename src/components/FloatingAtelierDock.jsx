import React, { useState } from 'react';
import { Calendar, Phone, MessageSquare, Volume2, Camera, ChevronDown, ChevronUp, Sparkles, Film } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO } from '../data/photographyData';

export default function FloatingAtelierDock({ onNavigate, activePage }) {
  const [isMinimized, setIsMinimized] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'stories', label: 'STORIES' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'films', label: 'FILMS' },
    { id: 'packages', label: 'PACKAGES' },
    { id: 'date-checker', label: 'DATE CHECKER' },
  ];

  const handleNavClick = (id) => {
    playShutterSound();
    if (onNavigate) onNavigate(id);
  };

  const handleShutterClick = () => {
    playShutterSound();
  };

  if (isMinimized) {
    return (
      <aside aria-label="Floating atelier dock" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-black/95 border-2 border-gold-400 text-gold-300 font-mono text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(220,180,106,0.3)] hover:scale-105 transition-all cursor-pointer backdrop-blur-xl"
          title="Open Quick Atelier Navigation"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-serif font-bold">ATELIER MENU</span>
          <ChevronUp size={14} className="text-gold-400" />
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Floating atelier dock" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-all duration-300 pointer-events-none">
      <div className="bg-black/92 backdrop-blur-2xl border border-gold-400/40 rounded-full px-4 sm:px-6 py-2.5 shadow-[0_15px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(220,180,106,0.15)] flex items-center justify-between pointer-events-auto gap-2 sm:gap-4 select-none">
        {/* Left: Muhurtham Status Pill */}
        <div className="hidden lg:flex items-center space-x-2.5 pl-1 shrink-0">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-gold-300 uppercase font-semibold">
            2026/27 MUHURTHAM OPEN
          </span>
        </div>

        {/* Center: Fast Navigation Items */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto scrollbar-none py-0.5">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gold-400 text-black font-bold shadow-[0_0_15px_rgba(220,180,106,0.5)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right: Sound, Direct Call & Minimize */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Shutter Click Button */}
          <button
            onClick={handleShutterClick}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 hover:border-gold-400 text-gold-300 hover:text-white text-[10px] font-mono tracking-wider uppercase transition cursor-pointer"
            title="Play Shutter Sound"
          >
            <Camera size={12} className="text-gold-400" />
            <span className="hidden md:inline">SHUTTER</span>
          </button>

          {/* Quick Call */}
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 hover:bg-gold-400/20 text-[10px] font-mono tracking-wider transition"
            title="Call Atelier Desk"
          >
            <Phone size={11} className="text-gold-400" />
            <span className="hidden sm:inline">090921 41112</span>
          </a>

          {/* WhatsApp */}
          <a
            href={STUDIO_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/30 flex items-center justify-center transition"
            title="Chat on WhatsApp"
          >
            <MessageSquare size={12} />
          </a>

          {/* Minimize toggle */}
          <button
            onClick={() => setIsMinimized(true)}
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            title="Minimize Dock"
          >
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
