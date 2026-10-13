import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import HomeBlogSection from './components/HomeBlogSection';
import EnquiryForm from './components/EnquiryForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';
import BlogListingPage from './components/BlogListingPage';
import BlogArticlePage from './components/BlogArticlePage';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'blog', 'article'
  const [selectedArticleId, setSelectedArticleId] = useState('digital-marketing-strategy-real-estate');
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState('Aadya Nagar');

  // Handle URL hash changes or browser history back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog') {
        setCurrentView('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#article')) {
        setCurrentView('article');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#hero' || hash === '' || hash === '#home') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view, articleId = null) => {
    if (articleId) setSelectedArticleId(articleId);
    setCurrentView(view);
    if (view === 'blog') {
      window.location.hash = '#blog';
    } else if (view === 'article') {
      window.location.hash = '#article-digital-marketing-strategy-real-estate';
    } else {
      window.location.hash = '#hero';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectName) => {
    setSelectedProjectForEnquiry(projectName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Sticky Navigation Bar with Blog item */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Conditional View Rendering */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <Hero />

          {/* About Us Section */}
          <AboutUs />

          {/* Services Section */}
          <Services />

          {/* Featured Projects Section */}
          <FeaturedProjects onSelectProject={handleSelectProject} />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Gallery Section */}
          <Gallery />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Real Estate Insights & Guides Section on Homepage */}
          <HomeBlogSection
            onNavigateToBlog={() => handleNavigate('blog')}
            onNavigateToArticle={(id) => handleNavigate('article', id)}
          />

          {/* Enquiry Form Section */}
          <EnquiryForm prefilledProject={selectedProjectForEnquiry} />

          {/* Call To Action Section */}
          <CallToAction />
        </>
      )}

      {currentView === 'blog' && (
        <BlogListingPage
          onSelectArticle={(id) => handleNavigate('article', id)}
          onNavigateHome={() => handleNavigate('home')}
        />
      )}

      {currentView === 'article' && (
        <BlogArticlePage
          onNavigateBack={() => handleNavigate('blog')}
          onNavigateHome={() => handleNavigate('home')}
          onNavigateToEnquiry={() => {
            handleNavigate('home');
            setTimeout(() => {
              const el = document.getElementById('enquiry');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        />
      )}

      {/* Footer Section with Blog link */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating AI Assistant Chatbot */}
      <AiChatbot onNavigateToEnquiry={() => {
        if (currentView !== 'home') handleNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('enquiry');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }} />
    </div>
  );
}
