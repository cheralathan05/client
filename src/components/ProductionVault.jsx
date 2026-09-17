import React, { useState } from 'react';
import { Film, Camera, ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronRight, Eye, Layers, Sliders, ArrowUpRight } from 'lucide-react';
import { playShutterSound } from '../utils/audio';

export default function ProductionVault() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedGearId, setSelectedGearId] = useState(null);
  const [sensorComparison, setSensorComparison] = useState('fullframe'); // 'standard' vs 'fullframe'

  const gearList = [
    {
      id: 'fx3',
      category: 'cinema',
      categoryName: 'CINEMA BODY',
      code: 'SYS // 01 • PRORES 4K',
      name: 'Sony FX3 Cinema Line Full-Frame Rig',
      tagline: 'The Gold Standard of Hollywood & Wedding Cinematography',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85',
      badge: '4K 120FPS DCI',
      specs: [
        { label: 'Sensor', val: 'Full-Frame 35mm Exmor R CMOS' },
        { label: 'Dynamic Range', val: '15.4+ Stops in S-Log3' },
        { label: 'Slow Motion', val: 'Uncropped 4K 120fps ProRes' },
        { label: 'Low Light', val: 'Dual Base ISO 800 / 12,800' },
      ],
      weddingImpact: 'Captures the sacred thali knotting and tears of joy in silky 120fps slow-motion without grain, even under dim traditional temple mandapams.',
      colorScience: 'Sony S-Cinetone + Custom Kodak 2383 Film Print LUT',
    },
    {
      id: 'a7rv',
      category: 'stills',
      categoryName: 'STILLS MASTER',
      code: 'SYS // 02 • 61.0 MEGAPIXELS',
      name: 'Sony Alpha 7R V Ultra-Resolution Master',
      tagline: 'Uncompromising 61-Megapixel Archival Clarity',
      image: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=800&q=85',
      badge: '61.0 MP BSI',
      specs: [
        { label: 'Resolution', val: '9504 × 6336 Raw Pixels' },
        { label: 'Autofocus', val: 'Dedicated AI Processing Unit' },
        { label: 'Stabilization', val: '8-Stop In-Body Image Stabilizer' },
        { label: 'Color Depth', val: '16-Bit RAW Pixel Processing' },
      ],
      weddingImpact: 'Every single gold zari thread in your Kanchipuram silk saree and intricate mehendi pattern is rendered with museum-grade sharpness for large wall frames.',
      colorScience: 'Bespoke Studio Green Natural Skin Tone Calibration',
    },
    {
      id: '85gm',
      category: 'optics',
      categoryName: 'PORTRAIT OPTIC',
      code: 'SYS // 03 • PRIME BOKEH',
      name: 'Sony G-Master 85mm ƒ/1.4 GM II Optic',
      tagline: 'The Undisputed Sovereign of Royal Bridal Portraits',
      image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=85',
      badge: 'ƒ/1.4 CIRCULAR BOKEH',
      specs: [
        { label: 'Aperture', val: 'ƒ/1.4 with 11 Circular Blades' },
        { label: 'Glass', val: 'XA (Extreme Aspherical) + Super ED' },
        { label: 'Coatings', val: 'Nano AR Coating II Anti-Flare' },
        { label: 'Motors', val: 'Dual XD Linear Autofocus' },
      ],
      weddingImpact: 'Completely dissolves distracting mandapam crowds into a luxurious watercolor blur, placing 100% of the focus on the bride and groom.',
      colorScience: 'Velvety Spherical Aberration Control',
    },
    {
      id: '35gm',
      category: 'optics',
      categoryName: 'CANDID OPTIC',
      code: 'SYS // 04 • SACRED PROXIMITY',
      name: 'Sony G-Master 35mm ƒ/1.4 GM Optic',
      tagline: 'The Photojournalist’s Intimate Storytelling Lens',
      image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=85',
      badge: 'ƒ/1.4 WIDE ANGLE',
      specs: [
        { label: 'Field of View', val: '63° Natural Human Vision' },
        { label: 'Minimum Focus', val: '0.27m Close-Range Fire Macro' },
        { label: 'Weather Seal', val: 'Fluorine Coated Dust & Moisture' },
        { label: 'Speed', val: 'Zero Distortion Optical Formula' },
      ],
      weddingImpact: 'Allows our cinematographers to step directly beside the holy agni fire, capturing fatherly whispers and bride smiles with zero visual distortion.',
      colorScience: 'Ultra-High Micro-Contrast & Saturation',
    },
    {
      id: 'mavic3',
      category: 'aerial',
      categoryName: 'AERIAL CINEMA',
      code: 'SYS // 05 • HASSELBLAD 4/3',
      name: 'DJI Mavic 3 Pro Cine Tri-Camera Rig',
      tagline: 'Monumental Coastal & Mandapam Perspectives from the Sky',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=85',
      badge: 'APPLE PRORES 422',
      specs: [
        { label: 'Camera Sensor', val: 'Hasselblad 4/3 CMOS Sensor' },
        { label: 'Tri-Lenses', val: '24mm Wide / 70mm / 166mm Tele' },
        { label: 'Storage', val: '1TB Built-In Internal SSD' },
        { label: 'Certification', val: 'DGCA Licensed Pilot Operating' },
      ],
      weddingImpact: 'Unfolds the breathtaking majesty of Cuddalore Silver Beach, Pichavaram waterways, and towering Chidambaram temple gopurams framing your entrance.',
      colorScience: 'Hasselblad Natural Colour Solution (HNCS)',
    },
    {
      id: 'profoto',
      category: 'aerial',
      categoryName: 'SCULPTED LIGHT',
      code: 'SYS // 06 • STUDIO STROBE',
      name: 'Profoto B10X High-Speed Sync Lighting Suite',
      tagline: 'Sculpting Natural, Flattering Light in Any Mandapam',
      image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=85',
      badge: 'HSS 1/8000s',
      specs: [
        { label: 'Output Power', val: '500Ws Instant Recycle Speed' },
        { label: 'Modifiers', val: 'Deep Silver & White Octaboxes' },
        { label: 'High Speed Sync', val: 'Full Power sync up to 1/8000s' },
        { label: 'Color Stability', val: '±50K Daylight Color Consistency' },
      ],
      weddingImpact: 'Eliminates harsh yellow ceiling mandapam shadows, illuminating bridal jewelry and makeup with soft, radiant, magazine-cover quality glow.',
      colorScience: '97+ CRI True-Daylight Spectral Index',
    },
  ];

  const filteredGear = activeCategory === 'all'
    ? gearList
    : activeCategory === 'cinema'
    ? gearList.filter(g => g.category === 'cinema' || g.category === 'stills')
    : activeCategory === 'optics'
    ? gearList.filter(g => g.category === 'optics')
    : gearList.filter(g => g.category === 'aerial');

  const handleTabChange = (cat) => {
    playShutterSound();
    setActiveCategory(cat);
  };

  const handleSelectGear = (id) => {
    playShutterSound();
    setSelectedGearId(selectedGearId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-24 relative bg-black text-white overflow-hidden border-t border-b border-gold-400/20">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-gold-400/[0.04] via-gold-400/[0.015] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── SECTION BREADCRUMB & MONUMENTAL HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-bold uppercase">
                08 // TECHNICAL ARSENAL
              </span>
              <div className="h-px w-12 bg-gold-400/60" />
              <span className="text-[9px] font-mono tracking-widest text-emerald-400 font-semibold uppercase flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL SYSTEMS ATELIER-OWNED & CALIBRATED</span>
              </span>
            </div>

            <h2
              className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              THE PRODUCTION <span className="text-gold-gradient italic font-editorial font-normal">VAULT</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light leading-relaxed">
              We never compromise on optics or outsource equipment. Every wedding is documented with dedicated Hollywood-caliber Sony FX3 cinema rigs, G-Master prime glass, and studio lighting.
            </p>
          </div>

          {/* Luxury Atelier Seal & Verification Pill */}
          <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-zinc-950 border border-gold-400/40 shadow-[0_0_25px_rgba(220,180,106,0.15)] flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-gold-400/10 border border-gold-400/40 flex items-center justify-center">
                <ShieldCheck size={16} className="text-gold-400" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-gold-300 font-bold uppercase">
                  ZERO DATA-LOSS PROTOCOL
                </div>
                <div className="text-[9px] font-mono text-gray-400">
                  DUAL CFEXPRESS REAL-TIME RECORDING
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARSENAL CATEGORY TABS ── */}
        <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {[
            { id: 'all', label: '✦ COMPLETE ARSENAL (06)' },
            { id: 'cinema', label: 'CINEMA BODIES & SENSORS' },
            { id: 'optics', label: 'MASTER PRIME OPTICS' },
            { id: 'aerial', label: 'AERIAL DRONES & LIGHTING' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-black font-bold shadow-[0_0_25px_rgba(220,180,106,0.4)] scale-102'
                    : 'bg-zinc-950 border border-white/10 text-gray-400 hover:text-white hover:border-gold-400/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── MASTER GEAR GRID (LUXURY CHASSIS CARDS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredGear.map((item) => {
            const isSelected = selectedGearId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleSelectGear(item.id)}
                className={`group rounded-3xl bg-zinc-950/90 border transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer shadow-2xl relative ${
                  isSelected
                    ? 'border-2 border-gold-400 shadow-[0_20px_60px_rgba(220,180,106,0.25)] -translate-y-2'
                    : 'border-white/10 hover:border-gold-400/60 hover:shadow-[0_15px_45px_rgba(220,180,106,0.12)] hover:-translate-y-1'
                }`}
              >
                {/* Visual Equipment Banner with Vignette */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  {/* Viewfinder corner brackets */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-400/70 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-400/70 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 inset-x-6 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/40 text-[9px] font-mono tracking-widest text-gold-300 uppercase font-bold">
                      {item.code}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-[9px] font-mono tracking-wider text-white uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Category Pill Over Image */}
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-mono tracking-widest text-gold-400 font-semibold uppercase">
                      {item.categoryName}
                    </span>
                  </div>
                </div>

                {/* Card Content & Specifications */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-gold-200 transition-colors leading-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="font-editorial italic text-gold-300/80 text-sm mb-4">
                      {item.tagline}
                    </p>

                    {/* Emotional Impact Translation */}
                    <div className="p-4 rounded-2xl bg-black/60 border border-white/5 mb-5">
                      <div className="flex items-center space-x-1.5 text-[9px] font-mono tracking-widest text-gold-400 uppercase mb-1.5 font-semibold">
                        <Sparkles size={11} />
                        <span>WHY IT MATTERS FOR YOUR WEDDING</span>
                      </div>
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        "{item.weddingImpact}"
                      </p>
                    </div>

                    {/* 4-Cell Telemetry Specs Grid */}
                    <div className="grid grid-cols-2 gap-2.5 pt-2">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5">
                          <div className="text-[8px] font-mono uppercase tracking-widest text-gray-400">
                            {spec.label}
                          </div>
                          <div className="text-[11px] font-mono text-gold-300 font-semibold truncate mt-0.5">
                            {spec.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Color Science & Interactive Pill */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                      <span className="text-gold-400 font-bold">LUT:</span>
                      <span className="truncate max-w-[170px]">{item.colorScience}</span>
                    </div>
                    <span className="text-gold-400 font-mono text-xs group-hover:translate-x-1 transition-transform">
                      {isSelected ? 'COLLAPSE —' : 'SPECS ↗'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── THE 100% PEACE-OF-MIND ON-SET DATA REDUNDANCY BLUEPRINT ── */}
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-8 sm:p-12 rounded-3xl border border-gold-400/30 shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-gold-400 text-xs font-mono tracking-widest uppercase mb-2">
                <ShieldCheck size={16} className="text-gold-400" />
                <span>DATA INTEGRITY ARCHITECTURE // CUDDALORE ATELIER</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold uppercase text-white">
                THE ZERO-DATA-LOSS <span className="text-gold-gradient italic font-editorial font-normal">GUARANTEE</span>
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light mt-2 max-w-2xl">
                A wedding happens once in a lifetime. There are no reshoots. We maintain an iron-clad 3-tier data redundancy architecture from the moment a photo is clicked to final heirloom delivery.
              </p>
            </div>

            <div className="px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold flex items-center space-x-2">
              <CheckCircle2 size={16} />
              <span>100% RECOVERY RECORD ACROSS 520+ WEDDINGS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 font-mono font-bold text-sm">
                01
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">
                Dual In-Camera Mirroring
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Both Sony FX3 and A7R V bodies write every second of 4K video and RAW photo simultaneously to two separate ultra-fast CFexpress Type A memory cards in real time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 font-mono font-bold text-sm">
                02
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">
                On-Site Mandapam Cloning
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Immediately after the morning muhurtham concludes, our data lead offloads memory cards onto twin rugged SSD drives using checksum verification before leaving the wedding venue.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 font-mono font-bold text-sm">
                03
              </div>
              <h4 className="font-serif text-base font-bold text-white uppercase">
                Encrypted Atelier Cloud Vault
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Master files are stored on our private RAID server at Beach Road, Cuddalore, alongside an encrypted cloud vault, giving your family lifetime access to download high-res files anytime.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
