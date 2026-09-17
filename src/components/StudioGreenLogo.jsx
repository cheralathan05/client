import React from 'react';

/**
 * StudioGreenLogo - Bespoke Haute Couture Monogram & Atelier Emblem
 * Handcrafted vector insignia combining Swiss watchmaker precision with royal Italian calligraphy.
 */
export default function StudioGreenLogo({ size = 36, className = "" }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_0_10px_rgba(220,180,106,0.35)]"
      >
        <defs>
          {/* Multi-Stop 24k Liquid Gold Foil Gradient */}
          <linearGradient id="sgGoldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff9ee" />
            <stop offset="25%" stopColor="#eed397" />
            <stop offset="50%" stopColor="#dcb46a" />
            <stop offset="75%" stopColor="#b78832" />
            <stop offset="100%" stopColor="#f5e4bd" />
          </linearGradient>

          {/* Deep Darkroom Lens Vignette Gradient */}
          <radialGradient id="sgBadgeBase" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1814" />
            <stop offset="70%" stopColor="#0a0907" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Golden Rim Sheen */}
          <linearGradient id="sgRimGleam" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a67d32" />
            <stop offset="30%" stopColor="#fdf8ed" />
            <stop offset="70%" stopColor="#dcb46a" />
            <stop offset="100%" stopColor="#876223" />
          </linearGradient>
        </defs>

        {/* Outer Darkroom Disc with Deep Obsidian Fill */}
        <circle cx="50" cy="50" r="48" fill="url(#sgBadgeBase)" stroke="url(#sgRimGleam)" strokeWidth="1.5" />

        {/* Precision Optical Barrel Index Ticks (12 Aperture Stops around the ring) */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="50"
            y1="5"
            x2="50"
            y2={deg % 90 === 0 ? "9" : "7"}
            stroke="#dcb46a"
            strokeWidth={deg % 90 === 0 ? "1.2" : "0.75"}
            strokeOpacity={deg % 90 === 0 ? "0.9" : "0.4"}
            transform={`rotate(${deg} 50 50)`}
          />
        ))}

        {/* Concentric Inner Hairline Ring */}
        <circle cx="50" cy="50" r="41" fill="none" stroke="url(#sgGoldFoil)" strokeWidth="0.75" strokeOpacity="0.6" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="38.5" fill="none" stroke="#dcb46a" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Top North Star / Diamond Prism Accent (representing photographic brilliance) */}
        <polygon
          points="50,13 51.5,17 55,18.5 51.5,20 50,24 48.5,20 45,18.5 48.5,17"
          fill="url(#sgGoldFoil)"
          className="filter drop-shadow-[0_0_4px_#dcb46a]"
        />

        {/* Masterpiece Interlocking 'S' and 'G' Calligraphy Monogram */}
        <g id="monogram" transform="translate(0, 2)">
          {/* Letter 'G' - Majestic Outer Arch & Classical Roman Crossbar */}
          <path
            d="M 68 38 
               C 65 31, 58 26, 49 26 
               C 35 26, 25 36, 25 50 
               C 25 64, 35 74, 49 74 
               C 61 74, 69 66, 71 54 
               L 50 54 
               L 50 49 
               L 75.5 49 
               C 75.5 50, 75.5 51, 75.5 53 
               C 74.5 69, 63 78.5, 49 78.5 
               C 32 78.5, 20.5 66, 20.5 50 
               C 20.5 33.5, 32.5 21.5, 49 21.5 
               C 60 21.5, 69 27, 72.5 35 
               Z"
            fill="url(#sgGoldFoil)"
            fillOpacity="0.95"
          />

          {/* Letter 'S' - Regal Ribbon S-Curve weaving through the G */}
          <path
            d="M 59 34 
               C 56 30, 52 28.5, 47 28.5 
               C 40 28.5, 35 32, 35 37 
               C 35 42, 39 44.5, 46 46.5 
               L 49 47.5 
               C 58 50, 64 54, 64 61.5 
               C 64 69, 57 74, 48 74 
               C 41.5 74, 36 71.5, 33 66 
               L 37 63 
               C 39.5 67, 43.5 69.5, 48 69.5 
               C 54 69.5, 59 66.5, 59 61 
               C 59 56, 55 53, 47 50.5 
               L 44 49.5 
               C 36 47, 30.5 43, 30.5 36.5 
               C 30.5 29, 37.5 24, 47 24 
               C 53.5 24, 59 26.5, 62.5 31.5 
               Z"
            fill="url(#sgGoldFoil)"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          />

          {/* Interlocking Golden Knot Highlight at the Center Axis */}
          <circle cx="47" cy="48" r="1.5" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Bottom Micro Coordinate / Heritage Stamp */}
        <circle cx="50" cy="85" r="1.2" fill="url(#sgGoldFoil)" />
        <line x1="42" y1="85" x2="47" y2="85" stroke="#dcb46a" strokeWidth="0.5" strokeOpacity="0.6" />
        <line x1="53" y1="85" x2="58" y2="85" stroke="#dcb46a" strokeWidth="0.5" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}
