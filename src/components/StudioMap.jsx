import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

export default function StudioMap() {
  const googleMapsUrl = 'https://maps.google.com/?q=Beach+Road+Cuddalore+Tamil+Nadu';
  const embedMapUrl = 'https://maps.google.com/maps?q=Beach%20Road%2C%20Cuddalore%2C%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed';

  return (
    <div className="w-full my-16 select-none">
      {/* Clean & Neat Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-mono tracking-[0.25em] uppercase mb-3">
          <MapPin size={12} className="text-gold-400" />
          <span>VISIT OUR STUDIO</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
          STUDIO <span className="text-gold-gradient italic font-editorial font-normal">LOCATION</span>
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-light mt-2">
          Experience our fine-art albums and discuss your wedding dates in person at our flagship studio on Beach Road, Cuddalore.
        </p>
      </div>

      {/* Neat & Simple 2-Column Card */}
      <div className="rounded-3xl overflow-hidden glass-panel border border-gold-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Interactive Clean Google Map (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-obsidian-900 overflow-hidden">
            <iframe
              title="Studio Green Photography Cuddalore Location"
              src={embedMapUrl}
              className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0 filter invert-[0.88] hue-rotate-180 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Top Floating Badge */}
            <div className="absolute top-4 left-4 bg-black/90 px-3.5 py-2 rounded-full border border-gold-400/40 text-xs font-mono text-gold-300 backdrop-blur-md shadow-lg flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              <span className="font-bold">STUDIO GREEN • CUDDALORE</span>
            </div>

            {/* Direct Open Button on Map */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-black/90 hover:bg-gold-400 hover:text-black text-gold-300 px-3.5 py-2 rounded-full border border-gold-400/50 text-[11px] font-mono tracking-wider backdrop-blur-md shadow-lg transition flex items-center space-x-1.5"
            >
              <span>OPEN FULL MAP</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Right Column: Clean & Simple Studio Info (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-black">
            <div>
              <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-widest text-gold-400 uppercase mb-2">
                <Sparkles size={11} />
                <span>FLAGSHIP ATELIER</span>
              </div>
              <h4 className="font-serif text-2xl font-bold uppercase text-white tracking-wide">
                STUDIO GREEN PHOTOGRAPHY
              </h4>
              <p className="text-xs text-gray-400 font-light mt-1">
                Fine Art Wedding Photography & Cinematic Films
              </p>

              {/* Clean Details List */}
              <div className="mt-6 space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">Studio Address</span>
                    <span className="text-white font-medium text-xs leading-relaxed block">
                      {STUDIO_INFO.address}
                    </span>
                    <span className="text-[11px] text-champagne-300/70 block mt-0.5">
                      Near Silver Beach Promenade, Cuddalore
                    </span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">Consultation Hours</span>
                    <span className="text-white font-medium text-xs block">
                      Monday – Sunday: 9:00 AM – 9:30 PM
                    </span>
                    <span className="text-[11px] text-champagne-300/70 block mt-0.5">
                      Walk-ins Welcome • Private Consultations Available
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider block">Phone Enquiries</span>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-gold-300 hover:text-white font-serif font-bold text-sm tracking-wider transition"
                    >
                      {STUDIO_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-black border-2 border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white font-serif font-bold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,0,0,0.95)] hover:shadow-[0_0_25px_rgba(220,180,106,0.35)] transition cursor-pointer"
              >
                <Navigation size={14} className="text-gold-400" />
                <span>GET DRIVING DIRECTIONS</span>
                <ExternalLink size={12} />
              </a>

              <a
                href={STUDIO_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-black/60 border border-white/15 hover:border-gold-400/50 text-gray-300 hover:text-gold-300 font-mono text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition"
              >
                <MessageSquare size={13} className="text-emerald-400" />
                <span>WHATSAPP STUDIO (090921 41112)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Simple Coverage Strip */}
        <div className="p-4 bg-obsidian-950 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider text-gold-400 uppercase">
            <span>REGIONAL TRAVEL COVERAGE:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] font-mono">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              Cuddalore (Base)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              Silver Beach
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              Pondicherry (30 mins)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              Chidambaram (45 mins)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
              Across South India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
