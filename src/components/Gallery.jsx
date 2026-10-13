import React, { useState } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from './Icons';
import { websiteData } from '../data';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Residential Layouts', 'Villas & Plots', 'Farmhouse & Countryside', 'Interiors', 'Project Surroundings'];

  const filteredGallery = activeTab === 'All'
    ? websiteData.gallery
    : websiteData.gallery.filter(item => item.category === activeTab);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <ZoomIn size={14} /> Project Showcase
          </div>
          <h2 className="section-title">
            Vibrant <span>Visual Gallery</span>
          </h2>
          <p className="section-subtitle">
            Take a visual tour through our residential gated communities, villa architecture, lush countryside farmhouse settings, and live project developments.
          </p>

          {/* Filter Categories */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: activeTab === cat ? '#15803d' : '#f1f5f9',
                  color: activeTab === cat ? '#ffffff' : '#475569',
                  border: '1px solid',
                  borderColor: activeTab === cat ? '#15803d' : '#e2e8f0',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '270px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 30px rgba(0,0,0,0.12)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.08)';
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.gallery-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Hover Overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(5,46,22,0.1) 0%, rgba(5,46,22,0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  color: '#ffffff',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#86efac',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem'
                }}>
                  <ZoomIn size={14} /> {item.category}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 15, 10, 0.94)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '1.5rem'
        }}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease'
            }}
            aria-label="Close Preview"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease'
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Current Large Image Container */}
          <div style={{ maxWidth: '950px', maxHeight: '82vh', width: '100%', textAlign: 'center' }}>
            <img
              src={filteredGallery[selectedImageIndex].image}
              alt={filteredGallery[selectedImageIndex].title}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                borderRadius: '16px',
                objectFit: 'contain',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                display: 'inline-block'
              }}
            />
            <div style={{ color: '#ffffff', marginTop: '1rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {filteredGallery[selectedImageIndex].title}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#86efac', marginTop: '0.2rem' }}>
                {filteredGallery[selectedImageIndex].category} • Image {selectedImageIndex + 1} of {filteredGallery.length}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease'
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
