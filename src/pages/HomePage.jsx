import React from 'react';
import Hero from '../components/Hero';
import LuxuryMarquee from '../components/LuxuryMarquee';
import StoryReader from '../components/StoryReader';
import Portfolio from '../components/Portfolio';
import FilmReels from '../components/FilmReels';
import ApertureLensDial from '../components/ApertureLensDial';
import ProductionVault from '../components/ProductionVault';
import Services from '../components/Services';
import PackagesCalculator from '../components/PackagesCalculator';
import DateChecker from '../components/DateChecker';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import InstagramGrid from '../components/InstagramGrid';

export default function HomePage({ onNavigate, onOpenClientPortal }) {
  return (
    <div className="relative bg-black selection:bg-gold-400 selection:text-black">
      {/* 1. Grand Master Hero */}
      <Hero
        onNavigate={onNavigate}
        onOpenClientPortal={onOpenClientPortal}
      />

      {/* 2. Architectural Luxury Ribbon Marquee */}
      <LuxuryMarquee />

      {/* 3. Featured Wedding Chronicles */}
      <StoryReader onNavigate={onNavigate} />

      {/* 4. Curated Portfolio Stills */}
      <Portfolio onNavigate={onNavigate} />

      {/* 5. 4K Cinema Films & Native Video Player */}
      <FilmReels onNavigate={onNavigate} />

      {/* 6. Interactive Focal Perspective & Optical Lens Dial */}
      <ApertureLensDial onNavigate={onNavigate} />

      {/* 7. Haute Couture Production Vault (Cinema & Stills Arsenal) */}
      <ProductionVault />

      {/* 8. Magazine Editorial Services Spread */}
      <Services onSelectService={() => onNavigate('packages')} />

      {/* 9. Transparent Luxury Packages & Live Calculator */}
      <PackagesCalculator onNavigateToDateChecker={() => onNavigate('date-checker')} />

      {/* 10. Auspicious Muhurtham Date Checker */}
      <DateChecker />

      {/* 11. The Atelier Heritage & Master Lead */}
      <AboutSection />

      {/* 12. Couple Love Letters & Cinema Reviews */}
      <Testimonials />

      {/* 13. Live Atelier Instagram Dispatch */}
      <InstagramGrid />
    </div>
  );
}
