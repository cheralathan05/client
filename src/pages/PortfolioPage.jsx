import React, { useState } from 'react';
import { Camera, Sparkles, Filter, Maximize2, MapPin, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../data/photographyData';
import LightboxModal from '../components/LightboxModal';
import { playShutterSound } from '../utils/audio';

export default function PortfolioPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (catId) => {
    playShutterSound();
    setActiveCategory(catId);
  };

  const handleOpenPhoto = (item) => {
    playShutterSound();
    setSelectedPhoto(item);
  };

  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-[800px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & HEADER ── */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">PORTFOLIO ARCHIVE</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Master Visual Archive // High-Resolution Stills
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                THE ATELIER <span className="text-gold-gradient italic font-editorial font-normal">PORTFOLIO</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              Every frame is exposed on high-resolution prime sensors and hand-graded with analog warmth. Click any frame for optical EXIF specifications and lightbox inspection.
            </p>
          </div>
        </div>

        {/* ── CATEGORY FILTER BUTTONS ── */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-serif tracking-[0.16em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gold-400 text-black font-bold shadow-[0_2px_15px_rgba(220,180,106,0.35)]'
                    : 'bg-zinc-950 text-gray-400 border border-white/10 hover:border-gold-400/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── HIGH RESOLUTION GALLERY GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-gold-400/60 shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Technical Optics Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-gold-400/30 text-[9px] font-mono tracking-widest text-gold-300 uppercase">
                  {item.exif?.camera || 'SONY FX3'}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 group-hover:border-gold-400 flex items-center justify-center text-white group-hover:text-gold-300 transition-colors">
                  <Maximize2 size={13} />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    <MapPin size={11} />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white uppercase group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono text-gray-400 pt-1 flex items-center justify-between border-t border-white/10">
                    <span>{item.couple}</span>
                    <span>{item.exif?.shutter} • {item.exif?.aperture}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ATELIER OPTICS & SENSOR SUITE ── */}
        <div className="mb-20 bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/20 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.3em] block mb-2">
              OPTICAL PURITY // ZERO COMPROMISE
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
              THE ATELIER LENS & SENSOR SUITE
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-2 leading-relaxed">
              Why our photographs look dimensional, luminous, and filmic. We deploy prime master glass and full-frame 61-megapixel sensors calibrated for South Indian skin tones and grand mandapams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                lens: "85mm f/1.4 GM II",
                role: "The Royal Portrait Master",
                desc: "Unreal subject isolation, creamy bokeh, and flattering telephoto compression for bride & groom."
              },
              {
                lens: "35mm f/1.4 GM",
                role: "The Unobtrusive Candid Master",
                desc: "Wide enough to embrace the full mandapam architecture while staying intimate with genuine tears."
              },
              {
                lens: "50mm f/1.2 GM",
                role: "Low-Light Mandapam Specialist",
                desc: "Ultra-fast f/1.2 aperture capturing morning dawn muhurthams solely under brass oil lamp glow."
              },
              {
                lens: "Mavic 3 Cine",
                role: "Panoramic Aerial Grandeur",
                desc: "4K Apple ProRes aerial frames capturing the sweeping sands of Silver Beach and ancient temple gopurams."
              }
            ].map((glass, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-2 hover:border-gold-400/40 transition-colors"
              >
                <div className="text-[11px] font-mono text-gold-400 uppercase tracking-widest font-bold">
                  {glass.lens}
                </div>
                <h4 className="font-serif text-base font-bold text-white uppercase">
                  {glass.role}
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {glass.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CALLOUT TO BOOK ── */}
        <div className="bg-zinc-950 p-8 sm:p-12 rounded-3xl border border-gold-400/25 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              BESPOKE COMMISSIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-white">
              WANT THIS CINEMATIC VISION FOR YOUR CELEBRATION?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl">
              From dawn temple muhurthams to high-fashion editorial portraits, our team provides full multi-camera coverage pan-South India.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <button
              onClick={() => {
                playShutterSound();
                onNavigate('packages');
              }}
              className="px-6 py-3.5 rounded-full border border-gold-400/40 hover:border-gold-400 text-gold-300 hover:text-white font-serif text-xs font-bold uppercase tracking-widest transition cursor-pointer"
            >
              VIEW PACKAGES
            </button>
            <button
              onClick={() => {
                playShutterSound();
                onNavigate('date-checker');
              }}
              className="px-6 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(220,180,106,0.35)] transition cursor-pointer"
            >
              RESERVE DATE →
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          item={selectedPhoto}
          items={filteredItems}
          onClose={() => setSelectedPhoto(null)}
          onSelect={(item) => setSelectedPhoto(item)}
        />
      )}
    </div>
  );
}
