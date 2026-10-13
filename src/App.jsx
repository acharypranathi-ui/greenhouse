import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import EnquiryForm from './components/EnquiryForm';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';

export default function App() {
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState('Aadya Nagar');

  const handleSelectProject = (projectName) => {
    setSelectedProjectForEnquiry(projectName);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Services Section */}
      <Services />

      {/* 5. Featured Projects Section */}
      <FeaturedProjects onSelectProject={handleSelectProject} />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Gallery Section */}
      <Gallery />

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Enquiry Form Section */}
      <EnquiryForm prefilledProject={selectedProjectForEnquiry} />

      {/* 10. Call To Action Section */}
      <CallToAction />

      {/* 11. Footer Section */}
      <Footer />

      {/* 12. Floating AI Assistant Chatbot */}
      <AiChatbot onNavigateToEnquiry={() => {}} />
    </div>
  );
}
