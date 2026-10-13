import React from 'react';
import { ShieldCheck, MapPin, Sparkles, FileCheck, Smile, Award, CheckCircle2 } from './Icons';
import { websiteData } from '../data';

const iconMap = {
  ShieldCheck: ShieldCheck,
  MapPin: MapPin,
  Sparkles: Sparkles,
  FileCheck: FileCheck,
  Smile: Smile,
  Award: Award
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ecfdf5 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.75rem' }}>
          <div className="section-badge">
            <Award size={14} /> The Green Home Advantage
          </div>
          <h2 className="section-title">
            Why Choose <span>Green Home Developers?</span>
          </h2>
          <p className="section-subtitle">
            Our unyielding focus on prime highway connectivity, legal clarity, and top-tier infrastructure guarantees lasting security for your property investment.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {websiteData.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '2.25rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(21, 128, 61, 0.16)';
                  e.currentTarget.style.borderColor = '#86efac';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(15, 23, 42, 0.05)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #22c55e, #15803d)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  boxShadow: '0 6px 16px rgba(22, 101, 52, 0.25)'
                }}>
                  <IconComponent size={26} />
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  color: '#64748b',
                  fontSize: '0.93rem',
                  lineHeight: 1.65
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Metrics Banner */}
        <div style={{
          marginTop: '4rem',
          background: 'linear-gradient(135deg, #052e16 0%, #14532d 100%)',
          borderRadius: '24px',
          padding: '2.5rem 2rem',
          color: '#ffffff',
          boxShadow: '0 20px 40px -10px rgba(5, 46, 22, 0.4)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', lineHeight: 1.1 }}>15+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.4rem', fontWeight: 500 }}>Years of Real Estate Trust</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', lineHeight: 1.1 }}>250+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.4rem', fontWeight: 500 }}>Acres Master Developed</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', lineHeight: 1.1 }}>3,500+</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.4rem', fontWeight: 500 }}>Delighted Families</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', lineHeight: 1.1 }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.4rem', fontWeight: 500 }}>Legal Title Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
