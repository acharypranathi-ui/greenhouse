import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Building2,
  ChevronDown,
  Share2,
  Check,
  BookOpen,
  MapPin,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Key,
  Layers,
  Sparkles
} from './Icons';
import { blogPosts } from '../blogData';
import { websiteData } from '../data';

export default function BlogArticlePage({ onNavigateBack, onNavigateHome, onNavigateToEnquiry }) {
  const post = blogPosts[0];
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const tocItems = [
    { id: "intro", title: "Introduction & Key Terms" },
    { id: "personas", title: "1. Buyer Personas: Who Are We Talking To?" },
    { id: "keywords", title: "2. Keyword Research: What Do Buyers Search For?" },
    { id: "local-seo", title: "3. Local SEO: Reaching Buyers in Tirupati" },
    { id: "landing-page", title: "4. Landing Page: Turning Visitors into Enquiries" },
    { id: "advertising", title: "5. Digital Advertising Strategy" },
    { id: "measuring", title: "6. Measuring Results & Simple Formulas" },
    { id: "tools", title: "7. Digital Marketing Tools" },
    { id: "implementation", title: "8. 4-Stage Implementation Plan" },
    { id: "faqs", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion & Property Enquiries" },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Schema.org Article & FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "image": [post.coverImage],
            "datePublished": "2026-10-14T08:00:00+05:30",
            "dateModified": "2026-10-14T08:00:00+05:30",
            "author": {
              "@type": "Person",
              "name": post.submittedBy
            },
            "publisher": {
              "@type": "Organization",
              "name": post.business,
              "logo": {
                "@type": "ImageObject",
                "url": "https://greenhomedevelopers.co.in/wp-content/uploads/2026/06/web-logo-300x90.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://greenhomedevelopers.co.in/blog/digital-marketing-strategy-real-estate"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": post.faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
              }
            }))
          })
        }}
      />

      {/* Article Header & Breadcrumb */}
      <header style={{
        background: 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)',
        padding: '3.5rem 0 2.5rem',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
              <button onClick={onNavigateHome} style={{ background: 'none', border: 'none', color: '#15803d', cursor: 'pointer', fontWeight: 600, padding: 0 }}>
                Home
              </button>
              <span>/</span>
              <button onClick={onNavigateBack} style={{ background: 'none', border: 'none', color: '#15803d', cursor: 'pointer', fontWeight: 600, padding: 0 }}>
                Blog
              </button>
              <span>/</span>
              <span style={{ color: '#0f172a', fontWeight: 600 }}>Digital Marketing Strategy</span>
            </nav>

            {/* Category Badge */}
            <div className="section-badge" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} /> {post.category}
            </div>

            {/* Main Article Title (H1) */}
            <h1 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.25,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}>
              {post.title}
            </h1>

            {/* Meta details strip */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid #e2e8f0',
              fontSize: '0.88rem',
              color: '#64748b'
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={15} color="#15803d" /> Written by: <strong style={{ color: '#0f172a' }}>{post.submittedBy}</strong>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Building2 size={15} color="#15803d" /> Business: <strong style={{ color: '#0f172a' }}>{post.business}</strong>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={15} color="#15803d" /> {post.publishedDate}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={15} color="#15803d" /> {post.readingTime}
                </span>
              </div>

              <button
                onClick={handleShare}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '9999px',
                  padding: '0.45rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#15803d',
                  transition: 'all 0.2s'
                }}
              >
                {copied ? <Check size={14} color="#15803d" /> : <Share2 size={14} />}
                {copied ? 'Link Copied!' : 'Share Article'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sidebar TOC */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 290px',
          gap: '3.5rem',
          alignItems: 'start'
        }} className="article-grid">
          {/* Main Article Body */}
          <main style={{ maxWidth: '820px' }}>
            {/* Featured Image */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}>
              <img
                src={post.coverImage}
                alt="Digital marketing strategy for real estate properties with Green Home Developers in Tirupati"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', fontSize: '0.82rem', color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #e2e8f0' }}>
                Highway City by Green Home Developers: Verified gated villa plotted development on the Yerpedu-Mumbai Highway corridor in Tirupati.
              </div>
            </div>

            {/* Metadata Summary Box */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem' }}>
                Report Meta Overview
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: '#64748b' }}>Primary Keyword:</span>
                  <div style={{ fontWeight: 700, color: '#15803d' }}>{post.primaryKeyword}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Submitted By:</span>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{post.submittedBy}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Business:</span>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{post.business}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Location Focus:</span>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>Tirupati, Andhra Pradesh</div>
                </div>
              </div>
            </div>

            {/* Introduction Section */}
            <section id="intro" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                Introduction
              </h2>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Today, most people search online before they buy a property. They compare options, check locations and facilities, and then contact a real estate company for more details.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                For <strong>Green Home Developers</strong>, a good website alone is not enough. The business also needs a clear <strong>digital marketing strategy for real estate</strong> that helps the right buyers find it, trust it and send an enquiry.
              </p>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                This guide explains the plan in simple steps: understand your buyers, choose the right keywords, appear in local searches, build a strong real estate landing page, run online ads, and track the results. Together, these steps support better <strong>property lead generation</strong>.
              </p>

              {/* Key Highlights Card */}
              <div style={{
                background: '#ecfdf5',
                border: '1.5px solid #a7f3d0',
                borderRadius: '16px',
                padding: '1.75rem',
                marginBottom: '2.5rem'
              }}>
                <h3 style={{ color: '#065f46', fontSize: '1.15rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={18} color="#15803d" /> Key Highlights
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingLeft: 0 }}>
                  {post.keyHighlights.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#166534', fontSize: '0.96rem', lineHeight: 1.5 }}>
                      <CheckCircle size={17} color="#15803d" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Terms in Simple Words Table */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                Key Terms in Simple Words
              </h3>
              <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem', width: '25%' }}>Term</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>Simple Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.keyTerms.map((t, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{t.term}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#475569', lineHeight: 1.55 }}>{t.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Buyer Personas */}
            <section id="personas" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                1. Buyer Personas: Who Are We Talking To?
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                A <strong>buyer persona</strong> is a simple profile of a typical customer. It describes what they need and what they care about. Knowing this helps Green Home Developers write the right messages and reach the right people.
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem' }}>Buyer Type</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>What They Need</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>What To Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.buyerPersonas.map((bp, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{bp.buyerType}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#475569', lineHeight: 1.55 }}>{bp.need}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#166534', fontWeight: 600, lineHeight: 1.55 }}>{bp.whatToDo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ background: '#f0fdf4', borderLeft: '4px solid #15803d', padding: '1rem 1.25rem', borderRadius: '8px', color: '#166534', fontSize: '0.95rem' }}>
                <strong>Important Point:</strong> Different buyers need different information. Matching your marketing to their needs brings better enquiries.
              </div>
            </section>

            {/* 2. Keyword Research */}
            <section id="keywords" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                2. Keyword Research: What Do Buyers Search For?
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Keywords are the words and phrases people type into Google. Using the right keywords naturally on the website helps Google show the page to the right people searching for <strong>real estate in Tirupati</strong>.
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem', width: '35%' }}>Keyword Type</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.keywordTable.map((kw, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{kw.type}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#15803d', fontWeight: 600 }}>{kw.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                  How to Use Keywords Naturally:
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#475569', fontSize: '0.92rem' }}>
                  <li>• Put the main keyword in the title and introduction</li>
                  <li>• Use secondary keywords in headings and paragraphs</li>
                  <li>• Add location keywords to the right property pages</li>
                  <li>• Write clear meta titles and meta descriptions</li>
                  <li>• Link to the property and contact pages</li>
                  <li>• Describe each image honestly in its alt text</li>
                </ul>
              </div>

              <div style={{ background: '#ecfdf5', borderLeft: '4px solid #10b981', padding: '1rem 1.25rem', borderRadius: '8px', color: '#065f46', fontSize: '0.95rem' }}>
                <strong>SEO Tip:</strong> Write for the reader first. Use keywords naturally and avoid repeating the same phrase again and again. Use Google Keyword Planner and Google Trends to monitor interest changes over time.
              </div>
            </section>

            {/* 3. Local SEO */}
            <section id="local-seo" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                3. Local SEO: Reaching Buyers in Tirupati
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Most people want a property in a particular place. <strong>Local SEO for real estate</strong> helps Green Home Developers show up when people search for <strong>properties in Tirupati</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#15803d', marginBottom: '0.4rem' }}>
                    Google Business Profile
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55 }}>
                    Add the correct business name, category, contact details, website link, working hours, and real property photos.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#15803d', marginBottom: '0.4rem' }}>
                    Consistent NAP Details
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55 }}>
                    Keep the business name, address (+91 7702045555, M.R.Pally Tirupati), and phone number consistent everywhere online.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#15803d', marginBottom: '0.4rem' }}>
                    Genuine Customer Reviews
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55 }}>
                    Invite verified buyers from Aadya Nagar and Highway City to share honest reviews, and reply politely to every review.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#15803d', marginBottom: '0.4rem' }}>
                    Exact Location & Maps
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55 }}>
                    Provide embedded maps, nearby landmarks (IIT Tirupati, airport, national highways), and verified directions.
                  </p>
                </div>
              </div>

              <div style={{ background: '#f0fdf4', borderLeft: '4px solid #15803d', padding: '1rem 1.25rem', borderRadius: '8px', color: '#166534', fontSize: '0.95rem' }}>
                <strong>Key Takeaway:</strong> Local SEO makes it easier for people in the right area to find Green Home Developers.
              </div>
            </section>

            {/* 4. Landing Page */}
            <section id="landing-page" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                4. Landing Page: Turning Visitors into Enquiries
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                A landing page is a web page that shows property information and encourages one action, such as sending an enquiry or booking a visit. A good <strong>real estate landing page</strong> is clear, attractive, mobile-friendly, and easy to use.
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '1.75rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem', width: '32%' }}>Element</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>What To Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.landingPageElements.map((el, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{el.element}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#475569', lineHeight: 1.55 }}>{el.whatToDo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #052e16, #14532d)',
                color: '#ffffff',
                padding: '1.5rem 1.75rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(5,46,22,0.2)'
              }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#86efac', marginBottom: '0.4rem' }}>
                  “A great landing page doesn’t just show properties. It helps buyers take the next step with confidence.”
                </div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                  Visitors should understand the offer quickly and be able to contact you in just a few steps.
                </div>
              </div>
            </section>

            {/* 5. Digital Advertising Strategy */}
            <section id="advertising" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                5. Digital Advertising Strategy
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Online ads help Green Home Developers reach more people through search engines and social media platforms.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    • Google Search Ads
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.65 }}>
                    Real estate Google Ads show your business to people who are searching right now. Example themes: <em>real estate in Tirupati</em>, <em>properties for sale in Tirupati</em>, and <em>residential plots in Tirupati</em>. Send visitors to a landing page that matches their search, and remove irrelevant search terms.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    • Facebook and Instagram Ads
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.65 }}>
                    Show genuine photos, short videos, property features, and location benefits. Good ideas: property showcase ads, short walkthrough videos, lead-generation campaigns, and enquiry campaigns for specific property types.
                  </p>
                </div>

                <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>
                    • Retargeting & Budget Planning
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.65 }}>
                    Where permissions and platform rules allow, remind people who visited the website earlier and encourage them to come back or send an enquiry. Start with a small budget, test different audiences, images, headlines and buttons, and spend more on ads that bring good enquiries at a reasonable cost.
                  </p>
                </div>
              </div>

              <div style={{ background: '#ecfdf5', borderLeft: '4px solid #10b981', padding: '1rem 1.25rem', borderRadius: '8px', color: '#065f46', fontSize: '0.95rem' }}>
                <strong>Key Point:</strong> Judge ads by the quality of enquiries and business results, not just clicks and impressions.
              </div>
            </section>

            {/* 6. Measuring Results */}
            <section id="measuring" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                6. Measuring Results: Key Metrics & Formulas
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Marketing should be checked regularly to see what is working. Google Analytics and Google Search Console provide this essential data without cost.
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem', width: '35%' }}>Metric</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>What It Shows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.metricsTable.map((m, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{m.metric}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#475569', lineHeight: 1.55 }}>{m.whatItShows}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Simple Formulas Box */}
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                Simple Performance Formulas
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
                {post.formulas.map((f, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem' }}>{f.measure}</div>
                    <code style={{ fontSize: '0.92rem', color: '#15803d', fontWeight: 700 }}>{f.formula}</code>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '1.25rem', borderRadius: '12px', color: '#92400e', fontSize: '0.92rem', lineHeight: 1.6 }}>
                <strong>Example Calculation:</strong> If a campaign spends ₹5,000 and receives 10 enquiries, the Cost Per Lead (CPL) is ₹500. <em>(Note: This is an illustration, not a prediction of guaranteed results. Always report real analytics data).</em>
              </div>
            </section>

            {/* 7. Digital Marketing Tools */}
            <section id="tools" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                7. Digital Marketing Tools
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Utilize proven tools to execute, visualize, and optimize campaigns systematically:
              </p>

              <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <thead>
                    <tr style={{ background: '#15803d', color: '#ffffff', textAlign: 'left', fontSize: '0.9rem' }}>
                      <th style={{ padding: '0.9rem 1.2rem', width: '30%' }}>Tool</th>
                      <th style={{ padding: '0.9rem 1.2rem' }}>How It Helps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {post.toolsTable.map((t, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', fontSize: '0.92rem' }}>
                        <td style={{ padding: '0.9rem 1.2rem', fontWeight: 700, color: '#0f172a' }}>{t.tool}</td>
                        <td style={{ padding: '0.9rem 1.2rem', color: '#475569', lineHeight: 1.55 }}>{t.howItHelps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Implementation Plan */}
            <section id="implementation" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                8. 4-Stage Implementation Plan
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {post.implementationPlan.map((plan, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#15803d',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                        {plan.step}
                      </h4>
                      <p style={{ color: '#475569', fontSize: '0.93rem', lineHeight: 1.6 }}>
                        {plan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                Frequently Asked Questions (FAQ)
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        transition: 'all 0.2s'
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '1.15rem 1.4rem',
                          background: isOpen ? '#f8fafc' : '#ffffff',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: isOpen ? '#15803d' : '#0f172a',
                          gap: '1rem'
                        }}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={18}
                          color="#15803d"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            flexShrink: 0
                          }}
                        />
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 1.4rem 1.25rem', color: '#475569', fontSize: '0.93rem', lineHeight: 1.65, borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem' }}>
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Conclusion & CTA */}
            <section id="conclusion" style={{ marginBottom: '2rem', scrollMarginTop: '100px' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                Conclusion
              </h2>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                A strong digital marketing strategy for real estate brings together buyer research, the right keywords, local SEO, a better landing page, online ads, and regular measurement. For Green Home Developers, this can improve online visibility, give buyers useful property information, and make it easier for them to send enquiries.
              </p>
              <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                By focusing on genuine property details, local keywords, quality visuals, and measurable results, Green Home Developers can build a stronger online presence and keep improving its lead generation.
              </p>

              {/* Call to Action Banner matching PDF page 9 */}
              <div style={{
                background: 'linear-gradient(135deg, #052e16 0%, #15803d 100%)',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(21, 128, 61, 0.25)'
              }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.85rem', color: '#ffffff' }}>
                  Explore Green Home Developers
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.98rem', maxWidth: '600px', margin: '0 auto 1.75rem', lineHeight: 1.6 }}>
                  Learn more about available property options in Tirupati and contact our team for further details, layout drawings, or site visit scheduling.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.getElementById('projects');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="btn-primary"
                    style={{ padding: '0.85rem 1.85rem' }}
                  >
                    Explore Properties <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => {
                      onNavigateHome();
                      setTimeout(() => {
                        const el = document.getElementById('enquiry');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="btn-secondary"
                    style={{ padding: '0.85rem 1.85rem' }}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </section>
          </main>

          {/* Sticky Sidebar (Table of Contents & Quick Contact) */}
          <aside style={{ position: 'sticky', top: '100px' }} className="article-sidebar">
            {/* Table of Contents Box */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <BookOpen size={16} color="#15803d" /> Table of Contents
              </h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    style={{
                      fontSize: '0.84rem',
                      color: '#475569',
                      lineHeight: 1.4,
                      transition: 'all 0.2s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#15803d';
                      e.currentTarget.style.paddingLeft = '4px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#475569';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    • {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Property Enquiry Widget */}
            <div style={{
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: '18px',
              padding: '1.5rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#15803d',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.85rem'
              }}>
                <MapPin size={22} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                Properties in Tirupati
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#166534', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Looking for TUDA & DTCP approved plots near IIT Tirupati or the Mumbai Highway?
              </p>
              <button
                onClick={() => {
                  onNavigateHome();
                  setTimeout(() => {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
              >
                Schedule Site Visit
              </button>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .article-grid {
            grid-template-columns: 1fr !important;
          }
          .article-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
