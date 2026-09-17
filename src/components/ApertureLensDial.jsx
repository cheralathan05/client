import React, { useState } from 'react';
import { Camera, Aperture, Eye, Sparkles, Sliders, ArrowUpRight } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function ApertureLensDial({ onNavigate }) {
  const lenses = [
    {
      focal: "24mm",
      aperture: "ƒ/1.4 GM",
      title: "Mandapam Grandeur & Temple Architecture",
      subtitle: "Wide-Angle Environmental Storytelling",
      desc: "Captures the monumental scale of your celebration — towering gopuram temple pillars, thousands of floral strands, and the vast warmth of gathered families.",
      bestFor: "Temple Sanctuaries • Grand Stage Entrances • Sacred Agni Horizons",
      tech: "11-Blade Circular Aperture • 84° Angle of View • Zero Vignette",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85",
      iso: "ISO 400",
      shutter: "1/500s"
    },
    {
      focal: "35mm",
      aperture: "ƒ/1.4 GM",
      title: "The Photojournalist's Heart",
      subtitle: "Candid Emotion & Sacred Ritual Proximity",
      desc: "Our primary storytelling lens for intimate moments. Places the viewer directly beside the sacred fire, catching unposed laughter, fatherly tears, and unspoken glances.",
      bestFor: "Kanyadaan Ritual • Garland Exchange • Spontaneous Smiles",
      tech: "Dual XD Linear Motors • 63° Natural Human Field of View",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
      iso: "ISO 200",
      shutter: "1/800s"
    },
    {
      focal: "50mm",
      aperture: "ƒ/1.2 GM",
      title: "The Sacred Thali & Eye-to-Eye Reverence",
      subtitle: "Ultra-Fast Human Perspective",
      desc: "Pure optical perfection with an ultra-wide ƒ/1.2 aperture that gathers the dawn light inside dimly lit traditional mandapams, turning temple flames into ethereal glowing halos.",
      bestFor: "Thali Knotting Ceremony • Sindoor • Bride's First Gaze",
      tech: "Nano AR Coating II • Creamy Spherical Aberration Control",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
      iso: "ISO 100",
      shutter: "1/2000s"
    },
    {
      focal: "85mm",
      aperture: "ƒ/1.4 GM II",
      title: "Editorial Bridal Portraiture",
      subtitle: "The Dreamy Velvet Bokeh Sovereign",
      desc: "The undisputed master of wedding portraiture. Compresses background temple carvings into a soft, glowing watercolor canvas while keeping jewelry and bridal eyes razor-sharp.",
      bestFor: "Heirloom Bridal Portraits • Silver Beach Twilight Sessions",
      tech: "Xtreme Aspherical Glass • 29° Portrait Compression",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85",
      iso: "ISO 100",
      shutter: "1/1000s"
    },
    {
      focal: "135mm",
      aperture: "ƒ/1.8 GM",
      title: "Invisible Long-Range Cinema",
      subtitle: "Discreet Emotional Surveillance",
      desc: "Allows our cinematographers to stand 40 feet away from the wedding stage, isolating quiet tears and whispered promises without disturbing the sacred serenity of the priests.",
      bestFor: "Private Couple Whispers • Grandparent Blessings from Aisle",
      tech: "18° Telephoto Isolation • Complete Background Liquification",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      iso: "ISO 320",
      shutter: "1/640s"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(1); // 35mm default
  const activeLens = lenses[activeIdx];

  const handleSelect = (idx) => {
    playShutterSound();
    setActiveIdx(idx);
  };

  return (
    <section className="py-16 sm:py-20 relative bg-zinc-950/70 border-t border-b border-gold-400/15 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold-400/[0.035] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                The Optical Perspective
              </span>
            </div>
            <h2
              className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              CHOOSE YOUR <span className="text-gold-gradient italic font-editorial font-normal">PERSPECTIVE</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl font-light leading-relaxed">
              Explore how our master prime lenses render every chapter of your wedding — from epic temple architecture to tear-streaked bridal close-ups.
            </p>
          </div>

          {/* Lens Indicator Badge */}
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black/80 border border-gold-400/30 text-gold-300 text-xs font-mono tracking-widest uppercase">
            <Aperture size={14} className="text-gold-400 animate-spin-slow" />
            <span>SONY G-MASTER PRIME SUITE</span>
          </div>
        </div>

        {/* Tactile Lens Focal Switcher Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {lenses.map((lens, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={lens.focal}
                onClick={() => handleSelect(idx)}
                className={`group relative p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-900 border-2 border-gold-400 shadow-[0_0_25px_rgba(220,180,106,0.25)] -translate-y-1'
                    : 'bg-black/60 border-white/10 hover:border-gold-400/40 hover:bg-zinc-900/60'
                }`}
              >
                {/* Active Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                    isSelected ? 'bg-gold-400' : 'bg-transparent'
                  }`}
                />

                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif text-xl sm:text-2xl font-extrabold tracking-tight ${
                    isSelected ? 'text-gold-gradient' : 'text-white group-hover:text-gold-300'
                  }`}>
                    {lens.focal}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-gold-400/80 px-2 py-0.5 rounded bg-black/60 border border-gold-400/20">
                    {lens.aperture}
                  </span>
                </div>

                <div className="text-[10px] font-mono tracking-wider text-gray-400 uppercase line-clamp-1">
                  {lens.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Lens Simulation Theater Spread */}
        <div className="bg-black/90 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold-400/25 shadow-[0_20px_70px_rgba(0,0,0,0.95)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Viewfinder Preview Frame */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl border border-white/15">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={activeLens.image}
                  alt={activeLens.title}
                  key={activeLens.focal}
                  className="w-full h-full object-cover animate-fadeIn duration-500"
                />

                {/* Camera Viewfinder Overlay HUD */}
                <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between select-none">
                  {/* Top HUD */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-gold-300/90 tracking-widest bg-black/60 px-3 py-1.5 rounded-full border border-gold-400/30 backdrop-blur-sm">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>REC • PRORES RAW</span>
                    </span>
                    <span>{activeLens.shutter}</span>
                    <span>{activeLens.aperture}</span>
                    <span>{activeLens.iso}</span>
                  </div>

                  {/* Center Crosshairs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-12 h-12 border border-gold-400/40 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                    </div>
                  </div>

                  {/* Bottom Viewfinder Corners */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-white/70 tracking-widest">
                    <span>FOCAL: {activeLens.focal} PRIME</span>
                    <span>FOCUS: CONTINUOUS EYE-AF [LOCKED]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lens Narrative & Optics Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-gold-400 uppercase tracking-widest mb-2">
                  <Camera size={13} />
                  <span>OPTICAL SIGNATURE // {activeLens.focal} {activeLens.aperture}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight leading-tight mb-2">
                  {activeLens.title}
                </h3>
                <p className="font-editorial italic text-gold-200 text-base mb-4">
                  {activeLens.subtitle}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  {activeLens.desc}
                </p>
              </div>

              {/* Best Applications */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 block">
                  IDEAL CEREMONIAL MOMENTS
                </span>
                <p className="text-xs text-gray-200 font-medium tracking-wide">
                  {activeLens.bestFor}
                </p>
              </div>

              {/* Technical Optics Details */}
              <div className="text-[11px] font-mono text-gray-400 flex items-center space-x-2">
                <span className="text-gold-400 font-bold">SPECS:</span>
                <span>{activeLens.tech}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate && onNavigate('packages')}
                  className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(220,180,106,0.3)] transition-all cursor-pointer flex items-center space-x-2"
                >
                  <span>REQUEST IN WEDDING PACKAGE</span>
                  <ArrowUpRight size={14} />
                </button>

                <button
                  onClick={() => onNavigate && onNavigate('portfolio')}
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:border-gold-400/50 text-gray-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  VIEW GALLERY FRAMES →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
