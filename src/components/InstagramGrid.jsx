import React from 'react';
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO } from '../data/photographyData';

export default function InstagramGrid() {
  const instaPosts = [
    {
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
      likes: "1.4k",
      comments: "142"
    },
    {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      likes: "2.1k",
      comments: "219"
    },
    {
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      likes: "3.8k",
      comments: "410"
    },
    {
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      likes: "1.8k",
      comments: "188"
    },
    {
      img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
      likes: "4.2k",
      comments: "520"
    },
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      likes: "2.6k",
      comments: "305"
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2.5 mb-2">
              <span className="text-[10px] font-mono text-gold-400 font-semibold uppercase tracking-[0.35em]">
                10 // LIVE SOCIAL DISPATCH
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
                INSTAGRAM REPERTOIRE
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase">
              FOLLOW THE JOURNEY
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              {STUDIO_INFO.instagramHandle} • Cuddalore & South India
            </p>
          </div>

          <a
            href={STUDIO_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playShutterSound}
            className="px-6 py-3 rounded-full bg-black border-2 border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white text-xs font-serif font-bold tracking-widest uppercase transition flex items-center space-x-2 shadow-[0_0_20px_rgba(0,0,0,0.95)] hover:shadow-[0_0_25px_rgba(220,180,106,0.35)] cursor-pointer"
          >
            <InstagramIcon size={15} />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instaPosts.map((p, idx) => (
            <a
              key={idx}
              href={STUDIO_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playShutterSound}
              className="group relative aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/60 transition-all duration-300 shadow-lg"
            >
              <img
                src={p.img}
                alt="Instagram post preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-obsidian-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4 text-xs font-mono text-white">
                <span className="flex items-center space-x-1">
                  <Heart size={13} fill="currentColor" className="text-red-400" />
                  <span>{p.likes}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MessageCircle size={13} />
                  <span>{p.comments}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
