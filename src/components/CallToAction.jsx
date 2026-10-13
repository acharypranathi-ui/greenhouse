import React from 'react';
import { ArrowRight, Phone, Sparkles } from './Icons';
import { websiteData } from '../data';

export default function CallToAction() {
  return (
    <section
      id="cta"
      style={{
        position: 'relative',
        padding: '6rem 0',
        background: `linear-gradient(135deg, rgba(5, 46, 22, 0.92) 0%, rgba(15, 23, 42, 0.88) 100%), url('https://greenhomedevelopers.co.in/wp-content/uploads/2026/07/Aadya-Nagar.jpg') center/cover no-repeat fixed`,
        color: '#ffffff',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.45rem 1.15rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#86efac',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={16} color="#4ade80" /> Start Your Property Journey
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            Your Dream Property Starts Here
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            marginBottom: '2.5rem'
          }}>
            Explore our projects and take the first step towards finding your ideal home or highest-appreciating land investment in Tirupati.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href={`tel:${websiteData.company.phone}`} className="btn-secondary" style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}>
              <Phone size={17} /> Contact Us (+91 {websiteData.company.phone})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
