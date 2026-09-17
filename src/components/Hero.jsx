import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Lock, MessageSquare, ChevronDown, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

export default function Hero({ onNavigate, onOpenClientPortal }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const heroSlides = [
    {
      num: "01",
      tag: "THE SACRED MUHURTHAM",
      couple: "Arun & Priya",
      location: "Silver Beach Resort, Cuddalore",
      date: "August 2026",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=90",
      quote: "Under morning temple chants, a tear of devotion captured in natural light.",
    },
    {
      num: "02",
      tag: "COASTAL TWILIGHT ROMANCE",
      couple: "Karthik & Sneha",
      location: "Silver Beach Shoreline, Cuddalore Coast",
      date: "July 2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=90",
      quote: "The quiet whisper of the Bay of Bengal framing their private vow.",
    },
    {
      num: "03",
      tag: "HEIRLOOM KANCHIPURAM SILKS",
      couple: "Kavin & Ananya",
      location: "Heritage Mandapam, Chidambaram",
      date: "January 2026",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=90",
      quote: "Vintage gold temple jewelry and solitary bridal grace before the thali ceremony.",
    }
  ];

  const goToSlide = (idx) => {
    if (idx === activeSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTextVisible(false);
    setTimeout(() => {
      setActiveSlide(idx);
      setIsTransitioning(false);
      setTimeout(() => setTextVisible(true), 80);
    }, 550);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setTextVisible(true), 80);
      }, 550);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black select-none">

      {/* ── FULL BLEED BACKGROUND IMAGE CROSSFADE ── */}
      {heroSlides.map((s, i) => (
        <div
          key={s.num}
          className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === activeSlide ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.tag}
            className="w-full h-full object-cover object-center"
            style={{ transform: 'scale(1.04)', transition: 'transform 8s ease-out' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
        </div>
      ))}

      {/* ── GRAIN TEXTURE ── */}
      <div className="absolute inset-0 z-10 film-grain opacity-20 pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 min-h-screen flex flex-col pt-24">

        {/* TOP EDITORIAL BAR */}
        <div className="px-6 sm:px-12 lg:px-20 flex items-center justify-between py-3">
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.3em] text-gold-400/60 uppercase">
            <span className="w-8 h-px bg-gold-400/40 inline-block" />
            <span>EST. 2016</span>
            <span className="text-gold-400/30 mx-1">•</span>
            <span>CUDDALORE, SOUTH INDIA</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase">
            <span>{slide.num}</span>
            <span className="text-gold-400/30">/</span>
            <span>03</span>
          </div>
        </div>

        {/* CENTERPIECE — pushes to bottom above filmstrip */}
        <div className="flex-1 flex items-end">
          <div className="px-6 sm:px-12 lg:px-20 w-full max-w-7xl mx-auto pb-52 sm:pb-48">

            {/* Story Tag */}
            <div
              className="flex items-center space-x-3 mb-5 transition-all duration-500"
              style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(14px)' }}
            >
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">{slide.tag}</span>
            </div>

            {/* Monumental Headline */}
            <div
              className="transition-all duration-700"
              style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(22px)', transitionDelay: '60ms' }}
            >
              <h1 className="font-serif font-extrabold uppercase text-white leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 9.5rem)', letterSpacing: '-0.01em', lineHeight: 0.92 }}>
                STUDIO
              </h1>
              <div className="font-editorial italic text-gold-gradient font-normal leading-none"
                style={{ fontSize: 'clamp(3.5rem, 11.5vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
                GREEN
              </div>
            </div>

            {/* Quote + Couple */}
            <div
              className="mt-7 transition-all duration-700"
              style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)', transitionDelay: '130ms' }}
            >
              <p className="font-editorial italic text-champagne-200/90 max-w-lg"
                style={{ fontSize: 'clamp(0.95rem, 1.9vw, 1.35rem)', lineHeight: 1.6 }}>
                "{slide.quote}"
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3">
                <span className="font-serif text-sm font-bold text-white uppercase tracking-widest">{slide.couple}</span>
                <span className="text-gold-400/30">—</span>
                <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">{slide.location}</span>
              </div>
            </div>

            {/* Stats + CTAs */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 transition-all duration-700"
              style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(18px)', transitionDelay: '200ms' }}
            >
              {/* Stats */}
              <div className="flex items-center gap-8 pr-8 border-r border-white/10">
                {[
                  { value: "10+", label: "Years of Craft" },
                  { value: "520+", label: "Weddings" },
                  { value: "18", label: "Awards Won" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold text-gold-gradient leading-none">{stat.value}</span>
                    <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="group flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-black border-2 border-gold-400 hover:border-gold-200 text-gold-300 hover:text-white font-serif font-bold text-xs tracking-[0.18em] uppercase shadow-[0_0_30px_rgba(0,0,0,0.9)] hover:shadow-[0_0_30px_rgba(220,180,106,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('date-checker')}
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/15 hover:border-gold-400/60 text-white/80 hover:text-white font-mono text-xs tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer"
                >
                  <Calendar size={13} className="text-gold-400" />
                  <span>CHECK DATE</span>
                </button>

                <a
                  href={STUDIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 hover:border-[#25D366]/80 text-[#25D366] hover:bg-[#25D366]/15 font-mono text-xs tracking-wider uppercase transition-all duration-300"
                >
                  <MessageSquare size={13} />
                  <span className="hidden sm:inline">WHATSAPP</span>
                </a>

                <button
                  onClick={onOpenClientPortal}
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 text-gray-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  <Lock size={12} className="text-gold-400" />
                  <span>CLIENT VAULT</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── FILM STRIP NAVIGATION ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 flex">
          {heroSlides.map((s, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={s.num}
                onClick={() => goToSlide(idx)}
                className="relative group cursor-pointer overflow-hidden transition-all duration-500"
                style={{
                  flex: isActive ? '2 1 0%' : '1 1 0%',
                  height: isActive ? '140px' : '108px',
                }}
              >
                <img src={s.image} alt={s.tag} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 transition-all duration-500 ${isActive ? 'bg-black/25' : 'bg-black/65 group-hover:bg-black/50'}`} />
                <div className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-500 ${isActive ? 'bg-gold-400' : 'bg-transparent group-hover:bg-gold-400/40'}`} />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-left">
                  <div className={`text-[9px] font-mono tracking-[0.28em] uppercase mb-1 transition-colors duration-300 ${isActive ? 'text-gold-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {s.num} — {s.tag}
                  </div>
                  <div className={`font-serif font-bold text-xs sm:text-sm uppercase tracking-wider leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {s.couple}
                  </div>
                  {isActive && (
                    <div className="text-[10px] font-mono text-champagne-300/70 mt-0.5 truncate">
                      {s.location}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── VERTICAL SCROLL INDICATOR ── */}
        <div className="absolute hidden lg:flex flex-col items-center bottom-48 right-8 xl:right-14 z-30">
          <div
            className="text-[9px] font-mono tracking-[0.4em] text-gray-400 uppercase"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            SCROLL DOWN
          </div>
          <div className="w-px h-12 mt-3 relative overflow-hidden bg-white/10 rounded-full">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gold-400 animate-bounce rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
