import React from 'react';
import { ArrowRight, BookOpen, Calendar, Clock, User, Sparkles } from './Icons';
import { blogPosts } from '../blogData';

export default function HomeBlogSection({ onNavigateToBlog, onNavigateToArticle }) {
  const featuredPost = blogPosts[0];

  return (
    <section id="insights" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
          <div className="section-badge">
            <BookOpen size={14} /> Real Estate Insights & Guides
          </div>
          <h2 className="section-title">
            Knowledge & <span>Market Strategy</span>
          </h2>
          <p className="section-subtitle">
            Explore industry guides, local property trends in Tirupati, and expert recommendations curated for homebuyers and investors.
          </p>
        </div>

        {/* Featured Big Blog Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '0',
          transition: 'all 0.35s ease'
        }}>
          {/* Left Column: Image */}
          <div style={{ position: 'relative', minHeight: '320px', overflow: 'hidden' }}>
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div style={{
              position: 'absolute',
              top: '1.25rem',
              left: '1.25rem',
              background: 'rgba(5, 46, 22, 0.88)',
              backdropFilter: 'blur(8px)',
              color: '#86efac',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              border: '1px solid rgba(255,255,255,0.18)'
            }}>
              <Sparkles size={13} color="#4ade80" /> Featured Guide
            </div>
          </div>

          {/* Right Column: Content */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Meta information row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#64748b', fontSize: '0.84rem', marginBottom: '1rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} color="#15803d" /> {featuredPost.publishedDate}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} color="#15803d" /> {featuredPost.readingTime}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={14} color="#15803d" /> By {featuredPost.submittedBy}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => onNavigateToArticle && onNavigateToArticle(featuredPost.id)}
                style={{
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#15803d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
              >
                {featuredPost.title}
              </h3>

              {/* Excerpt */}
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {featuredPost.excerpt}
              </p>

              {/* Key tags preview */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                <span style={{ background: '#ecfdf5', color: '#166534', padding: '0.3rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600 }}>
                  Digital Marketing for Real Estate
                </span>
                <span style={{ background: '#ecfdf5', color: '#166534', padding: '0.3rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600 }}>
                  Real Estate in Tirupati
                </span>
                <span style={{ background: '#ecfdf5', color: '#166534', padding: '0.3rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600 }}>
                  Property Lead Generation
                </span>
              </div>
            </div>

            {/* Actions Bottom Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f5f9' }}>
              <button
                onClick={() => onNavigateToArticle && onNavigateToArticle(featuredPost.id)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.925rem' }}
              >
                Read More <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigateToBlog && onNavigateToBlog()}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#15803d',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                View All Articles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
