import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/mouse devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.interactive-item')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden lg:block">
      {/* Outer focus reticle ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${
          hovered
            ? 'w-14 h-14 border-gold-400 bg-gold-400/10 scale-110'
            : 'w-8 h-8 border-gold-400/40'
        } ${clicked ? 'scale-75 border-emerald-400' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {/* Subtle crosshair ticks */}
        <div className="absolute w-2 h-0.5 bg-gold-400/60 top-1/2 -left-1" />
        <div className="absolute w-2 h-0.5 bg-gold-400/60 top-1/2 -right-1" />
        <div className="absolute h-2 w-0.5 bg-gold-400/60 left-1/2 -top-1" />
        <div className="absolute h-2 w-0.5 bg-gold-400/60 left-1/2 -bottom-1" />
      </div>

      {/* Center point dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-gold-400 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 ${
          clicked ? 'bg-emerald-400 scale-150' : ''
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
