import React, { useState } from 'react';
import { Camera, Heart, Eye, Sparkles, Filter, Maximize2 } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../data/photographyData';
import LightboxModal from './LightboxModal';

export default function Portfolio({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('sgp_favorites') || '[]');
    } catch {
      return [];
    }
  });

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (catId) => {
    playShutterSound();
    setActiveCategory(catId);
  };

  const handleOpenItem = (item) => {
    playShutterSound();
    setSelectedItem(item);
  };

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    playShutterSound();
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((favId) => favId !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem('sgp_favorites', JSON.stringify(updated));
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative bg-black border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-400/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase mb-3">
            <span className="font-semibold">02 // THE MASTER ARCHIVE</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">CURATED GALLERY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            SELECTED <span className="text-gold-gradient italic font-editorial font-normal">PORTFOLIO</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-light">
            Every frame is captured in genuine temple morning light, candid laughter, and heirloom grandeur. Tap any photograph to view the high-resolution wedding gallery.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? PORTFOLIO_ITEMS.length
              : PORTFOLIO_ITEMS.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                  isActive
                    ? 'bg-black border-2 border-gold-400 text-gold-300 font-bold shadow-[0_0_20px_rgba(220,180,106,0.35)] scale-105'
                    : 'bg-black/70 border border-white/10 text-gray-400 hover:text-white hover:border-gold-400/40'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-gold-400/20 text-gold-300 border border-gold-400/40' : 'bg-white/10 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleOpenItem(item)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/60 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.9)]"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-obsidian-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Subtle Luxury Gold Rim on hover */}
                  <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-gold-400/30 rounded-xl" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-obsidian-950/70 backdrop-blur-md border border-gold-400/30 text-[10px] font-mono tracking-wider text-gold-300 uppercase">
                      {item.category}
                    </span>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(e, item.id)}
                      className={`p-2 rounded-full glass-panel transition ${
                        isFav ? 'text-red-500 bg-red-500/10 border-red-500/40' : 'text-white/70 hover:text-white'
                      }`}
                      aria-label="Save to Favorites"
                    >
                      <Heart size={14} fill={isFav ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Bottom Content Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[11px] font-mono text-gold-400/90 mb-1 flex items-center justify-between">
                      <span>{item.location}</span>
                      {item.exif && (
                        <span className="text-white/60">{item.exif.lens}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white uppercase group-hover:text-gold-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300/80 line-clamp-1 mt-1 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.story}
                    </p>

                    <div className="mt-3 flex items-center space-x-2 text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 size={13} />
                      <span className="tracking-widest uppercase font-mono text-[10px]">INSPECT FRAME →</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Prompt Callout */}
        <div className="mt-16 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400">
            <span>SAVED {favorites.length} FAVORITES IN THIS SESSION</span>
            <span>•</span>
            <span className="text-gold-400">HIGH-RESOLUTION MASTER PRINTS AVAILABLE</span>
          </div>

          <div>
            <button
              onClick={() => onNavigate && onNavigate('portfolio')}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-zinc-950 border border-gold-400/40 hover:border-gold-400 text-gold-300 hover:text-white font-serif text-xs font-bold tracking-[0.25em] uppercase shadow-[0_0_30px_rgba(220,180,106,0.15)] hover:shadow-[0_0_35px_rgba(220,180,106,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Camera size={15} className="text-gold-400" />
              <span>EXPLORE COMPLETE 20+ PORTFOLIO ARCHIVE</span>
              <span className="text-gold-400">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
}
