import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, ArrowRight, ShieldCheck } from './Icons';
import { websiteData } from '../data';

export default function Navbar({ currentView, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, target) => {
    if (target === 'blog') {
      e.preventDefault();
      onNavigate('blog');
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      e.preventDefault();
      onNavigate('home');
      setMobileMenuOpen(false);
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }

    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#hero', type: 'anchor' },
    { name: 'About Us', href: '#about', type: 'anchor' },
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Projects', href: '#projects', type: 'anchor' },
    { name: 'Why Us', href: '#why-us', type: 'anchor' },
    { name: 'Gallery', href: '#gallery', type: 'anchor' },
    { name: 'Testimonials', href: '#testimonials', type: 'anchor' },
    { name: 'Blog', href: '#blog', type: 'view' },
    { name: 'Enquiry', href: '#enquiry', type: 'anchor' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #052e16 0%, #14532d 100%)',
        color: '#dcfce7',
        fontSize: '0.825rem',
        padding: '0.45rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="#4ade80" /> {websiteData.company.approvals}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={13} color="#4ade80" /> Tirupati, Andhra Pradesh
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href={`tel:${websiteData.company.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff', fontWeight: 600 }}>
              <Phone size={13} color="#4ade80" /> +91 {websiteData.company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: isScrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              padding: 0,
              textAlign: 'left'
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #22c55e, #15803d)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(22, 101, 52, 0.25)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              GH
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                GREEN HOME
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15803d', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                DEVELOPERS • TIRUPATI
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.6rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isBlogActive = (link.name === 'Blog' && (currentView === 'blog' || currentView === 'article'));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.name === 'Blog' ? 'blog' : link.href)}
                  style={{
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    color: isBlogActive ? '#15803d' : '#334155',
                    transition: 'color 0.2s ease',
                    padding: '0.35rem 0',
                    borderBottom: isBlogActive ? '2px solid #15803d' : '2px solid transparent'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#15803d')}
                  onMouseLeave={(e) => {
                    if (!isBlogActive) e.currentTarget.style.color = '#334155';
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button Desktop */}
          <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-actions">
            <button
              onClick={() => {
                if (currentView !== 'home') {
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById('enquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
            >
              Book Site Visit <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '8px',
              padding: '0.55rem',
              cursor: 'pointer',
              color: '#0f172a'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.name === 'Blog' ? 'blog' : link.href)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: (link.name === 'Blog' && (currentView === 'blog' || currentView === 'article')) ? '#15803d' : '#1e293b',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentView !== 'home') {
                  onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const el = document.getElementById('enquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.5rem' }}
            >
              Book Site Visit <ArrowRight size={16} />
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
