import React from 'react';
import { Sparkles, Camera, Award, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';
import StudioGreenLogo from './StudioGreenLogo';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 relative bg-black text-white overflow-hidden border-b border-white/5">
      {/* Golden diagonal light beam accent across the section */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-gold-400/10 via-gold-400/[0.02] to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gold-400/[0.04] rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
            09 // THE ATELIER & HERITAGE
          </span>
          <div className="h-px w-12 bg-gold-400/50" />
          <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
            FLAGSHIP STUDIO • BEACH ROAD, CUDDALORE
          </span>
        </div>

        {/* Asymmetric Overlapping Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Left Column: Bleeding Portrait with RAW Film Edge */}
          <div className="lg:col-span-6 relative z-10">
            <div className="relative group">
              {/* Outer frame watermark */}
              <div className="absolute -top-4 -left-4 font-mono text-[9px] text-gold-400/60 tracking-[0.3em] uppercase">
                EXP // 2026 • KODAK PORTRA TONE
              </div>

              {/* Portrait Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-l-2 border-t-2 border-gold-400/40">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85"
                  alt="Studio Green Atelier Master"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Viewfinder corner brackets */}
                <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-gold-400/70 pointer-events-none" />
                <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-gold-400/70 pointer-events-none" />
                <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-gold-400/70 pointer-events-none" />
                <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-gold-400/70 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center space-x-2.5">
                    <StudioGreenLogo size={28} />
                    <div>
                      <div className="font-serif text-xs font-bold tracking-[0.2em] text-white uppercase">
                        STUDIO GREEN ATELIER
                      </div>
                      <div className="text-[9px] font-mono tracking-widest text-gold-300/80 uppercase">
                        CUDDALORE • EST. 2016
                      </div>
                    </div>
                  </div>
                  <div className="font-mono text-[10px] text-gold-400/80">
                    MASTER LEAD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Luxury Card */}
          <div className="lg:col-span-6 lg:-ml-12 mt-8 lg:mt-0 relative z-20">
            <div className="bg-black/95 backdrop-blur-2xl p-8 sm:p-12 lg:p-14 border border-gold-400/30 shadow-[0_30px_70px_rgba(0,0,0,0.9)] space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-[10px] font-mono tracking-widest uppercase">
                <Sparkles size={11} />
                <span>A DECADE OF VISUAL REVERENCE</span>
              </div>

              <h2
                className="font-serif font-extrabold uppercase text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
              >
                CRAFTING HEIRLOOMS <br />
                <span className="text-gold-gradient italic font-editorial font-normal">
                  FOR GENERATIONS UNBORN.
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Years after the wedding music softens, the jasmine garlands dry, and the banquets clear, only photographs hold the sacred power to transport you back into the trembling pause right before you exchanged vows.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Rooted along the historic shores of Cuddalore and traveling across Tamil Nadu and South India, <strong>Studio Green Photography</strong> creates fine-art wedding stories that balance solemn temple traditions with high-fashion cinema.
              </p>

              {/* Floating Minimalist Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                {STUDIO_INFO.stats.map((st, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Atelier Pledge Pill */}
              <div className="p-4 rounded-2xl bg-zinc-900/70 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                      Cuddalore Flagship Gallery
                    </div>
                    <div className="text-[10px] font-mono text-gray-400">
                      Private album consultations on Beach Road
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-semibold block">
                    OPEN DAILY
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    9:30 AM – 8:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
