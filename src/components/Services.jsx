import React from 'react';
import { Home, Building, HardHat, Compass, TrendingUp, Headphones, Sparkles, ArrowRight } from './Icons';
import { websiteData } from '../data';

const iconMap = {
  Home: Home,
  Building: Building,
  HardHat: HardHat,
  Compass: Compass,
  TrendingUp: TrendingUp,
  Headphones: Headphones
};

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          <div className="section-badge">
            <Sparkles size={14} /> Our Core Expertise
          </div>
          <h2 className="section-title">
            Comprehensive <span>Real Estate Services</span>
          </h2>
          <p className="section-subtitle">
            From visionary land layout design to turnkey villa construction and trusted advisory, we deliver end-to-end solutions for homebuyers and investors.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {websiteData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <div
                key={service.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2.25rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 18px 35px -8px rgba(21, 128, 61, 0.18)';
                  e.currentTarget.style.borderColor = '#86efac';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Accent Top Edge */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #22c55e, #15803d)'
                }} />

                <div>
                  {/* Icon Box */}
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                    border: '1px solid #a7f3d0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#15803d',
                    marginBottom: '1.4rem'
                  }}>
                    <IconComponent size={28} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.28rem',
                    color: '#0f172a',
                    fontWeight: 700,
                    marginBottom: '0.85rem'
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>
                </div>

                <a
                  href="#enquiry"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#15803d',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '0.7rem')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '0.45rem')}
                >
                  Consult Now <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
