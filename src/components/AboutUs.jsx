import React, { useState } from 'react';
import { Target, Compass, Award, CheckCircle, ArrowRight, Eye } from './Icons';
import { websiteData } from '../data';

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Property & Construction Visual */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
              position: 'relative'
            }}>
              <img
                src="https://greenhomedevelopers.co.in/wp-content/uploads/2026/07/image-1024x683.jpg"
                alt="Green Home Developers Construction Quality"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(5, 46, 22, 0.65) 100%)'
              }} />
            </div>

            {/* Experience Floating Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '25px',
              background: 'linear-gradient(135deg, #15803d, #052e16)',
              color: '#ffffff',
              padding: '1.25rem 1.6rem',
              borderRadius: '18px',
              boxShadow: '0 15px 30px rgba(21, 128, 61, 0.35)',
              border: '2px solid rgba(255,255,255,0.2)',
              maxWidth: '220px'
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, color: '#4ade80' }}>15+</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginTop: '0.35rem' }}>
                Years of Excellence in Real Estate
              </div>
            </div>
          </div>

          {/* Right Column: Company Story, Vision, Mission */}
          <div>
            <div className="section-badge">
              <Award size={14} /> About Green Home Developers
            </div>
            <h2 className="section-title">
              Where Smart Investments Begin In <span>Tirupati</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.025rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {websiteData.company.aboutIntro}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              {websiteData.company.aboutDetailed}
            </p>

            {/* Vision & Mission Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.25rem' }}>
              {/* Vision Card */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: '#15803d', fontWeight: 700 }}>
                  <Eye size={20} />
                  <span>Our Vision</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                  {websiteData.company.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: '#15803d', fontWeight: 700 }}>
                  <Target size={20} />
                  <span>Our Mission</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.55 }}>
                  {websiteData.company.mission}
                </p>
              </div>
            </div>

            {/* Action Button: Know More */}
            <button
              onClick={() => setShowModal(true)}
              className="btn-outline"
              style={{ cursor: 'pointer' }}
            >
              Know More About Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Know More Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            maxWidth: '680px',
            width: '100%',
            padding: '2.25rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={22} color="#15803d" />
                <h3 style={{ fontSize: '1.4rem', color: '#0f172a' }}>About Green Home Developers</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                <strong>Green Home Developers</strong> has emerged as Tirupati's benchmark real estate development firm, specializing in TUDA & DTCP-approved plotted ventures, luxury villa developments, and countryside farmhouse projects.
              </p>
              <p>
                With more than <strong>250+ acres master-planned</strong> and <strong>25+ completed projects</strong>, our projects are situated along high-growth corridors including the Yerpedu-Venkatagiri highway, Mumbai NH, and adjacent to educational landmarks like IIT Tirupati and IISER.
              </p>
              <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
                <h4 style={{ color: '#065f46', marginBottom: '0.5rem', fontSize: '1rem' }}>Our Guarantees to Every Buyer:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem' }}>
                  <li>✓ 100% Clear legal title documentation & immediate registration assistance.</li>
                  <li>✓ Master planned layouts featuring 40ft and 33ft wide blacktop roads.</li>
                  <li>✓ Underground drainage, transformer power, and water supply to each individual plot.</li>
                  <li>✓ Proximity to rapidly developing national highway hubs and educational institutions.</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem', textAlign: 'right' }}>
              <button onClick={() => setShowModal(false)} className="btn-primary" style={{ padding: '0.65rem 1.6rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
