import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film, Video, ArrowUpRight, Check, Eye, X, Clock, Award, Compass, RotateCcw } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function FilmsPage({ onNavigate }) {
  const [isPlayingMain, setIsPlayingMain] = useState(false);
  const [activeModalFilm, setActiveModalFilm] = useState(null);
  const mainVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const mainFilmVideo = "https://vjs.zencdn.net/v/oceans.mp4";
  const mainFilmFallback = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

  const verticalReels = [
    {
      id: 'reel-1',
      title: "Silver Beach Sunrise Teaser",
      couple: "Arun & Priya",
      views: "148K",
      audio: "Nadaswaram Lo-Fi Ambient Mix",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 'reel-2',
      title: "Sacred Chettinad Muhurtham Knot",
      couple: "Dr. Kavin & Ananya",
      views: "215K",
      audio: "Sacred Chants & Classical Flute",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 'reel-3',
      title: "Pondicherry French Quarter Romance",
      couple: "Vignesh & Keerthi",
      views: "98K",
      audio: "Acoustic Sunset Guitar",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      poster: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 'reel-4',
      title: "Pichavaram Mangrove Drone Flight",
      couple: "Harish & Pooja",
      views: "180K",
      audio: "Ambient Orchestral Strings",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const fullFilms = [
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
      desc: "Slow-motion 120fps sea foam, warm ocean breeze, and candid embraces on the sands of Cuddalore."
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
      desc: "Vintage French architecture, cycles, bougainvillea blossoms, and romantic street cafes."
    },
    {
      id: 'film-4',
      title: "Pichavaram Mangrove Dawn Odyssey",
      couple: "Harish & Pooja",
      duration: "5:10 Mins",
      resolution: "4K DCI ProRes • 24fps",
      location: "Pichavaram Mangroves & Grand Mandapam",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://vjs.zencdn.net/v/oceans.mp4",
      fallbackUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      desc: "An ethereal wooden boat gliding through misty emerald mangrove canals as morning temple bells resonate."
    }
  ];

  const handleToggleMainPlay = () => {
    playShutterSound();
    setIsPlayingMain(true);
  };

  const handleOpenModal = (film) => {
    playShutterSound();
    setActiveModalFilm(film);
  };

  const handleCloseModal = () => {
    playShutterSound();
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveModalFilm(null);
  };

  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 right-1/3 w-[800px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & HEADER ── */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">CINEMA THEATER</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Sony FX3 4K Full-Frame Cinema Suite
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                CINEMATIC <span className="text-gold-gradient italic font-editorial font-normal">FILMS</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              Real moving pictures captured on Netflix-approved cinema sensors. Tap the screen below to stream our hallmark wedding films with sound.
            </p>
          </div>
        </div>

        {/* ── REAL PLAYABLE MASTER CINEMA THEATER (NATIVE HTML5 VIDEO) ── */}
        <div className="bg-zinc-950 rounded-3xl border border-gold-400/30 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] mb-24 relative">
          <div className="relative aspect-[16/9] bg-black overflow-hidden group">
            {isPlayingMain ? (
              <video
                ref={mainVideoRef}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain bg-black"
              >
                <source src={mainFilmVideo} type="video/mp4" />
                <source src={mainFilmFallback} type="video/mp4" />
                Your browser does not support HTML5 video streaming.
              </video>
            ) : (
              <div
                onClick={handleToggleMainPlay}
                className="relative w-full h-full cursor-pointer group"
              >
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=90"
                  alt="Cinema Feature Still"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-103 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                {/* Top Cinema Metadata HUD */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center space-x-3">
                    <div className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/40 text-[10px] font-mono tracking-widest text-gold-300 uppercase flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE 4K DCI • SONY FX3 PRORES 422 HQ</span>
                    </div>
                    <span className="hidden sm:inline text-[10px] font-mono text-gray-400 uppercase">
                      COLOR: KODAK 2383 PRINT EMULATION
                    </span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] font-mono text-gray-300">
                    CLICK TO STREAM 4K
                  </div>
                </div>

                {/* Big Center Play Controller */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-400 hover:bg-gold-300 text-black flex items-center justify-center shadow-[0_0_50px_rgba(220,180,106,0.6)] group-hover:scale-110 transition-all duration-300">
                    <Play size={34} fill="currentColor" className="ml-1" />
                  </div>
                  <span className="text-xs font-mono tracking-[0.25em] text-gold-300 uppercase bg-black/80 px-4 py-1.5 rounded-full border border-gold-400/30">
                    STREAM 4K CINEMA NOW
                  </span>
                </div>

                {/* Bottom Title Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                  <div>
                    <div className="text-[10px] font-mono text-gold-400 tracking-[0.25em] uppercase">
                      HALLMARK WEDDING DOCUMENTARY
                    </div>
                    <h3 className="font-serif text-2xl sm:text-4xl font-extrabold uppercase text-white mt-0.5">
                      ARUN × PRIYA // COASTAL CUDDALORE
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── COMPLETE CINEMA FEATURE CATALOGUE ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="flex items-center space-x-2 text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Film size={13} />
                <span>COMPLETE CINEMA ARCHIVE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white uppercase">
                FEATURED <span className="text-gold-gradient italic font-editorial font-normal">WEDDING MOVIES</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm">
              Click any film card below to launch full theater playback with sound.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fullFilms.map((film) => (
              <div
                key={film.id}
                onClick={() => handleOpenModal(film)}
                className="group rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-gold-400/60 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(220,180,106,0.15)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                  {/* Big Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-400 text-black flex items-center justify-center shadow-[0_0_30px_rgba(220,180,106,0.5)] group-hover:scale-115 transition-all duration-300">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  {/* Specs */}
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

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.2em] mb-2">
                      {film.couple} • {film.location.split('&')[0]}
                    </div>
                    <h3 className="font-serif text-xl font-extrabold text-white uppercase group-hover:text-gold-300 transition-colors mb-2 leading-snug">
                      {film.title}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                      {film.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-serif font-bold text-gold-300 group-hover:text-gold-200">
                    <span className="tracking-[0.2em] uppercase">WATCH TRAILER MOVIE</span>
                    <div className="w-6 h-6 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <Play size={10} fill="currentColor" className="ml-0.5 text-gold-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── VERTICAL 9:16 INSTAGRAM REELS SUITE ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="flex items-center space-x-2 text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">
                <Sparkles size={13} />
                <span>MOBILE-FIRST CINEMATOGRAPHY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white uppercase">
                INSTAGRAM 9:16 <span className="text-gold-gradient italic font-editorial font-normal">REEL TEASERS</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm">
              Delivered within 24–48 hours of your wedding for instant viral celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticalReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => handleOpenModal({
                  title: reel.title,
                  couple: reel.couple,
                  location: "South India Coastal & Heritage Venues",
                  resolution: "9:16 Vertical 4K Reel",
                  videoUrl: reel.videoUrl,
                  thumbnail: reel.poster
                })}
                className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-gold-400/60 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Views Counter */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-gold-400/30 text-[10px] font-mono text-gold-300 flex items-center space-x-1.5">
                    <Eye size={12} />
                    <span>{reel.views}</span>
                  </div>

                  {/* Play Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-gold-400/60 group-hover:border-gold-400 group-hover:scale-110 flex items-center justify-center text-gold-300 transition-all shadow-lg">
                    <Play size={18} className="ml-0.5 text-gold-400" />
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                      {reel.couple}
                    </div>
                    <h4 className="font-serif text-sm font-bold text-white uppercase group-hover:text-gold-300 transition-colors">
                      {reel.title}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-400 truncate mt-1">
                      🎵 {reel.audio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CINEMA PRODUCTION STANDARDS MATRIX ── */}
        <div className="bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/20 shadow-2xl mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.3em] block mb-2">
              WHY OUR CINEMA IS DIFFERENT
            </span>
            <h3 className="font-serif text-3xl font-extrabold uppercase text-white">
              THE STUDIO GREEN CINEMATIC PROTOCOL
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Video size={18} />
              </div>
              <h4 className="font-serif text-lg font-bold text-white uppercase">SONY FX3 RIGS ONLY</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We do not shoot video on still photo cameras. We deploy dedicated Netflix-certified cinema cameras with 10-bit 4:2:2 internal recording and dual native ISO for flawless low-light temple ceremonies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Film size={18} />
              </div>
              <h4 className="font-serif text-lg font-bold text-white uppercase">ANALOG COLOR SCIENCE</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                No garish fluorescent greens or blown-out highlights. Every second of film is graded using proprietary Kodak print emulations for organic skin tones, rich golds, and deep obsidian blacks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Sparkles size={18} />
              </div>
              <h4 className="font-serif text-lg font-bold text-white uppercase">SAME-DAY DELIVERY</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                While traditional videographers make you wait 6 months, our on-site editors screen your highlight trailer on the reception LED wall and deliver your Instagram 9:16 reel within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* ── CALL TO ACTION ── */}
        <div className="text-center">
          <button
            onClick={() => {
              playShutterSound();
              onNavigate('packages');
            }}
            className="px-10 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(220,180,106,0.35)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            EXPLORE CINEMA INCLUSIONS IN PACKAGES →
          </button>
        </div>

      </div>

      {/* ── PLAYABLE MODAL CINEMA THEATER (NATIVE HTML5 4K VIDEO) ── */}
      {activeModalFilm && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={handleCloseModal}
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
                  <span>PLAYING 4K CINEMA STREAM // {activeModalFilm.resolution}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide">
                  {activeModalFilm.title} ({activeModalFilm.couple})
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleCloseModal}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/20 hover:border-gold-400 text-gray-300 hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close Player"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* REAL PLAYABLE HTML5 NATIVE VIDEO PLAYER */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                playsInline
                poster={activeModalFilm.thumbnail}
                className="w-full h-full object-contain bg-black"
                key={activeModalFilm.id}
              >
                <source src={activeModalFilm.videoUrl} type="video/mp4" />
                {activeModalFilm.fallbackUrl && (
                  <source src={activeModalFilm.fallbackUrl} type="video/mp4" />
                )}
                Your browser does not support HTML5 video streaming.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400 font-light text-center sm:text-left">
                <span className="text-white font-medium">Location:</span> {activeModalFilm.location}
                <div className="text-[10px] font-mono text-gold-400/90 mt-0.5 uppercase">
                  DIRECTED & COLOR GRADED BY STUDIO GREEN PHOTOGRAPHY ATELIER
                </div>
              </div>

              <button
                onClick={() => {
                  handleCloseModal();
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
    </div>
  );
}
