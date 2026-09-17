import React from 'react';
import { Camera, Sparkles, Heart, Video, Users, Baby, ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      num: "01",
      roman: "I",
      title: "Wedding Photography",
      subtitle: "The Sacred Ritual, Preserved",
      tags: ["Candid", "Traditional Mandapam", "Cinematic Frames"],
      desc: "We embed ourselves invisibly in your ceremony — no posed interruptions, only raw authentic emotion. From the first garland exchange to the tearful father's smile, every sacred breath is captured.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
      icon: Heart,
    },
    {
      num: "02",
      roman: "II",
      title: "Pre & Post Wedding",
      subtitle: "Editorial Couple Portraits",
      tags: ["Silver Beach Sunrise", "Pondicherry Streets", "Mangrove Concept"],
      desc: "Breathtaking South Indian coastal backdrops meet high-fashion editorial direction. Cuddalore's silver sands at dawn, Pondicherry's French Quarter alleys at dusk — your story, spectacularly told.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85",
      icon: Sparkles,
    },
    {
      num: "03",
      roman: "III",
      title: "Cinematic Wedding Films",
      subtitle: "Sony FX3 4K Documentary Features",
      tags: ["Sony FX3 4K", "Anamorphic Look", "Drone Master"],
      desc: "Not highlight reels — full documentary feature films. Anamorphic-inspired colour grading, aerial drone sequences, and same-day Instagram 9:16 reels that look like Netflix originals.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      icon: Video,
    },
    {
      num: "04",
      roman: "IV",
      title: "Maternity & Newborn",
      subtitle: "Tender Innocence, Timeless Grace",
      tags: ["Gentle Studio Poses", "Safe Environment", "Milestone Keepsakes"],
      desc: "Newborns exist in a pocket of time that will never return. Our gentle, safe studio sessions preserve the divine radiance of motherhood and the breathtaking smallness of new life.",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85",
      icon: Baby,
    },
    {
      num: "05",
      roman: "V",
      title: "Editorial & High Fashion",
      subtitle: "Kanchipuram Silk Saree Portfolios",
      tags: ["Kanchipuram Silks", "Antique Jewelry", "Magazine Portfolios"],
      desc: "Directional studio strobes, prime portrait lenses, and a deep knowledge of South Indian textiles combine into fashion lookbooks worthy of Vogue India's pages.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      icon: Camera,
    },
    {
      num: "06",
      roman: "VI",
      title: "Grand Events & Receptions",
      subtitle: "High-Energy Celebration Coverage",
      tags: ["Engagements", "Sangeet Nights", "Corporate Galas"],
      desc: "Fast, dynamic multi-camera coverage of large-scale family milestones. From intimate engagement rings to grand 1,000-guest reception halls — our team captures every electric moment.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85",
      icon: Users,
    },
  ];

  return (
    <section id="services" className="relative bg-black py-16 sm:py-20 border-b border-white/5 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-14">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-[10px] font-mono tracking-[0.35em] text-gold-400 font-semibold uppercase">
                05 // BESPOKE DISCIPLINES
              </span>
              <div className="h-px w-12 bg-gold-400/50" />
              <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase hidden sm:inline">
                ATELIER REPERTOIRE
              </span>
            </div>
            <h2 className="font-serif font-extrabold uppercase text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.01em' }}>
              OUR <span className="text-gold-gradient italic font-editorial font-normal">SERVICES</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm font-light leading-relaxed">
            Six specialized disciplines, each demanding a distinct mastery. Choose your celebration's visual language.
          </p>
        </div>
      </div>

      {/* Alternating Editorial Spreads */}
      <div className="space-y-0">
        {services.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          const IconComponent = srv.icon;
          return (
            <div
              key={srv.num}
              className="group relative border-t border-white/5 hover:border-gold-400/20 transition-colors duration-500 overflow-hidden"
            >
              <div className={`max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>

                {/* Image Panel */}
                <div className={`relative overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Roman numeral watermark on image */}
                    <div className="absolute bottom-4 right-5 font-serif font-extrabold text-white/10 select-none pointer-events-none"
                      style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 1 }}>
                      {srv.roman}
                    </div>
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {srv.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[9px] font-mono tracking-widest text-gold-300 uppercase border border-gold-400/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}>
                  {/* Giant watermark number */}
                  <div className="font-serif font-extrabold text-white/[0.04] select-none pointer-events-none absolute"
                    style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', lineHeight: 1, top: '50%', transform: 'translateY(-50%)', [isEven ? 'left' : 'right']: '-2rem' }}>
                    {srv.num}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
                        <IconComponent size={14} className="text-gold-400" />
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.3em] text-gold-400/70 uppercase">{srv.num} / 06</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white uppercase leading-tight mb-2">
                      {srv.title}
                    </h3>
                    <p className="font-editorial italic text-gold-300/80 text-lg mb-6">{srv.subtitle}</p>

                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 max-w-md">
                      {srv.desc}
                    </p>

                    <button
                      onClick={() => onSelectService && onSelectService(srv)}
                      className="group/btn inline-flex items-center space-x-3 cursor-pointer"
                    >
                      <span className="text-xs font-serif font-bold text-gold-300 tracking-[0.2em] uppercase group-hover/btn:text-white transition-colors">
                        ENQUIRE THIS SERVICE
                      </span>
                      <span className="w-8 h-px bg-gold-400 group-hover/btn:w-12 transition-all duration-300" />
                      <ArrowUpRight size={14} className="text-gold-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

