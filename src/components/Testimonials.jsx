import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { REVIEWS } from '../data/photographyData';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleSelectReview = (idx) => {
    playShutterSound();
    setActiveIdx(idx);
  };

  return (
    <section className="py-16 sm:py-20 relative bg-black overflow-hidden border-b border-white/5">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gold-400/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
                09 // LOVE LETTERS
              </span>
              <div className="h-px w-12 bg-gold-400/50" />
              <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
                COUPLE VOICES & REVIEWS
              </span>
            </div>
            <h2
              className="font-serif font-extrabold uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.01em' }}
            >
              LOVE <span className="text-gold-gradient italic font-editorial font-normal">LETTERS</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
            Real couples, unfiltered reverence. Click any review below to bring its story into focus.
          </p>
        </div>

        {/* 3-Column Cinema Quote Wall */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {REVIEWS.map((rev, idx) => {
            const isFeatured = activeIdx === idx;

            return (
              <div
                key={rev.id}
                onClick={() => handleSelectReview(idx)}
                className={`relative rounded-2xl p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden ${
                  isFeatured
                    ? 'bg-zinc-950 border-2 border-gold-400/80 shadow-[0_15px_50px_rgba(220,180,106,0.18)] -translate-y-2 scale-[1.02] z-10'
                    : 'bg-zinc-950/50 border border-white/10 opacity-70 hover:opacity-100 hover:border-gold-400/30'
                }`}
              >
                {/* Giant Typographic Watermark Quote Mark */}
                <div
                  className="font-serif select-none pointer-events-none absolute -top-8 right-4 font-black leading-none text-gold-400/10"
                  style={{ fontSize: '10rem' }}
                >
                  “
                </div>

                <div className="relative z-10">
                  {/* Rating Stars & Index */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                    <div className="flex items-center space-x-1 text-gold-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill="#dcb46a"
                          className="text-gold-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-gold-400/70 uppercase">
                      0{idx + 1} / 0{REVIEWS.length}
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="font-serif text-base sm:text-lg text-gray-200 italic leading-relaxed mb-8 font-light">
                    “{rev.text}”
                  </p>
                </div>

                {/* Couple Signature & Avatar */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex items-center space-x-4">
                  <div className="relative shrink-0">
                    <img
                      src={rev.photo}
                      alt={rev.couple}
                      className={`w-14 h-14 rounded-full object-cover p-0.5 border-2 transition-colors duration-300 ${
                        isFeatured ? 'border-gold-400 shadow-[0_0_15px_rgba(220,180,106,0.4)]' : 'border-white/20'
                      }`}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black border border-gold-400 flex items-center justify-center">
                      <Heart size={10} className="text-gold-400 fill-gold-400" />
                    </div>
                  </div>

                  <div>
                    <div className="font-serif font-bold text-white text-sm tracking-[0.15em] uppercase">
                      {rev.couple}
                    </div>
                    <div className="text-[11px] font-mono text-gold-400/90 mt-0.5">
                      {rev.event}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500">
                      {rev.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
