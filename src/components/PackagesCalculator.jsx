import React, { useState } from 'react';
import { Sparkles, Calculator, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { PACKAGES, STUDIO_INFO } from '../data/photographyData';

export default function PackagesCalculator({ onNavigateToDateChecker }) {
  const [selectedPackage, setSelectedPackage] = useState('signature');
  const [selectedAddons, setSelectedAddons] = useState({
    drone: true,
    prewedding: true,
    leatherAlbum: false,
    sameDayReel: true,
  });

  const addonOptions = [
    { id: 'prewedding', name: 'Editorial Pre-Wedding Shoot (Cuddalore/Pondy)', price: 18000, desc: 'Sunrise/Sunset 3-hour couple session with 2 outfit changes' },
    { id: 'drone', name: 'Licensed 4K Aerial Drone Cinematography', price: 15000, desc: 'DGCA licensed pilot capturing cinematic aerial perspectives' },
    { id: 'sameDayReel', name: 'Same-Day Reception Instagram 9:16 Reel (within 24h)', price: 10000, desc: 'Instant vertical teaser edited overnight for social launch' },
    { id: 'leatherAlbum', name: 'Additional Hand-Stitched Italian Leather Album (40p)', price: 12000, desc: 'Heirloom archival paper with handcrafted leather casing' },
  ];

  const basePrices = {
    essential: 65000,
    signature: 135000,
    luxury: 245000,
  };

  const calculateTotal = () => {
    let base = basePrices[selectedPackage] || 135000;
    let addonSum = 0;
    addonOptions.forEach((a) => {
      if (selectedAddons[a.id]) {
        if (selectedPackage === 'signature' && (a.id === 'drone' || a.id === 'prewedding')) {
          // included complimentary in signature
        } else if (selectedPackage === 'luxury') {
          // all included in luxury
        } else {
          addonSum += a.price;
        }
      }
    });
    return base + addonSum;
  };

  const handleToggleAddon = (id) => {
    playShutterSound();
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectPackage = (pkgId) => {
    playShutterSound();
    setSelectedPackage(pkgId);
  };

  const currentPkg = PACKAGES.find((p) => p.id === selectedPackage) || PACKAGES[1];

  const generateWhatsAppQuote = () => {
    playShutterSound();
    const activeAddonsList = addonOptions
      .filter((a) => selectedAddons[a.id])
      .map((a) => `• ${a.name}`)
      .join('%0A');

    const message = `Hello Studio Green Photography!%0A%0AI would like to request a bespoke quote for my wedding:%0A%0A*Selected Package:* ${currentPkg.name}%0A*Estimated Total:* ₹${calculateTotal().toLocaleString('en-IN')}%0A*Add-ons requested:*%0A${activeAddonsList || 'None'}%0A%0APlease let me know your date availability!`;

    window.open(`https://wa.me/919092141112?text=${message}`, '_blank');
  };

  return (
    <section id="packages" className="py-16 sm:py-20 relative bg-black border-b border-white/5 overflow-hidden">
      {/* Background ambient gold gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
                06 // TARIFF & CURATION
              </span>
              <div className="h-px w-12 bg-gold-400/50" />
              <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
                TRANSPARENT ATELIER PRICING
              </span>
            </div>
            <h2
              className="font-serif font-extrabold uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.01em' }}
            >
              BESPOKE <span className="text-gold-gradient italic font-editorial font-normal">PACKAGES</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
            Curated foundational tiers inspired by boutique atelier menus. Select your tier below, then configure bespoke add-ons in real time.
          </p>
        </div>

        {/* Tiered Luxury Hotel Menu Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          {PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg.id)}
                className={`relative rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-950 border-t-4 border-t-gold-400 border-x border-b border-gold-400/40 shadow-[0_10px_50px_rgba(220,180,106,0.18)] -translate-y-2'
                    : 'bg-zinc-950/60 border-t-2 border-t-zinc-700 border-x border-b border-white/5 hover:border-t-gold-400/70 hover:border-white/15'
                }`}
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <div className="bg-gold-400 text-black px-4 py-1.5 text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-center flex items-center justify-center space-x-1.5">
                    <Sparkles size={11} className="text-black" />
                    <span>MOST CHERISHED ATELIER SELECTION</span>
                  </div>
                )}

                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row: Category Badge & Price */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/5">
                      <span className="text-[10px] font-mono tracking-[0.25em] text-gold-400/80 uppercase">
                        {pkg.badge}
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-gold-300">
                        {pkg.priceNote}
                      </span>
                    </div>

                    {/* Title in Large Italic Serif */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal italic text-white mb-3">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-8">
                      {pkg.desc}
                    </p>

                    {/* Features as Minimal Dash Lines */}
                    <div className="space-y-3.5 pt-6 border-t border-white/10">
                      <span className="text-[10px] font-mono tracking-[0.28em] text-gold-400 uppercase block mb-4">
                        CURATED INCLUSIONS
                      </span>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs text-gray-300 font-light leading-relaxed">
                          <span className="text-gold-400 font-serif font-bold text-sm shrink-0 leading-none select-none">
                            —
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Selection Button */}
                  <div className="mt-10 pt-6 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectPackage(pkg.id);
                      }}
                      className={`w-full py-3.5 rounded-full font-serif text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                        isSelected
                          ? 'bg-gold-400 text-black shadow-[0_4px_25px_rgba(220,180,106,0.4)] hover:bg-gold-300'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:border-gold-400/50 hover:text-white'
                      }`}
                    >
                      <span>{isSelected ? 'SELECTED CURATION ✓' : 'SELECT THIS CURATION'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Add-On Customizer & Quote Box */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-12 border border-gold-400/20 shadow-2xl relative overflow-hidden">
          {/* Subtle gold corner accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/[0.04] rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Add-ons Selector */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-gold-400 font-mono text-xs uppercase tracking-widest mb-2">
                  <Calculator size={14} />
                  <span>STEP 02 — BESPOKE ADD-ON BUILDER</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  TAILOR YOUR CELEBRATION
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light mt-1">
                  Enhance your selected tier with specialized cinema rigs and heirloom keepsakes.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {addonOptions.map((addon) => {
                  const checked = selectedAddons[addon.id];
                  const isIncludedInPkg =
                    (selectedPackage === 'signature' && (addon.id === 'drone' || addon.id === 'prewedding')) ||
                    selectedPackage === 'luxury';

                  return (
                    <div
                      key={addon.id}
                      onClick={() => !isIncludedInPkg && handleToggleAddon(addon.id)}
                      className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                        isIncludedInPkg
                          ? 'bg-gold-400/[0.06] border-gold-400/30 opacity-95 cursor-default'
                          : checked
                          ? 'bg-zinc-900 border-gold-400/70 shadow-[0_0_20px_rgba(220,180,106,0.1)]'
                          : 'bg-zinc-900/40 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {/* Left info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <span className="text-sm font-medium text-white">
                            {addon.name}
                          </span>
                          {isIncludedInPkg && (
                            <span className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 uppercase">
                              ★ COMPLIMENTARY IN TIER
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 font-light mt-0.5">
                          {addon.desc}
                        </p>
                      </div>

                      {/* Right: Toggle Pill + Price */}
                      <div className="flex items-center space-x-4 shrink-0">
                        <span className="font-mono text-xs sm:text-sm font-bold text-gold-400">
                          {isIncludedInPkg ? 'INCLUDED' : `+ ₹${addon.price.toLocaleString('en-IN')}`}
                        </span>

                        {/* Modern Toggle Pill Switch */}
                        <div
                          className={`w-12 h-6 rounded-full transition-colors duration-300 p-0.5 flex items-center ${
                            isIncludedInPkg || checked
                              ? 'bg-gold-400 justify-end'
                              : 'bg-zinc-800 border border-white/10 justify-start'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full shadow-md transition-all duration-300 ${
                              isIncludedInPkg || checked ? 'bg-black' : 'bg-gray-400'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Calculated Summary & Direct WhatsApp proposal */}
            <div className="lg:col-span-5 bg-zinc-900/80 p-8 rounded-2xl border border-gold-400/30 text-center flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-gold-400 uppercase tracking-widest mb-3">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>TRANSPARENT ESTIMATED INVESTMENT</span>
                </div>

                <div className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-gradient my-2">
                  ₹{calculateTotal().toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] font-mono text-gray-400 mb-6 uppercase tracking-wider">
                  Tier: <span className="text-white font-bold">{currentPkg.name}</span>
                </div>

                <p className="text-xs text-gray-400 mb-8 font-light leading-relaxed">
                  Includes master team coverage, high-resolution bespoke colour grading, and lifetime gallery vault access. Custom installment milestones available.
                </p>

                <div className="space-y-3.5">
                  <button
                    onClick={generateWhatsAppQuote}
                    className="w-full py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif text-xs font-bold uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(220,180,106,0.35)] hover:shadow-[0_4px_30px_rgba(220,180,106,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.02] active:scale-98"
                  >
                    <MessageSquare size={16} />
                    <span>RECEIVE THIS QUOTE ON WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => {
                      playShutterSound();
                      if (onNavigateToDateChecker) onNavigateToDateChecker();
                    }}
                    className="w-full py-3.5 rounded-full border border-gold-400/30 hover:border-gold-400 text-gold-300 hover:text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:bg-gold-400/5"
                  >
                    <span>CHECK DATE CALENDAR →</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
                Direct Atelier Desk: <span className="text-white font-bold">{STUDIO_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
