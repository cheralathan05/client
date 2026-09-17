import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';
import ClientPortal from './components/ClientPortal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingAtelierDock from './components/FloatingAtelierDock';

// ── Dedicated World-Class Pages ──
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import PortfolioPage from './pages/PortfolioPage';
import FilmsPage from './pages/FilmsPage';
import PackagesPage from './pages/PackagesPage';
import DateCheckerPage from './pages/DateCheckerPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [clientPortalOpen, setClientPortalOpen] = useState(false);

  // Helper to resolve hash to page ID
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (hash === 'stories') return 'stories';
    if (hash === 'portfolio') return 'portfolio';
    if (hash === 'films') return 'films';
    if (hash === 'packages') return 'packages';
    if (hash === 'date-checker' || hash === 'check-date') return 'date-checker';
    if (hash === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Synchronize browser history (back / forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = getPageFromHash();
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth multi-page navigation handler
  const handleNavigate = (pageId) => {
    let normalized = pageId;
    if (pageId === 'hero' || pageId === 'home') normalized = 'home';
    if (pageId === 'check-date') normalized = 'date-checker';

    setCurrentPage(normalized);

    // Update URL hash without reload
    if (normalized === 'home') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = `#/${normalized}`;
    }

    // Scroll cleanly to the top of the new page
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-black text-[#f2e8d5] selection:bg-gold-400/30 selection:text-gold-100 relative font-sans">

      {/* Haute Couture Architectural Navigation Bar */}
      <Navbar
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onOpenClientPortal={() => setClientPortalOpen(true)}
      />

      {/* ── Active Page View ── */}
      <main id="main-content" className="relative min-h-[80vh]">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenClientPortal={() => setClientPortalOpen(true)}
          />
        )}

        {currentPage === 'stories' && (
          <StoriesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'films' && (
          <FilmsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'packages' && (
          <PackagesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'date-checker' && (
          <DateCheckerPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Shared Luxury Footer across all pages */}
      <ContactFooter onNavigate={handleNavigate} />

      {/* Private Client Gallery Modal */}
      <ClientPortal
        isOpen={clientPortalOpen}
        onClose={() => setClientPortalOpen(false)}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />

      {/* Floating Haute Couture Atelier Dock */}
      <FloatingAtelierDock
        onNavigate={handleNavigate}
        activePage={currentPage}
      />
    </div>
  );
}
