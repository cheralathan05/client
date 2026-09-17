import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import StudioGreenLogo from './StudioGreenLogo';

export default function ApertureIntro({ onComplete }) {
  const [act, setAct] = useState(1); // 1: The Ritual, 2: The Devotion, 3: The Heirloom
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);

  const chapters = [
    {
      num: "01",
      title: "THE SACRED RITUAL",
      subtitle: "Under temple chants & morning light",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=90"
    },
    {
      num: "02",
      title: "THE SHORELINE VOW",
      subtitle: "Twilight breeze on the Cuddalore coast",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=90"
    },
    {
      num: "03",
      title: "THE ETERNAL HEIRLOOM",
      subtitle: "Kanchipuram silks & solitary bridal grace",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=90"
    }
  ];

  // High-performance golden bokeh photons drifting in darkroom space
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      alpha: Math.random() * 0.45 + 0.1,
      speedY: -(Math.random() * 0.35 + 0.1),
      speedX: (Math.random() - 0.5) * 0.25,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 180, 106, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#dcb46a';
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Keyboard shortcut to enter directly
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        handleTriggerEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExiting]);

  // Smooth luxury sequence progression across ~3.8 seconds
  useEffect(() => {
    const startTime = Date.now();
    const duration = 3800; // 3.8s total luxury sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 66) {
        setAct(3);
      } else if (currentProgress >= 33) {
        setAct(2);
      } else {
        setAct(1);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        handleTriggerEnter();
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleTriggerEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  const activeChapter = chapters[act - 1];

  return (
    <div
      onClick={handleTriggerEnter}
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-black cursor-pointer select-none overflow-hidden transition-all duration-700 ease-out ${
        isExiting ? 'opacity-0 scale-105 filter blur-md pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cinematic Visual with Slow Ken-Burns Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          key={activeChapter.num}
          src={activeChapter.image}
          alt="Atelier Preview"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow opacity-25 filter brightness-75 contrast-125"
        />
        {/* Pure Jet Black Darkroom Scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
        <div className="absolute inset-0 vignette-radial" />
        <div className="absolute inset-0 film-grain opacity-25" />
      </div>

      {/* Floating Golden Photons Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Top Editorial Masthead Bar */}
      <div className="relative z-20 px-6 sm:px-12 pt-8 flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center space-x-3 text-left">
          <StudioGreenLogo size={34} />
          <div className="flex flex-col">
            <span className="font-serif text-xs sm:text-sm font-extrabold tracking-[0.25em] text-gold-gradient uppercase leading-tight">
              STUDIO GREEN
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.28em] text-champagne-300/70 uppercase">
              ATELIER OF SACRED WEDDINGS • CUDDALORE
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-gray-400 uppercase">
          <span>HAUTE COUTURE ARCHIVE</span>
          <span className="text-gold-400">•</span>
          <span>EST. 2016</span>
        </div>

        {/* Skip to Atelier Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleTriggerEnter();
          }}
          className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-black/80 hover:bg-gold-400/10 text-gold-300 text-[10px] sm:text-xs font-mono tracking-wider transition cursor-pointer shadow-lg"
        >
          <span>ENTER DIRECTLY</span>
          <ArrowUpRight size={13} className="text-gold-400" />
        </button>
      </div>

      {/* Centerpiece: Monumental Haute Couture Seal & Reveal */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center my-auto py-8">
        {/* Royal Monogram Medallion */}
        <div className="relative mb-6">
          <StudioGreenLogo size={88} className="shadow-[0_0_50px_rgba(220,180,106,0.35)]" />
        </div>

        {/* Monogram Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-[10px] sm:text-[11px] font-mono tracking-[0.3em] uppercase mb-4 shadow-sm">
          <Sparkles size={11} className="text-gold-400" />
          <span>CHAPTER {activeChapter.num} • {activeChapter.title}</span>
        </div>

        {/* Monumental Atelier Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.18em] uppercase text-white leading-none mb-4">
          STUDIO <span className="text-gold-gradient italic font-editorial font-normal">GREEN</span>
        </h1>

        {/* Poetic Philosophy */}
        <p className="font-editorial italic text-lg sm:text-2xl md:text-3xl text-champagne-200 tracking-wide max-w-2xl mx-auto mb-2">
          "We do not capture poses. We preserve sacred feelings."
        </p>

        <p className="text-[11px] sm:text-xs font-mono tracking-[0.3em] text-champagne-300/70 uppercase max-w-lg mx-auto mb-8">
          {activeChapter.subtitle} • CUDDALORE, SOUTH INDIA
        </p>

        {/* Three Curated Heirloom Previews */}
        <div className="hidden sm:grid grid-cols-3 gap-4 max-w-2xl w-full mb-8">
          {chapters.map((chap, idx) => {
            const isActive = act === idx + 1;
            return (
              <div
                key={chap.num}
                className={`relative rounded-xl overflow-hidden border transition-all duration-500 ${
                  isActive
                    ? 'border-gold-400 shadow-[0_0_25px_rgba(220,180,106,0.35)] scale-105'
                    : 'border-white/10 opacity-50 scale-95'
                }`}
              >
                <div className="aspect-[4/3] relative bg-obsidian-900">
                  <img
                    src={chap.image}
                    alt={chap.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-[8px] font-mono tracking-widest text-gold-300 uppercase block">
                      {chap.num} / 03
                    </span>
                    <span className="text-[9px] font-serif font-bold text-white uppercase truncate block">
                      {chap.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary Haute Couture CTA Button */}
        <div className="inline-flex items-center space-x-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-black border-2 border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white font-serif font-bold text-xs sm:text-sm tracking-[0.22em] uppercase shadow-[0_0_30px_rgba(0,0,0,0.95)] hover:shadow-[0_0_40px_rgba(220,180,106,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
          <span>ENTER THE ATELIER</span>
          <ArrowUpRight size={16} className="text-gold-400" />
        </div>

        <div className="text-[10px] font-mono text-gray-400 tracking-[0.25em] uppercase mt-4">
          TAP ANYWHERE TO ENTER • OR PRESS [ESC]
        </div>
      </div>

      {/* Bottom Timeline Progress Bar with Luxury Segments */}
      <div className="relative z-20 px-6 sm:px-12 pb-8 max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-3">
          {chapters.map((chap, idx) => {
            const chapAct = idx + 1;
            const isCompleted = act > chapAct;
            const isCurrent = act === chapAct;
            return (
              <div key={chap.num} className="flex flex-col space-y-1.5 text-left">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono tracking-wider">
                  <span className={isCurrent ? 'text-gold-300 font-bold' : 'text-gray-400'}>
                    {chap.num} • {chap.title}
                  </span>
                  {isCurrent && (
                    <span className="text-gold-400 font-bold">{progress}%</span>
                  )}
                </div>
                {/* Hairline Progress Bar */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-200 transition-all duration-100 ease-out shadow-[0_0_8px_#dcb46a]"
                    style={{
                      width: isCompleted
                        ? '100%'
                        : isCurrent
                        ? `${((progress % 33.34) / 33.34) * 100}%`
                        : '0%'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
