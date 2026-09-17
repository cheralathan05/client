import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Sparkles, Send, Check, Plus, Minus, ArrowUpRight, Clock, Mail } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import StudioGreenLogo from '../components/StudioGreenLogo';
import StudioMap from '../components/StudioMap';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO, FAQS } from '../data/photographyData';

export default function ContactPage({ onNavigate }) {
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
    <div className="pt-24 pb-28 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── BREADCRUMBS & HEADER ── */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.3em] text-gold-400 uppercase mb-4">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">HOME</button>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">CONTACT ATELIER</span>
          </div>

          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  Flagship Gallery & Direct Touchpoints
                </span>
              </div>
              <h1
                className="font-serif font-extrabold uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                THE ATELIER <span className="text-gold-gradient italic font-editorial font-normal">CONTACT</span>
              </h1>
            </div>

            <p className="text-gray-400 text-sm max-w-md font-light leading-relaxed">
              Visit our gallery on Beach Road, Cuddalore, or schedule a priority digital consultation with our master cinematographers.
            </p>
          </div>
        </div>

        {/* ── TOP CONTACT & CONSULTATION MONOLITH ── */}
        <div className="bg-zinc-950 rounded-3xl p-8 sm:p-14 lg:p-16 border border-gold-400/25 mb-24 shadow-[0_25px_70px_rgba(0,0,0,0.95)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Touchpoints & Hours */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-px w-8 bg-gold-400" />
                <span className="text-[11px] font-mono tracking-[0.35em] text-gold-400 uppercase">
                  DIRECT STUDIO HOTLINE
                </span>
              </div>

              {/* Giant Typographic Hotline */}
              <div>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  onClick={playShutterSound}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white hover:text-gold-300 transition-colors inline-flex items-center space-x-3 group"
                >
                  <span>{STUDIO_INFO.phoneFormatted}</span>
                  <ArrowUpRight size={28} className="text-gold-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <p className="text-xs text-gray-400 font-mono mt-1">Available 9:00 AM – 9:00 PM for booking inquiries</p>
              </div>

              {/* Atelier Details Grid */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start space-x-3.5 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Cuddalore Gallery Location</span>
                    <span className="text-xs sm:text-sm font-light text-gray-200">{STUDIO_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Clock size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Visiting Hours (Walk-ins Welcome)</span>
                    <span className="text-xs sm:text-sm font-light text-gray-200">Monday – Sunday: 9:30 AM – 8:30 PM</span>
                  </div>
                </div>

                <a
                  href={STUDIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playShutterSound}
                  className="flex items-center space-x-3.5 text-gray-300 hover:text-white transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shrink-0">
                    <MessageSquare size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Instant 24/7 Response</span>
                    <span className="text-xs sm:text-sm font-medium">WhatsApp: 090921 41112</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">Official Inquiries</span>
                    <span className="text-xs sm:text-sm font-light">{STUDIO_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Consultation Form */}
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

        {/* ── INTERACTIVE ATELIER RADAR MAP ── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-[0.3em] block mb-2">
              GEOGRAPHICAL COVERAGE
            </span>
            <h3 className="font-serif text-3xl font-extrabold uppercase text-white">
              CUDDALORE BASE // SERVICE RADIUS
            </h3>
          </div>
          <StudioMap />
        </div>

        {/* ── FREQUENTLY ASKED QUESTIONS ACCORDION ── */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
              <Sparkles size={13} />
              <span>COMMONLY ASKED</span>
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

      </div>
    </div>
  );
}
