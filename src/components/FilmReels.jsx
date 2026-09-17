import React, { useState, useRef, useEffect } from 'react';
import { Play, Film, Sparkles, Volume2, VolumeX, X, Clock, Award, ArrowUpRight, RotateCcw, Maximize2 } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function FilmReels({ onNavigate }) {
  const [activeFilm, setActiveFilm] = useState(null);
  const videoRef = useRef(null);

  const films = [
    {
      id: 'film-1',
      title: "The Golden Mandapam Wedding Film",
      couple: "Arun & Priya",
      duration: "4:28 Mins",
      resolution: "4K DCI HDR • 24fps",
      location: "Silver Beach & Grand Mandapam, Cuddalore",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      fallbackUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      desc: "Shot on Sony FX3 Cinema Line with anamorphic cine lenses. Capturing the sacred thali ceremony with the sunrise over the Bay of Bengal."
    },
    {
      id: 'film-2',
      title: "Shoreline Sunset Symphony (Pre-Wedding)",
      couple: "Karthik & Sneha",
      duration: "2:45 Mins",
      resolution: "4K DCI HDR • 60fps",
      location: "Silver Beach Shoreline, Cuddalore",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      fallbackUrl: "https://media.w3.org/2010/05/bunny/trailer.mp4",
      desc: "Slow-motion 120fps sea spray, warm twilight ocean breezes, and candid embraces along the sands of Cuddalore."
    },
    {
      id: 'film-3',
      title: "French Colony Twilight Romance",
      couple: "Vignesh & Keerthi",
      duration: "3:12 Mins",
      resolution: "4K DCI HDR • 24fps",
      location: "White Town, Pondicherry & Cuddalore Port",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      fallbackUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      desc: "Vintage French architecture, cycles, bougainvillea blossoms, and romantic street cafes at golden hour."
    }
  ];

  const handleOpenFilm = (film) => {
    playShutterSound();
    setActiveFilm(film);
  };

  const handleCloseFilm = () => {
    playShutterSound();
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveFilm(null);
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseFilm();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="films" className="py-16 sm:py-20 relative bg-black border-t border-b border-white/5 overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-400/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
                03 // 4K CINEMATOGRAPHY & MOTION
              </span>
              <div className="h-px w-12 bg-gold-400/50" />
              <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
                24FPS DCI MASTER • COLOR GRADED
              </span>
            </div>
            <h2
              className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              CINEMATIC <span className="text-gold-gradient italic font-editorial font-normal">FILMS</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl font-light leading-relaxed">
              Moving pictures created with intentional lighting, genuine laughter, and evocative soundtracks. Click any trailer below to stream the 4K cinema master immediately.
            </p>
          </div>

          {/* Luxury Haute Couture Cinema Rig Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-zinc-950 border border-gold-400/30 text-gold-300 shadow-[0_0_20px_rgba(220,180,106,0.15)]">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold">
              SONY FX3 CINE LINE // 4K 120FPS PRORES
            </span>
          </div>
        </div>

        {/* 3 Films Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <div
              key={film.id}
              onClick={() => handleOpenFilm(film)}
              className="group rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-gold-400/60 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_60px_rgba(220,180,106,0.15)] -translate-y-0 hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(220,180,106,0.5)] group-hover:scale-115 group-hover:bg-gold-300 transition-all duration-300">
                    <Play size={24} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Resolution & Duration Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/30 text-gold-300 uppercase">
                    {film.resolution}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white flex items-center space-x-1">
                    <Clock size={11} className="text-gold-400" />
                    <span>{film.duration}</span>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.2em] mb-2">
                    {film.couple} • {film.location.split('&')[0]}
                  </div>
                  <h3 className="font-serif text-xl font-extrabold text-white uppercase group-hover:text-gold-300 transition-colors mb-2.5 leading-snug">
                    {film.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                    {film.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-serif font-bold text-gold-300 group-hover:text-gold-200">
                  <span className="tracking-[0.2em] uppercase">PLAY 4K TRAILER</span>
                  <div className="w-6 h-6 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <Play size={10} fill="currentColor" className="ml-0.5 text-gold-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cinema Theater Portal CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate && onNavigate('films')}
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-zinc-950 border border-gold-400/40 hover:border-gold-400 text-gold-300 hover:text-white font-serif text-xs font-bold tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(220,180,106,0.15)] hover:shadow-[0_0_35px_rgba(220,180,106,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Film size={15} className="text-gold-400" />
            <span>ENTER 4K CINEMA THEATER (4 FULL MOVIES + REELS)</span>
            <span className="text-gold-400">↗</span>
          </button>
        </div>
      </div>

      {/* ── CINEMATIC FILM THEATER MODAL (HTML5 NATIVE 4K STREAMING) ── */}
      {activeFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={handleCloseFilm}
        >
          <div
            className="relative w-full max-w-5xl bg-zinc-950 rounded-3xl overflow-hidden border border-gold-400/40 shadow-[0_0_100px_rgba(220,180,106,0.25)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-black/80">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PLAYING 4K CINEMA STREAM // {activeFilm.resolution}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide">
                  {activeFilm.title} ({activeFilm.couple})
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCloseFilm}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/20 hover:border-gold-400 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close Player"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* BULLETPROOF NATIVE HTML5 VIDEO PLAYER (NEVER BLOCKED) */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                poster={activeFilm.thumbnail}
                className="w-full h-full object-contain bg-black"
                key={activeFilm.id}
              >
                <source src={activeFilm.videoUrl} type="video/mp4" />
                <source src={activeFilm.fallbackUrl} type="video/mp4" />
                Your browser does not support HTML5 video streaming.
              </video>
            </div>

            {/* Modal Bottom Strip & Booking Action */}
            <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400 font-light text-center sm:text-left">
                <span className="text-white font-medium">Location:</span> {activeFilm.location}
                <div className="text-[10px] font-mono text-gold-400/90 mt-0.5 uppercase">
                  DIRECTED & COLOR GRADED BY STUDIO GREEN PHOTOGRAPHY ATELIER
                </div>
              </div>

              <button
                onClick={() => {
                  handleCloseFilm();
                  if (onNavigate) onNavigate('packages');
                }}
                className="px-6 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-widest shadow-[0_2px_15px_rgba(220,180,106,0.35)] transition cursor-pointer"
              >
                BOOK THIS CINEMA STYLE →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
