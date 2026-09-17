import React, { useState } from 'react';
import { Lock, Unlock, Key, CheckCircle, Download, Heart, Image as ImageIcon, X, ArrowRight, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playShutterSound } from '../utils/audio';
import { CLIENT_DEMO_DATA, STUDIO_INFO } from '../data/photographyData';

export default function ClientPortal({ isOpen, onClose }) {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedForAlbum, setSelectedForAlbum] = useState(['cp-1', 'cp-2', 'cp-3', 'cp-6']);
  const [albumSubmitted, setAlbumSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e?.preventDefault();
    playShutterSound();

    const clean = passcode.trim().toUpperCase();
    if (clean === CLIENT_DEMO_DATA.accessCode || clean === CLIENT_DEMO_DATA.altCode || clean === 'DEMO') {
      setIsUnlocked(true);
      setErrorMsg('');
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#dfb76c', '#f4e4be', '#ffffff']
        });
      } catch {}
    } else {
      setErrorMsg('Invalid client passcode. Use demo passcode: STUDIO2026');
    }
  };

  const handleFillDemoCode = () => {
    playShutterSound();
    setPasscode('STUDIO2026');
    setErrorMsg('');
  };

  const toggleAlbumSelection = (id) => {
    playShutterSound();
    if (selectedForAlbum.includes(id)) {
      setSelectedForAlbum(selectedForAlbum.filter((x) => x !== id));
    } else {
      if (selectedForAlbum.length < CLIENT_DEMO_DATA.maxAlbumSelection) {
        setSelectedForAlbum([...selectedForAlbum, id]);
      }
    }
  };

  const handleSubmitAlbum = () => {
    playShutterSound();
    setAlbumSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
    setTimeout(() => setAlbumSubmitted(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-obsidian-950 rounded-3xl border border-gold-400/30 shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden my-auto">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-obsidian-900/60">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-obsidian-850 flex items-center justify-center text-gold-400">
              {isUnlocked ? <Unlock size={18} /> : <Lock size={18} />}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">
                  STUDIO GREEN PRIVATE CLIENT SUITE
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gold-400/20 text-gold-300 font-mono">
                  CLOUD v2.6
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                {isUnlocked ? `CLIENT: ${CLIENT_DEMO_DATA.clientName}` : 'SECURE MASTER PROOFING PORTAL'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isUnlocked && (
              <button
                onClick={() => {
                  playShutterSound();
                  setIsUnlocked(false);
                  setPasscode('');
                }}
                className="text-xs font-mono text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10"
              >
                Lock Session
              </button>
            )}
            <button
              onClick={() => {
                playShutterSound();
                onClose();
              }}
              className="p-2 rounded-full glass-panel hover:bg-red-500/30 text-gray-300 hover:text-white transition"
              aria-label="Close Portal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isUnlocked ? (
          /* Login Screen */
          <div className="p-8 sm:p-14 text-center max-w-md mx-auto space-y-6">
            <div className="w-20 h-20 rounded-full glass-panel border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto shadow-[0_0_30px_rgba(223,183,108,0.25)]">
              <Key size={32} />
            </div>

            <div>
              <h4 className="font-serif text-2xl font-bold text-white uppercase mb-2">
                ENTER GALLERY PASSCODE
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Enter the unique access credentials sent to your phone number or email by Studio Green Photography.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. STUDIO2026"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full text-center py-4 px-6 rounded-2xl bg-obsidian-900 border border-gold-400/30 text-gold-200 font-mono tracking-widest text-lg uppercase focus:border-gold-400 focus:outline-none shadow-inner"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-400 font-mono">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-display font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(223,183,108,0.4)] hover:scale-102 transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>UNLOCK MY WEDDING GALLERY</span>
                <ArrowRight size={15} />
              </button>
            </form>

            {/* Quick Demo Helper */}
            <div className="pt-4 border-t border-white/5">
              <button
                onClick={handleFillDemoCode}
                className="text-xs text-gold-400/80 hover:text-gold-300 font-mono underline decoration-gold-400/40 cursor-pointer"
              >
                ✨ Click to auto-fill sample demo passcode: STUDIO2026
              </button>
            </div>
          </div>
        ) : (
          /* Unlocked Client Dashboard */
          <div className="p-6 sm:p-8 space-y-6">
            {/* Event Summary Banner */}
            <div className="glass-panel p-6 rounded-2xl border border-gold-400/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-gold-400 tracking-widest uppercase">
                  ACTIVE PROOFING SUITE
                </span>
                <h4 className="font-serif text-2xl font-bold text-white uppercase mt-0.5">
                  {CLIENT_DEMO_DATA.clientName}
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  {CLIENT_DEMO_DATA.eventName} • {CLIENT_DEMO_DATA.eventDate} • {CLIENT_DEMO_DATA.location}
                </p>
              </div>

              {/* Album Progress Bar */}
              <div className="bg-obsidian-900 p-4 rounded-xl border border-white/10 w-full md:w-72">
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gray-300">Album Selection:</span>
                  <span className="text-gold-400 font-bold">
                    {selectedForAlbum.length} / {CLIENT_DEMO_DATA.maxAlbumSelection} photos
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-300"
                    style={{
                      width: `${(selectedForAlbum.length / CLIENT_DEMO_DATA.maxAlbumSelection) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Notification if album submitted */}
            {albumSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center justify-between">
                <span>✓ Selections successfully sent to Studio Green design team in Cuddalore!</span>
                <span className="text-white">Order ID: #SG-ALBUM-2026</span>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center space-x-2 text-gray-400 font-mono">
                <ImageIcon size={14} className="text-gold-400" />
                <span>Showing {CLIENT_DEMO_DATA.galleryPhotos.length} Master Proofs</span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleSubmitAlbum}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md"
                >
                  <CheckCircle size={14} />
                  <span>SUBMIT ALBUM SELECTION</span>
                </button>
              </div>
            </div>

            {/* Proofing Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[55vh] overflow-y-auto pr-2">
              {CLIENT_DEMO_DATA.galleryPhotos.map((photo) => {
                const isSelected = selectedForAlbum.includes(photo.id);

                return (
                  <div
                    key={photo.id}
                    className={`group relative rounded-2xl overflow-hidden glass-panel border transition-all ${
                      isSelected ? 'border-gold-400 ring-2 ring-gold-400/30' : 'border-white/10'
                    }`}
                  >
                    <div className="relative aspect-[4/3] bg-obsidian-900">
                      <img
                        src={photo.thumb}
                        alt={photo.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Select for Album Checkbox Badge */}
                      <button
                        onClick={() => toggleAlbumSelection(photo.id)}
                        className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center space-x-1.5 transition ${
                          isSelected
                            ? 'bg-gold-400 text-obsidian-950 font-bold shadow-md'
                            : 'bg-obsidian-950/80 text-white border border-white/20 hover:border-gold-400'
                        }`}
                      >
                        <CheckCircle size={13} />
                        <span>{isSelected ? 'ALBUM PICKED' : 'PICK FOR ALBUM'}</span>
                      </button>

                      {/* Tags */}
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        {photo.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] text-gold-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-obsidian-900/90 flex items-center justify-between text-xs">
                      <span className="font-mono text-gray-300 truncate max-w-[160px]">
                        {photo.name}
                      </span>
                      <a
                        href={photo.full}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-400 hover:text-white p-1"
                        title="Download High-Res Original"
                      >
                        <Download size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
