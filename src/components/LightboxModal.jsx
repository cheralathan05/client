import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Share2, Download, Camera, Maximize2, Minimize2, Check } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function LightboxModal({ item, items, onClose, onSelect }) {
  const [zoom, setZoom] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const currentIndex = items.findIndex((i) => i.id === item.id);

  useEffect(() => {
    // Check localStorage favorite
    const favs = JSON.parse(localStorage.getItem('sgp_favorites') || '[]');
    setFavorited(favs.includes(item.id));

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  const handleNext = () => {
    playShutterSound();
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    playShutterSound();
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const toggleFavorite = () => {
    playShutterSound();
    const favs = JSON.parse(localStorage.getItem('sgp_favorites') || '[]');
    let updated;
    if (favorited) {
      updated = favs.filter((id) => id !== item.id);
      setFavorited(false);
    } else {
      updated = [...favs, item.id];
      setFavorited(true);
    }
    localStorage.setItem('sgp_favorites', JSON.stringify(updated));
  };

  const handleShare = () => {
    playShutterSound();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    playShutterSound();
    setDownloading(true);
    setTimeout(() => {
      // Trigger download link
      const link = document.createElement('a');
      link.href = item.image;
      link.download = `StudioGreen_${item.title.replace(/\s+/g, '_')}.jpg`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-obsidian-950/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 select-none animate-fadeIn">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
        {/* Left item counter */}
        <div className="flex items-center space-x-3 text-xs font-mono text-gray-400">
          <span className="text-gold-400 font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline">• {item.category.toUpperCase()}</span>
          <span className="hidden md:inline">• {item.location}</span>
        </div>

        {/* Right action icons */}
        <div className="flex items-center space-x-2">
          {/* Zoom Toggle */}
          <button
            onClick={() => setZoom(!zoom)}
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white transition"
            title={zoom ? 'Fit to Screen' : 'Zoom In'}
          >
            {zoom ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          {/* Favorite Toggle */}
          <button
            onClick={toggleFavorite}
            className={`p-2.5 rounded-full glass-panel transition ${
              favorited ? 'text-red-500 bg-red-500/10 border-red-500/30' : 'text-gray-300 hover:text-white'
            }`}
            title="Save to Favorites"
          >
            <Heart size={18} fill={favorited ? 'currentColor' : 'none'} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-gray-300 hover:text-white transition relative"
            title="Copy Link"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
          </button>

          {/* Download Full-Res Demo */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-full glass-panel text-gold-300 hover:text-white hover:bg-gold-400/20 text-xs font-mono transition"
            title="Download Master Proof"
          >
            <Download size={14} />
            <span>{downloading ? 'FETCHING...' : 'RAW PROOF'}</span>
          </button>

          {/* Close Modal */}
          <button
            onClick={() => {
              playShutterSound();
              onClose();
            }}
            className="p-2.5 rounded-full bg-white/10 hover:bg-red-500/30 hover:text-white text-gray-300 transition ml-2"
            title="Close Lightbox (Esc)"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Center Image Canvas with Prev/Next buttons */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        {/* Navigation Arrow - Left */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full glass-panel text-gold-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Main Photo */}
        <div
          className={`relative max-w-full max-h-[72vh] transition-all duration-300 flex items-center justify-center ${
            zoom ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
          onClick={() => setZoom(!zoom)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full glass-panel text-gold-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Metadata & EXIF Bar */}
      <div className="z-20 pt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white uppercase">
              {item.title}
            </h3>
            {item.couple && (
              <span className="text-xs px-2 py-0.5 rounded bg-gold-400/20 text-gold-300 font-mono">
                {item.couple}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1 max-w-2xl font-light">
            {item.story}
          </p>
        </div>

        {/* Camera EXIF Details HUD */}
        {item.exif && (
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-gold-300/80 bg-obsidian-900/80 px-4 py-2 rounded-xl border border-gold-400/20">
            <div className="flex items-center space-x-1 text-gold-400">
              <Camera size={13} />
              <span>{item.exif.camera}</span>
            </div>
            <span>•</span>
            <span>{item.exif.lens}</span>
            <span>•</span>
            <span className="text-white font-semibold">{item.exif.aperture}</span>
            <span>•</span>
            <span>{item.exif.shutter}</span>
            <span>•</span>
            <span className="text-white">{item.exif.iso}</span>
          </div>
        )}
      </div>
    </div>
  );
}
