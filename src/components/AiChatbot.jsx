import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ArrowRight, CornerDownLeft, RefreshCcw } from './Icons';
import { websiteData } from '../data';

export default function AiChatbot({ onNavigateToEnquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to Green Home Developers. I am your AI Assistant. How can I help you today regarding our TUDA & DTCP approved plots, villas, or project locations?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    "What projects do you have?",
    "Where are your projects located?",
    "What services do you provide?",
    "How can I enquire about a property?",
    "How can I contact Green Home Developers?"
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Strict knowledge-grounded response engine
  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase().trim();

    // Check specific pricing queries first (per prompt rules: "Do not invent or assume information... If pricing requested, direct to contact")
    if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('how much') || q.includes('budget') || q.includes('square feet rate')) {
      return "I couldn't find pricing information on the website. Please submit an enquiry or contact the Green Home Developers team for current pricing and plot availability.";
    }

    // Enquiry intent
    if (q.includes('enquire') || q.includes('enquiry') || q.includes('book') || q.includes('site visit') || q.includes('buy') || q.includes('purchase')) {
      return "Sure! Please fill out the Enquiry Form with your name, phone number, email, and project details. Our team can contact you regarding your enquiry and arrange a site visit.";
    }

    // Services query
    if (q.includes('service') || q.includes('services') || q.includes('offer') || q.includes('provide') || q.includes('what do you do')) {
      return "Green Home Developers provides services including residential development, property development, construction, project planning, real-estate consultation, and customer support.";
    }

    // Projects query
    if (q.includes('project') || q.includes('projects') || q.includes('venture') || q.includes('ventures') || q.includes('plot') || q.includes('plots') || q.includes('ongoing')) {
      return "Green Home Developers has premium ongoing ventures including Aadya Nagar, Om Sai Balasa Chakrapani Nagar, Cloud City Resorts, Highway City Villas & Villa Plots, and Orchids Bloom. We also have completed projects such as Mannavaram Greens, Nature's Paradise, and Green County.";
    }

    // Specific projects
    if (q.includes('aadya nagar') || q.includes('aadya')) {
      return "Aadya Nagar is an exclusive residential plotted development located beside Pallam Peta Junction on the Yerpedu – Venkatagiri Road, featuring TUDA approval and direct connectivity to the Mumbai National Highway.";
    }

    if (q.includes('chakrapani') || q.includes('om sai') || q.includes('balasa')) {
      return "Om Sai Balasa Chakrapani Nagar is a DTCP approved 20-acre layout on the Yerpedu–Venkatagiri Road (Vampalli Village), close to IIT Tirupati and IISER Tirupati. It includes 40ft/33ft roads, water, drainage, a temple, and children's park.";
    }

    if (q.includes('cloud city') || q.includes('resort')) {
      return "Cloud City Resorts is a 20-acre development on the Yerpedu–Venkatagiri Route featuring both Residential Plots and Farm House Plots amidst scenic hills and expanding SEZ corridors.";
    }

    if (q.includes('highway city')) {
      return "Highway City offers premium villa plots directly on the Yerpedu–Mumbai National Highway, with planned infrastructure, green parks, and close proximity to the proposed IT Hub.";
    }

    if (q.includes('orchid') || q.includes('orchids bloom')) {
      return "Orchids Bloom is a lakeside luxury villa plot development at Anjimedu, Yerpedu Mandal near Tirupati, offering tranquil waterfront living and swift airport access.";
    }

    // Locations query
    if (q.includes('where') || q.includes('location') || q.includes('located') || q.includes('city') || q.includes('tirupati')) {
      return "Our projects are located in Tirupati's fastest-growing sectors: the Yerpedu–Venkatagiri Road, Yerpedu–Mumbai National Highway corridor, and Anjimedu, close to IIT Tirupati and Tirupati Airport.";
    }

    // Contact info
    if (q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('number') || q.includes('reach') || q.includes('email') || q.includes('office')) {
      return "You can contact Green Home Developers by phone at 7702045555, email at info@greenhomedevelopers.co.in, or visit our office at: Opp. Care Plus Eye Hospital, 2nd Floor, Yashoda Classic, M.R.Pally, New Balaji Colony, Tirupati - 517502.";
    }

    // Approvals
    if (q.includes('approval') || q.includes('tuda') || q.includes('dtcp') || q.includes('legal') || q.includes('approved')) {
      return "All our layouts are TUDA and DTCP approved with 100% clear legal titles, approved layout plans, and full registration readiness.";
    }

    // About Us
    if (q.includes('about') || q.includes('who are') || q.includes('history') || q.includes('experience')) {
      return "Green Home Developers is a trusted real-estate company in Tirupati with over 15 years of excellence and 25+ completed projects. Our motto is: 'Building Better Homes, Creating Better Lives'.";
    }

    // Testimonials
    if (q.includes('review') || q.includes('reviews') || q.includes('feedback') || q.includes('customer') || q.includes('testimonial')) {
      return "Our customers highlight our transparent legal documentation, fast appreciation, on-time development, and dependable site support. Over 3,500 families have chosen Green Home Developers.";
    }

    // Strict Fallback (Mandatory Rule #3: If requested information is not available on website, reply with exact fallback)
    return "Sorry, I couldn't find that information on the Green Home Developers website. Please contact our team for more details.";
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural AI response delay
    setTimeout(() => {
      const botReply = processQuery(query);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Circular Bot Button */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9998
      }}>
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="floating-bot-pulse"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'linear-gradient(135deg, #15803d 0%, #052e16 100%)',
              color: '#ffffff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
              padding: '0.85rem 1.4rem',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(21, 128, 61, 0.4)',
              fontWeight: 700,
              fontSize: '0.95rem',
              transition: 'all 0.3s ease'
            }}
            aria-label="Open Green Home AI Assistant"
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)'
            }}>
              🤖
            </span>
            <span>AI Assistant</span>
          </button>
        )}
      </div>

      {/* Modern Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: 'clamp(320px, 92vw, 400px)',
          height: 'clamp(520px, 80vh, 600px)',
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999,
          overflow: 'hidden',
          animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #15803d 0%, #052e16 100%)',
            color: '#ffffff',
            padding: '1.25rem 1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                🤖
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.2 }}>
                  Green Home AI Assistant
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#86efac', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                  How can I help you?
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close Assistant"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  maxWidth: '82%',
                  padding: '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.sender === 'user' ? '#15803d' : '#ffffff',
                  color: msg.sender === 'user' ? '#ffffff' : '#1e293b',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  border: msg.sender === 'user' ? 'none' : '1px solid #e2e8f0',
                  fontSize: '0.9rem',
                  lineHeight: 1.55
                }}>
                  {msg.text}
                  <div style={{
                    fontSize: '0.68rem',
                    color: msg.sender === 'user' ? 'rgba(255,255,255,0.7)' : '#94a3b8',
                    textAlign: 'right',
                    marginTop: '0.3rem'
                  }}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '0.65rem 1rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  fontSize: '0.82rem',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Sparkles size={14} color="#15803d" /> AI Assistant is typing...
                </div>
              </div>
            )}

            {/* Quick Suggested Questions Pill Buttons */}
            {messages.length <= 3 && (
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Suggested Questions:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {suggestedQuestions.map((sq, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(sq)}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '12px',
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.82rem',
                        color: '#15803d',
                        fontWeight: 600,
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#15803d';
                        e.currentTarget.style.background = '#ecfdf5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.background = '#ffffff';
                      }}
                    >
                      💬 {sq}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Enquiry Navigator banner inside bot */}
          <div style={{
            background: '#ecfdf5',
            padding: '0.55rem 1rem',
            borderTop: '1px solid #d1fae5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.78rem',
            color: '#065f46'
          }}>
            <span>Want to book a site visit?</span>
            <a
              href="#enquiry"
              onClick={() => {
                setIsOpen(false);
                if (onNavigateToEnquiry) onNavigateToEnquiry();
              }}
              style={{ fontWeight: 700, color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
            >
              Go to Enquiry <ArrowRight size={12} />
            </a>
          </div>

          {/* Input Box Footer */}
          <div style={{
            padding: '0.85rem 1rem',
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            gap: '0.65rem'
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask anything about our projects or services..."
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '9999px',
                border: '1px solid #cbd5e1',
                fontSize: '0.88rem',
                outline: 'none'
              }}
              onFocus={(e) => (e.target.style.borderColor = '#15803d')}
              onBlur={(e) => (e.target.style.borderColor = '#cbd5e1')}
            />
            <button
              onClick={() => handleSend()}
              style={{
                background: 'linear-gradient(135deg, #22c55e, #15803d)',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 3px 10px rgba(22, 101, 52, 0.3)'
              }}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
