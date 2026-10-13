import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck } from './Icons';
import { websiteData } from '../data';

export default function EnquiryForm({ prefilledProject }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    project: 'Aadya Nagar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({ ...prev, project: prefilledProject }));
    }
  }, [prefilledProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your Full Name, Phone Number, and Email Address.');
      return;
    }

    if (formData.phone.trim().length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="section-padding" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Contact Details & Trust */}
          <div>
            <div className="section-badge">
              <ShieldCheck size={14} /> Get In Touch
            </div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              Interested in <span>Our Properties?</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
              Fill in your details and our expert real estate team will get in touch with you to arrange a complimentary site visit and share verified legal layouts.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              <a
                href={`tel:${websiteData.company.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.15rem 1.4rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#86efac')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Phone Consultation</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>+91 {websiteData.company.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${websiteData.company.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.15rem 1.4rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#86efac')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Email Address</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{websiteData.company.email}</div>
                </div>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.15rem 1.4rem',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Corporate Office</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>
                    {websiteData.company.address}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#15803d', fontSize: '0.9rem', fontWeight: 600 }}>
              <Clock size={16} /> Office Hours: {websiteData.company.workingHours}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 15px 40px -10px rgba(15, 23, 42, 0.08)',
            position: 'relative'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22c55e, #15803d)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 10px 25px rgba(22, 101, 52, 0.3)'
                }}>
                  <CheckCircle size={38} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Enquiry Submitted!
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      project: 'Aadya Nagar',
                      message: ''
                    });
                  }}
                  className="btn-outline"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Book Site Visit & Enquiry
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  Fill in your details and our team will get in touch with you.
                </p>

                {errorMsg && (
                  <div style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#b91c1c',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.875rem',
                    marginBottom: '1.25rem'
                  }}>
                    {errorMsg}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border 0.2s'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#15803d')}
                      onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border 0.2s'
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#15803d')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. name@example.com"
                        required
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border 0.2s'
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#15803d')}
                        onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Select Project
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        outline: 'none',
                        background: '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      {websiteData.projects.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.status.includes('Ongoing') ? 'Ongoing' : 'Delivered'})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your requirements (e.g. plot size, site visit timing)..."
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#15803d')}
                      onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem',
                      marginTop: '0.5rem',
                      fontSize: '1rem'
                    }}
                  >
                    <Send size={17} /> Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
