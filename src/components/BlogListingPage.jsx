import React from 'react';
import { ArrowRight, BookOpen, Calendar, Clock, User, Sparkles, Search } from './Icons';
import { blogPosts } from '../blogData';

export default function BlogListingPage({ onSelectArticle, onNavigateHome }) {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '80vh', paddingBottom: '5rem' }}>
      {/* Blog Hero Banner */}
      <div style={{
        background: `linear-gradient(135deg, rgba(5, 46, 22, 0.94) 0%, rgba(15, 23, 42, 0.9) 100%), url('https://greenhomedevelopers.co.in/wp-content/uploads/2026/07/Highway-City-Green-Home-Developers-1.jpg') center/cover no-repeat`,
        color: '#ffffff',
        padding: '5rem 0 4.5rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#86efac', marginBottom: '1.25rem' }}>
              <button
                onClick={onNavigateHome}
                style={{ background: 'none', border: 'none', color: '#86efac', cursor: 'pointer', fontWeight: 600 }}
              >
                Home
              </button>
              <span>/</span>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>Blog & Insights</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1.2rem',
              letterSpacing: '-0.025em'
            }}>
              Real Estate Insights, Strategy & Guides
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#e2e8f0', lineHeight: 1.65 }}>
              Expert advice on buying properties in Tirupati, verified land layout documentation, local market growth vectors, and property marketing best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Main Blog Grid Section */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              style={{
                background: '#ffffff',
                borderRadius: '22px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 36px -8px rgba(21, 128, 61, 0.16)';
                e.currentTarget.style.borderColor = '#86efac';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.05)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <div>
                {/* Article Image Container */}
                <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(5, 46, 22, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#86efac',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#64748b', fontSize: '0.8rem', marginBottom: '0.85rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} color="#15803d" /> {post.publishedDate}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} color="#15803d" /> {post.readingTime}
                    </span>
                  </div>

                  <h2
                    onClick={() => onSelectArticle(post.id)}
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      marginBottom: '0.85rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#15803d')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
                  >
                    {post.title}
                  </h2>

                  <p style={{
                    color: '#475569',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Link Card */}
              <div style={{ padding: '0 1.75rem 1.75rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem' }}>
                <button
                  onClick={() => onSelectArticle(post.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#15803d',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    transition: 'gap 0.2s'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '0.7rem')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '0.45rem')}
                >
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
