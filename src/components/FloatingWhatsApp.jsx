import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO } from '../data/photographyData';

export default function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Quick Action Popup when expanded */}
      {expanded && (
        <div className="glass-panel p-4 rounded-2xl border border-gold-400/40 shadow-2xl space-y-2 mb-2 w-64 animate-fadeIn text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-serif font-bold text-white uppercase">STUDIO GREEN DESK</span>
            <button
              onClick={() => setExpanded(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-[11px] text-gray-300 font-light">
            Need urgent muhurtham date check or pricing quote for Cuddalore & South India?
          </p>
          <div className="pt-1 space-y-2">
            <a
              href={STUDIO_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playShutterSound}
              className="w-full py-2 px-3 rounded-xl bg-[#25D366] text-black font-bold flex items-center justify-center space-x-2 text-xs"
            >
              <MessageSquare size={14} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              onClick={playShutterSound}
              className="w-full py-2 px-3 rounded-xl border border-gold-400/40 text-gold-300 hover:bg-gold-400/10 font-bold flex items-center justify-center space-x-2 text-xs"
            >
              <Phone size={14} />
              <span>Call: {STUDIO_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => {
          playShutterSound();
          setExpanded(!expanded);
        }}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-600 via-[#25D366] to-emerald-500 text-obsidian-950 font-bold shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Contact Studio"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-obsidian-950 animate-pulse" />
        {expanded ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </aside>
  );
}
