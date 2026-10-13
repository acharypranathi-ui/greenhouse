import React, { useState } from 'react';
import { MapPin, CheckCircle, ArrowRight, Building2, Tag, Shield, Eye } from './Icons';
import { websiteData } from '../data';

export default function FeaturedProjects({ onSelectProject }) {
  const [filter, setFilter] = useState('all'); // all, ongoing, completed
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = websiteData.projects.filter(p => {
    if (filter === 'ongoing') return p.status.includes('Ongoing');
    if (filter === 'completed') return p.status.includes('Completed');
    return true;
  });

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div className="section-badge">
            <Building2 size={14} /> Prime Plotted & Villa Communities
          </div>
          <h2 className="section-title">
            Our Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore our meticulously planned residential layouts and villa communities in Tirupati's most rapidly expanding highway corridors.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            background: '#f1f5f9',
            padding: '0.35rem',
            borderRadius: '9999px',
            marginTop: '2rem',
            gap: '0.35rem',
            border: '1px solid #e2e8f0'
          }}>
            <button
              onClick={() => setFilter('all')}
              style={{
                background: filter === 'all' ? '#15803d' : 'transparent',
                color: filter === 'all' ? '#ffffff' : '#475569',
                border: 'none',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              All Projects ({websiteData.projects.length})
            </button>
            <button
              onClick={() => setFilter('ongoing')}
              style={{
                background: filter === 'ongoing' ? '#15803d' : 'transparent',
                color: filter === 'ongoing' ? '#ffffff' : '#475569',
                border: 'none',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Ongoing Ventures (5)
            </button>
            <button
              onClick={() => setFilter('completed')}
              style={{
                background: filter === 'completed' ? '#15803d' : 'transparent',
                color: filter === 'completed' ? '#ffffff' : '#475569',
                border: 'none',
                padding: '0.55rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Delivered Milestones (3)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '2.25rem'
        }}>
          {filteredProjects.map((project) => {
            const isOngoing = project.status.includes('Ongoing');

            return (
              <div
                key={project.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15, 23, 42, 0.12)';
                  e.currentTarget.style.borderColor = '#86efac';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 23, 42, 0.05)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Project Image Container */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Status Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: isOngoing ? 'rgba(5, 46, 22, 0.88)' : 'rgba(30, 41, 59, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <span style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: isOngoing ? '#4ade80' : '#94a3b8'
                    }} />
                    {project.status}
                  </div>

                  {/* Approval Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(6px)',
                    color: '#15803d',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Shield size={13} /> {project.approval}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.45rem' }}>
                      {project.name}
                    </h3>

                    {/* Location */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#64748b', fontSize: '0.875rem', marginBottom: '0.95rem' }}>
                      <MapPin size={16} color="#15803d" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{project.location}</span>
                    </div>

                    {/* Description */}
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
                      {project.description}
                    </p>

                    {/* Highlights pill tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <span key={idx} style={{
                          background: '#ecfdf5',
                          color: '#166534',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          border: '1px solid #d1fae5'
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-outline"
                      style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.875rem' }}
                    >
                      <Eye size={15} /> View Project
                    </button>
                    <a
                      href="#enquiry"
                      onClick={() => onSelectProject && onSelectProject(project.name)}
                      className="btn-primary"
                      style={{ padding: '0.65rem 1.15rem', fontSize: '0.875rem' }}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
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
            maxWidth: '720px',
            width: '100%',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '260px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(15, 23, 42, 0.75)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(5, 46, 22, 0.9)',
                color: '#86efac',
                padding: '0.4rem 1rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                {selectedProject.approval}
              </div>
            </div>

            <div style={{ padding: '2rem', overflowY: 'auto' }}>
              <h3 style={{ fontSize: '1.65rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.4rem' }}>
                {selectedProject.name}
              </h3>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#15803d', fontWeight: 600, fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                <MapPin size={17} /> {selectedProject.location}
              </p>

              <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.85rem' }}>
                Key Venture Highlights & Infrastructure:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', marginBottom: '2rem' }}>
                {selectedProject.highlights.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle size={16} color="#15803d" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <a
                  href="#enquiry"
                  onClick={() => {
                    if (onSelectProject) onSelectProject(selectedProject.name);
                    setSelectedProject(null);
                  }}
                  className="btn-primary"
                  style={{ padding: '0.75rem 1.6rem' }}
                >
                  Book Site Visit for {selectedProject.name} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
