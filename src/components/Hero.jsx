import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Building2, ShieldCheck, Sparkles } from './Icons';
import { websiteData } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, rgba(5, 46, 22, 0.88) 0%, rgba(15, 23, 42, 0.85) 100%), url('https://greenhomedevelopers.co.in/wp-content/uploads/2026/07/Highway-City-Green-Home-Developers-1.jpg') center/cover no-repeat fixed`,
        color: '#ffffff',
        overflow: 'hidden',
        padding: '5rem 0'
      }}
    >
      {/* Decorative gradient overlay accents */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.22) 0%, rgba(34, 197, 94, 0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        filter: 'blur(40px)'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '820px' }}>
          {/* Trust Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#86efac',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <Sparkles size={16} color="#4ade80" />
            <span>Trusted Real Estate Company in Tirupati</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 3.85rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.35rem',
              letterSpacing: '-0.025em',
              textShadow: '0 2px 14px rgba(0,0,0,0.35)'
            }}
          >
            {websiteData.company.tagline}
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#e2e8f0',
              lineHeight: 1.65,
              maxWidth: '680px',
              marginBottom: '2.5rem',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)'
            }}
          >
            {websiteData.company.subtagline}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
            <a href="#projects" className="btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.02rem' }}>
              Explore Our Projects <ArrowRight size={18} />
            </a>
            <a href="#enquiry" className="btn-secondary" style={{ padding: '0.95rem 2.2rem', fontSize: '1.02rem' }}>
              Enquire Now
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '10px',
                padding: '0.55rem',
                color: '#4ade80'
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>TUDA & DTCP</div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>100% Approved Layouts</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '10px',
                padding: '0.55rem',
                color: '#4ade80'
              }}>
                <Building2 size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>25+ Ventures</div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Successfully Delivered</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                background: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '10px',
                padding: '0.55rem',
                color: '#4ade80'
              }}>
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#ffffff' }}>3,500+ Buyers</div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Clear Legal Registration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
