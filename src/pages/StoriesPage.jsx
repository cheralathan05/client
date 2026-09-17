import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Quote, ArrowUpRight, BookOpen, ChevronRight, Heart } from 'lucide-react';
import { FEATURED_STORIES, STUDIO_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/audio';

export default function StoriesPage({ onNavigate }) {
  const [selectedStoryId, setSelectedStoryId] = useState(FEATURED_STORIES[0].id);

  const activeStory = FEATURED_STORIES.find((s) => s.id === selectedStoryId) || FEATURED_STORIES[0];

  const handleSelectStory = (id) => {
    playShutterSound();
    setSelectedStoryId(id);
    const elem = document.getElementById('story-detail-anchor');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] bg-gold-400/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & PAGE HEADER ── */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">WEDDING CHRONICLES</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Real Celebrations // Sacred Heritage
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                THE WEDDING <span className="text-gold-gradient italic font-editorial font-normal">CHRONICLES</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              We do not capture static ceremonies; we document generational heirlooms. Step into our complete South Indian coastal wedding stories.
            </p>
          </div>
        </div>

        {/* ── STORIES NAVIGATION SHELF (Cards Grid) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {FEATURED_STORIES.map((st, idx) => {
            const isSelected = st.id === selectedStoryId;

            return (
              <div
                key={st.id}
                onClick={() => handleSelectStory(st.id)}
                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-950 border-2 border-gold-400 shadow-[0_10px_40px_rgba(220,180,106,0.2)] -translate-y-2'
                    : 'bg-zinc-950/60 border border-white/10 hover:border-gold-400/40 hover:-translate-y-1'
                }`}
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={st.cover}
                    alt={st.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-gold-300 border border-gold-400/30">
                    VOLUME 0{idx + 1}
                  </div>
                  {isSelected && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-gold-400 text-black text-[9px] font-mono font-bold tracking-widest uppercase">
                      READING NOW
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white uppercase group-hover:text-gold-300 transition-colors">
                      {st.title}
                    </h3>
                    <p className="font-editorial italic text-xs text-gold-300/80 mt-0.5 line-clamp-1">
                      {st.subtitle}
                    </p>
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400 mt-3">
                      <MapPin size={11} className="text-gold-400 shrink-0" />
                      <span className="truncate">{st.location.split('&')[0]}</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-serif font-bold text-gold-300">
                    <span>EXPLORE CHAPTERS</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── ACTIVE STORY DEEP DIVE ESSAY ── */}
        <div id="story-detail-anchor" className="bg-zinc-950 rounded-3xl border border-gold-400/30 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden">

          {/* Story Cover Hero Banner */}
          <div className="relative aspect-[21/9] min-h-[350px] overflow-hidden">
            <img
              src={activeStory.cover}
              alt={activeStory.title}
              className="w-full h-full object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

            <div className="absolute bottom-8 left-8 sm:left-14 right-8 max-w-3xl space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/80 border border-gold-400/40 text-gold-300 text-[10px] font-mono tracking-widest uppercase">
                <Sparkles size={11} />
                <span>COMPLETE ATELIER PHOTO ESSAY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-none">
                {activeStory.title}
              </h2>
              <p className="font-editorial italic text-gold-200 text-lg sm:text-2xl">
                {activeStory.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 pt-2">
                <span className="flex items-center space-x-1.5 text-gold-300">
                  <Calendar size={13} />
                  <span>{activeStory.date}</span>
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center space-x-1.5">
                  <MapPin size={13} className="text-gold-400" />
                  <span>{activeStory.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Story Body & Chapters */}
          <div className="p-8 sm:p-14 lg:p-16 space-y-16">

            {/* Couple Quote Highlight */}
            <div className="relative max-w-4xl mx-auto text-center py-6 px-4">
              <Quote className="w-12 h-12 text-gold-400/20 mx-auto mb-4" />
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-gray-100 italic leading-relaxed font-light">
                {activeStory.quote}
              </p>
              <div className="text-[11px] font-mono text-gold-400 uppercase tracking-[0.25em] mt-4">
                — {activeStory.title.replace('×', '&')} // SACRED CLIENT TESTIMONY
              </div>
            </div>

            {/* Story Chapters Breakdown */}
            <div className="space-y-16 border-t border-white/10 pt-12">
              {activeStory.chapters.map((chap, idx) => {
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Chapter Image */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <img
                          src={chap.image}
                          alt={chap.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out aspect-[16/10]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 text-[10px] font-mono text-gold-300 tracking-widest uppercase bg-black/80 px-3 py-1 rounded-full border border-gold-400/20">
                          CHAPTER 0{idx + 1} STILL
                        </div>
                      </div>
                    </div>

                    {/* Chapter Narrative */}
                    <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase">
                        ACT // 0{idx + 1} OF CELEBRATION
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white uppercase leading-snug">
                        {chap.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                        {chap.text}
                      </p>
                      <div className="pt-2 text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                        Color profile: Kodak Portra Warmth • Master 4K Resolution
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Enquiry Strip for this Wedding Style */}
            <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-black/60 p-8 rounded-2xl border border-gold-400/20">
              <div>
                <h4 className="font-serif text-xl font-bold text-white uppercase">
                  CAPTIVATED BY THIS WEDDING VISUAL LANGUAGE?
                </h4>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Our master cameras are ready to craft your bespoke wedding chronicle in Cuddalore or destination venues.
                </p>
              </div>

              <button
                onClick={() => {
                  playShutterSound();
                  onNavigate('date-checker');
                }}
                className="shrink-0 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(220,180,106,0.35)] hover:shadow-[0_4px_25px_rgba(220,180,106,0.5)] transition-all duration-300 cursor-pointer flex items-center space-x-2"
              >
                <span>RESERVE YOUR CELEBRATION DATE</span>
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>

        {/* ── SACRED SOUTH INDIAN WEDDING RITUALS GUIDE ── */}
        <div className="mt-24 bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/20 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.3em] block mb-2">
              HERITAGE // SACRED ANATOMY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
              HOW WE DOCUMENT SACRED RITUALS
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-2 leading-relaxed">
              Every step of a Tamil wedding has ancient cosmic resonance. Our documentary crew stays unobtrusive, positioned with prime telephoto lenses to capture emotion without disrupting Vedic blessings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Dawn Mangala Snanam & Haldi",
                desc: "Turmeric pastes, fragrant rosewater, and playful blessings from loving maternal aunts at 5:00 AM."
              },
              {
                num: "02",
                title: "Kasi Yatra & Malai Matral",
                desc: "The groom's theatrical pilgrimage and the spirited multi-tiered floral garland exchange on family shoulders."
              },
              {
                num: "03",
                title: "Oonjal Swing & Women's Songs",
                desc: "The couple seated on the carved wooden swing, serenaded by centuries-old classical Carnatic folk verses."
              },
              {
                num: "04",
                title: "Kanyadanam & Sacred Agni",
                desc: "The emotional giving away of the bride over the sacred sacrificial fire with Vedic mantra incantations."
              },
              {
                num: "05",
                title: "Thali Muhurtham Knot",
                desc: "The pinnacle split-second of silence, the three sacred knots, and the blinding golden shower of yellow akshatai."
              },
              {
                num: "06",
                title: "Saptapadi & Seaside Reception",
                desc: "Seven sacred vows taken hand-in-hand around the fire, culminating in an electric seaside beach banquet."
              }
            ].map((ritual) => (
              <div
                key={ritual.num}
                className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-2 hover:border-gold-400/40 transition-colors"
              >
                <div className="text-xs font-mono text-gold-400 font-bold tracking-widest">
                  PHASE // {ritual.num}
                </div>
                <h4 className="font-serif text-lg font-bold text-white uppercase">
                  {ritual.title}
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {ritual.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
