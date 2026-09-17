import React from 'react';
import PackagesCalculator from '../components/PackagesCalculator';
import { ShieldCheck, Sparkles, BookOpen, Clock, Heart, Award, ArrowUpRight } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function PackagesPage({ onNavigate }) {
  return (
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & HEADER ── */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">PACKAGES & TARIFF</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Transparent Investment // Zero Hidden Charges
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                BESPOKE <span className="text-gold-gradient italic font-editorial font-normal">PACKAGES</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              Every wedding is an irreplaceable chapter. Choose a foundational atelier tier below, then configure bespoke add-ons with real-time estimation.
            </p>
          </div>
        </div>

        {/* ── CORE PACKAGES & LIVE CALCULATOR ── */}
        <PackagesCalculator onNavigateToDateChecker={() => onNavigate('date-checker')} />

        {/* ── TRANSPARENT PAYMENT SCHEDULE ROADMAP ── */}
        <div className="mt-24 mb-20 bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-gold-400 uppercase tracking-widest mb-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>FINANCIAL TRANSPARENCY</span>
            </div>
            <h3 className="font-serif text-3xl font-extrabold text-white uppercase">
              MILESTONE PAYMENT ROADMAP
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light mt-1">
              We never demand 100% upfront fees. Your investment is protected across three clear milestone deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-serif font-extrabold text-gold-gradient">30%</div>
              <div className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                MILESTONE 01 // DATE LOCK
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">CALENDAR CONFIRMATION</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Secures your wedding date in our calendar. Once locked, we decline all competing inquiries for our master camera crew on that date.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-serif font-extrabold text-gold-gradient">50%</div>
              <div className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                MILESTONE 02 // WEDDING EVE
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">CEREMONY PRODUCTION</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Remitted upon crew arrival at the venue or on the eve of the first ceremony. Covers on-site multi-camera production and editing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/70 border border-white/10 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-serif font-extrabold text-gold-gradient">20%</div>
              <div className="text-xs font-mono text-gold-400 uppercase tracking-widest">
                MILESTONE 03 // FINAL DELIVERY
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">HEIRLOOM VAULT ACCESS</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Paid after you preview and approve your handcrafted Italian leather albums and uncompressed 4K master film export.
              </p>
            </div>
          </div>
        </div>

        {/* ── HEIRLOOM ALBUM CRAFTSMANSHIP SPOTLIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-950 p-8 sm:p-14 rounded-3xl border border-gold-400/25 shadow-2xl">
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                alt="Heirloom Italian Leather Album"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-gold-400 uppercase tracking-widest">
              <Award size={14} />
              <span>HAND-BOUND ITALIAN LEATHER</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
              ARCHIVAL KEEPSAKE <br />
              <span className="text-gold-gradient italic font-editorial font-normal">
                BUILT TO OUTLAST A CENTURY.
              </span>
            </h3>
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              We do not print synthetic commercial photo books. Every Studio Green album is individually hand-stitched with top-grain Italian leather, archival museum-grade cotton rag paper, and flat-lay gutterless panoramic spreads.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Handcrafted wooden keepsake casing",
                "Fade-proof 200-year archival inks",
                "Laser-engraved couple monogram",
                "2 complimentary parent miniature books"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                  <span className="text-gold-400 font-serif font-bold text-sm">—</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  playShutterSound();
                  onNavigate('date-checker');
                }}
                className="px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-widest transition cursor-pointer"
              >
                CHECK DATE FOR YOUR WEDDING →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
