import React from 'react';
import { Sparkles, Diamond } from 'lucide-react';

export default function LuxuryMarquee() {
  const marqueeItems = [
    { text: "STUDIO GREEN PHOTOGRAPHY", highlight: true },
    { text: "CUDDALORE • SOUTH INDIA", highlight: false },
    { text: "520+ SACRED WEDDINGS CAPTURED", highlight: false },
    { text: "SONY FX3 4K CINEMATOGRAPHY", highlight: false },
    { text: "18 INTERNATIONAL MASTER AWARDS", highlight: true },
    { text: "HAND-STITCHED ITALIAN LEATHER ALBUMS", highlight: false },
    { text: "SILVER BEACH SUNSET REPERTOIRE", highlight: false },
    { text: "DESTINATION WEDDINGS PAN-INDIA", highlight: true },
    { text: "ATELIER DESK: 090921 41112", highlight: false },
  ];

  return (
    <section className="relative py-4 sm:py-5 bg-black border-y border-gold-400/30 overflow-hidden select-none">
      {/* Soft ambient golden back-glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/[0.02] via-gold-400/[0.06] to-gold-400/[0.02] pointer-events-none" />

      {/* Decorative top & bottom hairline runners */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      {/* Left & Right Edge Vignette Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Infinite Smooth Scrolling Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center py-1">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 sm:space-x-8 mx-4 sm:mx-6 shrink-0">
            <span
              className={`font-serif text-xs sm:text-sm font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase transition-colors whitespace-nowrap ${
                item.highlight
                  ? 'text-gold-gradient drop-shadow-[0_0_12px_rgba(220,180,106,0.35)]'
                  : 'text-gray-300'
              }`}
            >
              {item.text}
            </span>
            <span className="text-gold-400/60 font-mono text-[10px] select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
