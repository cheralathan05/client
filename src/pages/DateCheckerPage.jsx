import React from 'react';
import DateChecker from '../components/DateChecker';
import { Calendar, Sparkles, Clock, AlertCircle, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';
import { playShutterSound } from '../utils/audio';

export default function DateCheckerPage({ onNavigate }) {
  const auspiciousDates = [
    { month: "Aavani (Aug - Sep 2026)", dates: ["Aug 24, 2026 (Very High Demand)", "Aug 30, 2026", "Sep 06, 2026", "Sep 13, 2026"] },
    { month: "Thai (Jan - Feb 2027)", dates: ["Jan 21, 2027 (Golden Muhurtham)", "Jan 28, 2027", "Feb 08, 2027", "Feb 15, 2027"] },
    { month: "Panguni (Mar - Apr 2027)", dates: ["Mar 19, 2027", "Mar 26, 2027 (Auspicious Friday)", "Apr 04, 2027", "Apr 11, 2027"] },
  ];

  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & HEADER ── */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">CHECK DATE</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Auspicious Tamil Muhurtham Calendar
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                CHECK <span className="text-gold-gradient italic font-editorial font-normal">AVAILABILITY</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              We accept a strictly capped limit of four weddings per calendar month to guarantee master editorial attention. Select your date below to verify real-time status.
            </p>
          </div>
        </div>

        {/* ── INTERACTIVE DATE CHECKER COMPONENT ── */}
        <div className="mb-24">
          <DateChecker />
        </div>

        {/* ── UPCOMING HIGH-DEMAND MUHURTHAM WINDOWS ── */}
        <div className="bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/20 shadow-2xl mb-20">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.3em] block mb-1">
                CALENDAR INTELLIGENCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase text-white">
                HIGH-DEMAND TAMIL MUHURTHAM PERIODS
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-gold-400">
              <Clock size={14} />
              <span>RECOMMENDED: BOOK 4–8 MONTHS IN ADVANCE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auspiciousDates.map((group, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-4">
                <h4 className="font-serif text-lg font-bold text-gold-300 uppercase border-b border-white/10 pb-2">
                  {group.month}
                </h4>
                <div className="space-y-2.5">
                  {group.dates.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-gray-300 font-light">
                      <span className="text-gold-400 font-serif font-bold">—</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── URGENT OR CUSTOM DATES DIRECT HOTLINE ── */}
        <div className="bg-black/90 p-8 sm:p-12 rounded-3xl border border-gold-400/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-center md:text-left">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              IMMEDIATE CALENDAR INQUIRY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase text-white">
              NEED IMMEDIATE DATE CONFIRMATION?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light max-w-xl">
              For upcoming dates within 60 days, call our principal atelier desk directly to check real-time crew availability across Tamil Nadu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              onClick={playShutterSound}
              className="px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_20px_rgba(220,180,106,0.35)] hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <Phone size={15} />
              <span>CALL: {STUDIO_INFO.phone}</span>
            </a>

            <a
              href={STUDIO_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playShutterSound}
              className="px-8 py-4 rounded-full border border-gold-400/40 hover:border-gold-400 text-gold-300 hover:text-white font-mono text-xs uppercase tracking-widest transition cursor-pointer"
            >
              WHATSAPP DESK →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
