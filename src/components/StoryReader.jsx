import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Quote, ChevronRight, ChevronLeft, ArrowUpRight, BookOpen } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { FEATURED_STORIES } from '../data/photographyData';

export default function StoryReader({ onNavigate }) {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const story = FEATURED_STORIES[activeStoryIdx] || FEATURED_STORIES[0];

  const handleNextStory = () => {
    playShutterSound();
    setActiveStoryIdx((prev) => (prev + 1) % FEATURED_STORIES.length);
  };

  const handlePrevStory = () => {
    playShutterSound();
    setActiveStoryIdx((prev) => (prev - 1 + FEATURED_STORIES.length) % FEATURED_STORIES.length);
  };

  const handleSelectStory = (idx) => {
    playShutterSound();
    setActiveStoryIdx(idx);
  };

  return (
    <section id="stories" className="pt-10 sm:pt-14 pb-20 sm:pb-24 relative overflow-hidden bg-black border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-400/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
                01 // SACRED WEDDING ESSAYS
              </span>
              <div className="h-px w-12 bg-gold-400/50" />
              <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
                CUDDALORE • PONDICHERRY • CHIDAMBARAM
              </span>
            </div>
            <h2
              className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              FEATURED <span className="text-gold-gradient italic font-editorial font-normal">STORIES</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl font-light leading-relaxed">
              We do not capture isolated poses. We document complete multi-chapter heirlooms that resurrect the sacred fragrance of your vows for decades to come.
            </p>
          </div>

          {/* Architectural Chronicle Controls */}
          <div className="flex items-center space-x-5">
            <div className="hidden sm:flex flex-col items-end space-y-1.5 text-right">
              <div className="text-[10px] font-mono tracking-[0.25em] text-gold-400 uppercase font-semibold">
                CHRONICLE 0{activeStoryIdx + 1} // 0{FEATURED_STORIES.length}
              </div>
              <div className="w-28 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-400 to-amber-300 transition-all duration-500 rounded-full"
                  style={{ width: `${((activeStoryIdx + 1) / FEATURED_STORIES.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Circular Wireframe Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevStory}
                className="w-11 h-11 rounded-full bg-zinc-950 border border-gold-400/30 hover:border-gold-400 hover:bg-gold-400/10 text-gold-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg active:scale-95 group"
                aria-label="Previous Chronicle"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNextStory}
                className="w-11 h-11 rounded-full bg-zinc-950 border border-gold-400/30 hover:border-gold-400 hover:bg-gold-400/10 text-gold-300 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg active:scale-95 group"
                aria-label="Next Chronicle"
              >
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ── VISUAL EDITORIAL CHRONICLE CARDS (REPLACING OLD PILL TABS) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {FEATURED_STORIES.map((st, idx) => {
            const isSelected = activeStoryIdx === idx;
            const romanNumerals = ["I", "II", "III", "IV"];

            return (
              <button
                key={st.id}
                onClick={() => handleSelectStory(idx)}
                className={`group relative p-3 sm:p-3.5 rounded-2xl border text-left transition-all duration-400 cursor-pointer flex items-center space-x-3.5 overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-900 border-2 border-gold-400 shadow-[0_0_30px_rgba(220,180,106,0.25)] -translate-y-1'
                    : 'bg-zinc-950/70 border-white/10 hover:border-gold-400/40 hover:bg-zinc-900/50'
                }`}
              >
                {/* Micro Thumbnail */}
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/15">
                  <img
                    src={st.cover}
                    alt={st.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 transition-opacity ${isSelected ? 'bg-black/10' : 'bg-black/40'}`} />
                </div>

                {/* Text Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                      VOLUME {romanNumerals[idx]}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                    )}
                  </div>

                  <div className={`font-serif text-sm font-bold uppercase truncate transition-colors ${
                    isSelected ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {st.title}
                  </div>

                  <div className="text-[10px] font-mono text-gray-400 truncate">
                    {st.location.split(',')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Story Showcase Spread */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-12 lg:p-14 border border-gold-400/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Cover Image */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/30 text-[10px] font-mono tracking-widest text-gold-300 uppercase">
                  HEIRLOOM VOLUME 0{activeStoryIdx + 1}
                </div>
              </div>
            </div>

            {/* Story Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gold-400/90 mb-3">
                  <span className="flex items-center space-x-1.5">
                    <Calendar size={13} className="text-gold-400" />
                    <span>{story.date}</span>
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin size={13} className="text-gold-400" />
                    <span>{story.location}</span>
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none mb-2">
                  {story.title}
                </h3>
                <p className="font-editorial italic text-gold-200 text-lg mb-6">
                  {story.subtitle}
                </p>

                {/* Editorial Quote */}
                <div className="relative p-5 rounded-2xl bg-zinc-900/90 border-l-2 border-gold-400 mb-6">
                  <Quote className="w-5 h-5 text-gold-400/40 mb-1" />
                  <p className="font-serif text-xs sm:text-sm italic text-gray-200 leading-relaxed font-light">
                    {story.quote}
                  </p>
                </div>
              </div>

              {/* Story Chapters Teaser */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 block">
                  CELEBRATION CHAPTERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {story.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/60 border border-white/5 text-left"
                    >
                      <h4 className="font-serif text-xs font-bold text-white uppercase mb-1">
                        {ch.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed font-light">
                        {ch.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate && onNavigate('stories')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(220,180,106,0.35)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <BookOpen size={14} />
                  <span>READ FULL WEDDING CHRONICLE</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
