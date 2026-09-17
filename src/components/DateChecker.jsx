import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, AlertCircle, Clock, MapPin, Sparkles, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playShutterSound } from '../utils/audio';
import { STUDIO_INFO } from '../data/photographyData';

export default function DateChecker() {
  const [selectedDate, setSelectedDate] = useState('2026-11-20');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding & Reception',
    location: 'Cuddalore / Pondicherry',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Simulated auspicious / booked dates dictionary
  const dateStatuses = {
    '2026-11-12': { status: 'booked', label: 'Fully Booked' },
    '2026-11-15': { status: 'booked', label: 'Fully Booked' },
    '2026-11-20': { status: 'available', label: 'Slots Open' },
    '2026-11-24': { status: 'limited', label: '1 Crew Left' },
    '2026-11-28': { status: 'available', label: 'Slots Open' },
    '2026-12-04': { status: 'available', label: 'Slots Open' },
    '2026-12-10': { status: 'limited', label: '1 Crew Left' },
    '2026-12-14': { status: 'booked', label: 'Fully Booked' },
  };

  const handleDateClick = (dateStr) => {
    playShutterSound();
    setSelectedDate(dateStr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playShutterSound();

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dfb76c', '#faf3e1', '#b8832a', '#387e5c']
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  const selectedDateStatus = dateStatuses[selectedDate] || { status: 'available', label: 'Prime Slots Open' };

  return (
    <section id="date-checker" className="py-16 sm:py-20 relative bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.35em] text-gold-400 uppercase mb-3">
            <span className="font-semibold">07 // MUHURTHAM CALENDAR</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">AUSPICIOUS DATES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            IS YOUR DATE <span className="text-gold-gradient italic font-editorial font-normal">AVAILABLE?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 font-light">
            We accept only 4 exclusive weddings each month to give each couple our undivided creative focus. Check your auspicious date below.
          </p>
        </div>

        {/* Date Checker Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-gold-400/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Quick Calendar Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                  1. SELECT TARGET WEDDING DATE
                </span>
                <h3 className="font-serif text-xl font-bold text-white uppercase">
                  Auspicious Dates (Muhurtham 2026)
                </h3>
              </div>

              {/* Sample dates grid */}
              <div className="space-y-2.5">
                {[
                  { date: '2026-11-20', label: 'Friday, 20 Nov 2026', note: 'Auspicious Muhurtham', status: 'available' },
                  { date: '2026-11-24', label: 'Tuesday, 24 Nov 2026', note: 'Winter Muhurtham', status: 'limited' },
                  { date: '2026-11-28', label: 'Saturday, 28 Nov 2026', note: 'Weekend Grand Muhurtham', status: 'available' },
                  { date: '2026-12-04', label: 'Friday, 04 Dec 2026', note: 'December Sacred Vows', status: 'available' },
                  { date: '2026-12-10', label: 'Thursday, 10 Dec 2026', note: 'Margazhi Auspicious', status: 'limited' },
                  { date: '2026-12-14', label: 'Monday, 14 Dec 2026', note: 'Temple Muhurtham', status: 'booked' },
                ].map((item) => {
                  const isSelected = selectedDate === item.date;

                  return (
                    <div
                      key={item.date}
                      onClick={() => handleDateClick(item.date)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-obsidian-800 border-gold-400 shadow-md scale-102'
                          : 'bg-obsidian-900/60 border-white/5 hover:border-gold-400/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.status === 'available'
                              ? 'bg-emerald-400'
                              : item.status === 'limited'
                              ? 'bg-amber-400'
                              : 'bg-rose-500'
                          }`}
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-white">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-gray-400 font-mono">
                            {item.note}
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono font-bold">
                        {item.status === 'available' && <span className="text-emerald-400">SLOTS OPEN</span>}
                        {item.status === 'limited' && <span className="text-amber-400">1 CREW LEFT</span>}
                        {item.status === 'booked' && <span className="text-rose-400">BOOKED</span>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Custom Date Input */}
              <div className="pt-2">
                <label className="text-xs font-mono text-gray-400 block mb-1">
                  Or choose any specific custom date:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs font-mono focus:border-gold-400 focus:outline-none"
                />
              </div>

              {/* Status Badge */}
              <div className="p-4 rounded-xl bg-gold-400/5 border border-gold-400/20 flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gold-400/10 text-gold-400">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-gold-300 font-bold uppercase">
                    Status for {selectedDate}: {selectedDateStatus.label}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Lead Cinematographer & Senior Stills Crew available.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Reservation & Enquiry Form */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-obsidian-850 border border-gold-400/40 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400 flex items-center justify-center text-gold-400 mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white uppercase">
                    THANK YOU, {formData.name || 'DEAR COUPLE'}!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    We have temporarily locked your enquiry for <strong className="text-gold-300">{selectedDate}</strong>. Our studio manager will call you within 2 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919092141112?text=Hi%20Studio%20Green!%20I%20just%20submitted%20a%20date%20check%20for%20${selectedDate}%20for%20${formData.name}.%20Please%20confirm!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#25D366] text-black font-display font-bold text-xs uppercase tracking-wider flex items-center space-x-2"
                    >
                      <MessageSquare size={16} />
                      <span>INSTANT WHATSAPP CONFIRMATION</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs text-gray-400 hover:text-white"
                    >
                      Submit Another Date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                      2. ENTER YOUR WEDDING DETAILS
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white uppercase">
                      Lock Date Priority
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Arun / Priya"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs placeholder-gray-600 focus:border-gold-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 090921 41112"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs placeholder-gray-600 focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. couple@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs placeholder-gray-600 focus:border-gold-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Celebration Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs focus:border-gold-400 focus:outline-none"
                      >
                        <option>Wedding & Reception</option>
                        <option>Pre-Wedding Beach Shoot</option>
                        <option>Grand Engagement</option>
                        <option>Maternity & Baby</option>
                        <option>Destination Wedding Production</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Event Location / Mandapam</label>
                    <input
                      type="text"
                      placeholder="e.g. Silver Beach Resort Cuddalore / Pondicherry"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs placeholder-gray-600 focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Tell Us About Your Vision (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Expected guest count, rituals, or special photography ideas..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs placeholder-gray-600 focus:border-gold-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black border-2 border-gold-400 hover:border-gold-300 text-gold-300 hover:text-white font-serif font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(0,0,0,0.95)] hover:shadow-[0_0_30px_rgba(220,180,106,0.35)] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.01]"
                  >
                    <Send size={15} />
                    <span>CHECK MY DATE & HOLD PRIORITY →</span>
                  </button>

                  <div className="text-center text-[10px] text-gray-500 font-mono">
                    Direct studio line: <a href="tel:09092141112" className="text-gold-400 underline">090921 41112</a> • Cuddalore, TN
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
