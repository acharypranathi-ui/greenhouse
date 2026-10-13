import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2 } from './Icons';
import { websiteData } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? websiteData.testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === websiteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding" style={{
      background: '#f8fafc',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <MessageSquareQuote size={14} /> Client Trust & Experiences
          </div>
          <h2 className="section-title">
            What Our <span>Customers Say</span>
          </h2>
          <p className="section-subtitle">
            Hear from happy families and investors who have built their homes and grown their wealth with Green Home Developers in Tirupati.
          </p>
        </div>

        {/* Desktop 4-Card Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem'
        }} className="desktop-testimonials">
          {websiteData.testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '2rem 1.75rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(21, 128, 61, 0.15)';
                e.currentTarget.style.borderColor = '#86efac';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(15, 23, 42, 0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.15rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Review Text */}
                <p style={{
                  color: '#475569',
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{t.review}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #86efac'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#15803d', fontWeight: 600 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Swipe/Nav Layout */}
        <div className="mobile-testimonial-slider" style={{ display: 'none' }}>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
              {[...Array(websiteData.testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            <p style={{
              color: '#334155',
              fontSize: '0.975rem',
              lineHeight: 1.65,
              fontStyle: 'italic',
              marginBottom: '1.5rem'
            }}>
              "{websiteData.testimonials[currentIndex].review}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src={websiteData.testimonials[currentIndex].avatar}
                alt={websiteData.testimonials[currentIndex].name}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #86efac'
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                  {websiteData.testimonials[currentIndex].name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#15803d', fontWeight: 600 }}>
                  {websiteData.testimonials[currentIndex].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={prevSlide}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
              {currentIndex + 1} / {websiteData.testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-testimonials { display: none !important; }
          .mobile-testimonial-slider { display: block !important; }
        }
      `}</style>
    </section>
  );
}
