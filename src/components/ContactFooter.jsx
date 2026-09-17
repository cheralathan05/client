import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Send, Check, Plus, Minus, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import StudioGreenLogo from './StudioGreenLogo';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO, FAQS } from '../data/photographyData';
import StudioMap from './StudioMap';

export default function ContactFooter({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const toggleFaq = (idx) => {
    playShutterSound();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    playShutterSound();
    setMessageSent(true);

    const text = `Hi Studio Green Photography!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ADate: ${form.date || 'TBD'}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919092141112?text=${text}`, '_blank');
  };

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10 pt-24 pb-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Top Booking CTA Section: Pure Black Monolith Panel */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-14 lg:p-16 border border-gold-400/25 mb-24 shadow-[0_25px_70px_rgba(0,0,0,0.95)] relative overflow-hidden">
          {/* Subtle gold line across the top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Direct Atelier Inquiries
                </span>
              </div>

              <h2
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                LET'S CREATE <br />
                <span className="text-gold-gradient italic font-editorial font-normal">
                  SOMETHING TIMELESS.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                Whether you are celebrating on the historic sands of Silver Beach Cuddalore, the grand temple mandapams of Chidambaram, or destination sanctuaries across South India, our cameras preserve your legacy with reverent care.
              </p>

              {/* Giant Typographic Hotline Callout */}
              <div className="pt-2">
                <div className="text-[10px] font-mono tracking-[0.25em] text-gold-400 uppercase mb-1">
                  ATELIER DESK // CALL DIRECTLY
                </div>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  onClick={playShutterSound}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white hover:text-gold-300 transition-colors inline-flex items-center space-x-3 group"
                >
                  <span>{STUDIO_INFO.phoneFormatted}</span>
                  <ArrowUpRight size={28} className="text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Direct Touchpoint Rows */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <a
                  href={STUDIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playShutterSound}
                  className="flex items-center space-x-3.5 text-gray-300 hover:text-white transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 text-emerald-400 transition-colors">
                    <MessageSquare size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Instant 24/7 Response</span>
                    <span className="text-xs sm:text-sm font-medium tracking-wide">Chat on WhatsApp (+91 90921 41112)</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Flagship Atelier</span>
                    <span className="text-xs sm:text-sm font-light text-gray-300">{STUDIO_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick Consultation Form */}
            <div className="lg:col-span-6 bg-black p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-widest">
                  INITIATE ATELIER CONSULTATION
                </h3>
                <span className="text-[10px] font-mono text-gold-400">CONFIDENTIAL</span>
              </div>

              {messageSent ? (
                <div className="p-8 rounded-xl bg-gold-400/10 border border-gold-400/30 text-center space-y-3">
                  <Check size={36} className="text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg text-white font-bold uppercase">Enquiry Initialized</h4>
                  <p className="text-xs text-gray-300 font-light">
                    WhatsApp conversation with our master atelier has been launched. We look forward to preserving your celebration!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-5">
                  <div>
                    <label className="text-[11px] font-mono tracking-wider text-gray-400 block uppercase mb-1.5">
                      Your Name & Partner's Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arun & Priya"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono tracking-wider text-gray-400 block uppercase mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="090921 41112"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono tracking-wider text-gray-400 block uppercase mb-1.5">
                        Estimated Wedding Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono tracking-wider text-gray-400 block uppercase mb-1.5">
                      Event Venue & Vision
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your celebration (venue location, expected guests, special rituals)..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-serif font-bold text-xs uppercase tracking-[0.2em] shadow-[0_4px_25px_rgba(220,180,106,0.35)] hover:shadow-[0_4px_30px_rgba(220,180,106,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <Send size={14} />
                    <span>TRANSMIT CONSULTATION REQUEST</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Atelier Coverage & Geo-Location Map */}
        <StudioMap />

        {/* Frequently Asked Questions: Editorial Accordion with + / — */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
              <Sparkles size={13} />
              <span>CLARITY & PROTOCOLS</span>
            </div>
            <h3
              className="font-serif font-extrabold uppercase text-white tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              FREQUENTLY ASKED <span className="text-gold-gradient italic font-editorial font-normal">QUESTIONS</span>
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-zinc-950 border-gold-400/40 shadow-lg' : 'bg-zinc-950/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between text-white hover:text-gold-300 transition cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-medium pr-6 leading-snug">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Luxury Monolith Footer Bar */}
        <div className="relative pt-12 border-t border-white/10">
          {/* Subtle background giant watermark */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 font-serif font-extrabold text-white/[0.02] uppercase tracking-widest select-none pointer-events-none whitespace-nowrap"
            style={{ fontSize: 'clamp(4rem, 12vw, 12rem)', lineHeight: 1 }}
          >
            STUDIO GREEN
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Brand Monogram & Name */}
            <div className="flex items-center space-x-3.5">
              <StudioGreenLogo size={36} />
              <div>
                <div className="font-serif text-sm font-extrabold text-gold-gradient uppercase tracking-[0.25em]">
                  {STUDIO_INFO.name}
                </div>
                <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mt-0.5">
                  CUDDALORE ATELIER • EST. 2016
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400">
              {['stories', 'portfolio', 'films', 'services', 'packages', 'date-checker'].map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    playShutterSound();
                    if (onNavigate) onNavigate(id);
                  }}
                  className="hover:text-gold-300 transition cursor-pointer"
                >
                  {id.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Social Icons & Direct Contact */}
            <div className="flex flex-col items-center md:items-end space-y-1.5 text-xs text-gray-400 font-mono">
              <div className="flex items-center space-x-4 text-gold-300 mb-1">
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-400 flex items-center justify-center text-gold-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={15} />
                </a>
                <a
                  href={STUDIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-400 flex items-center justify-center text-gold-400 hover:text-white transition"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={15} />
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-gold-400 flex items-center justify-center text-gold-400 hover:text-white transition"
                  aria-label="Phone"
                >
                  <Phone size={15} />
                </a>
              </div>
              <span className="text-[11px] text-gray-400">
                © 2026 Studio Green Photography. Cuddalore, TN.
              </span>
              <span className="text-[10px] text-gold-400/80 font-bold">
                Hotline: {STUDIO_INFO.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
