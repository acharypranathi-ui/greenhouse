import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, ArrowUp, ShieldCheck } from './Icons';
import { websiteData } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#enquiry' },
  ];

  return (
    <footer style={{
      background: '#052e16',
      color: '#cbd5e1',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #22c55e, #15803d)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1.25rem'
              }}>
                GH
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  GREEN HOME
                </div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4ade80', letterSpacing: '0.12em' }}>
                  DEVELOPERS • TIRUPATI
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: '#94a3b8', marginBottom: '1.5rem' }}>
              One of Tirupati's most trusted real estate developers offering TUDA & DTCP approved plotted layouts, villa plots, and farmhouse living. Building better homes, creating better lives.
            </p>

            {/* Social Media Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e1306c')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1877f2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#ff0000')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#0a66c2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.92rem',
                      color: '#94a3b8',
                      transition: 'color 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#4ade80')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Locations */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>
              Growth Corridors
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: '#94a3b8' }}>
              <li>• Yerpedu – Venkatagiri Highway</li>
              <li>• Mumbai National Highway Corridor</li>
              <li>• IIT & IISER Tirupati Belt</li>
              <li>• Anjimedu Waterfront Zone</li>
              <li>• Renigunta & Airport Growth Axis</li>
              <li>• Electronic & Industrial SEZ Belt</li>
            </ul>
          </div>

          {/* Column 4: Contact Office */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <MapPin size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{websiteData.company.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Phone size={18} color="#4ade80" style={{ flexShrink: 0 }} />
                <a href={`tel:${websiteData.company.phone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  +91 {websiteData.company.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Mail size={18} color="#4ade80" style={{ flexShrink: 0 }} />
                <a href={`mailto:${websiteData.company.email}`} style={{ color: '#ffffff' }}>
                  {websiteData.company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            Copyright © {new Date().getFullYear()} Green Home Developers. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.45rem 1rem',
              color: '#ffffff',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
