
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewTemplates = () => {
    navigate('/templates');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center legal-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start order-first lg:order-last">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-legal-gold shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&h=800"
                  alt="Yashi Chaturvedi - LLB Student"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-legal-gold rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 lg:mb-6 leading-tight">
              Yashi Chaturvedi
            </h1>
            
            <div className="mb-4 lg:mb-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-2 text-legal-cream">
                LLB Student | Social Work Graduate | Justice Advocate
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-legal-cream/80">
                📧 vedicyashi2.o@gmail.com | 📱 +91 7985223774 | 📍 Lucknow
              </p>
            </div>
            
            <div className="mb-6 lg:mb-12">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-legal-cream/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                "Committed to using my academic background and practical experience to promote justice and social welfare through empathy, advocacy, and social justice."
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start items-center px-4 lg:px-0">
              <Button 
                onClick={() => scrollToSection('#experience')}
                className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-4 sm:px-6 lg:px-8 py-2 lg:py-3 text-sm sm:text-base lg:text-lg hover-lift w-full sm:w-auto"
              >
                View My Work
              </Button>
              <Button 
                onClick={handleViewTemplates}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-4 sm:px-6 lg:px-8 py-2 lg:py-3 text-sm sm:text-base lg:text-lg hover-lift w-full sm:w-auto"
              >
                Legal Templates
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline" 
                className="border-2 border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-navy px-4 sm:px-6 lg:px-8 py-2 lg:py-3 text-sm sm:text-base lg:text-lg hover-lift w-full sm:w-auto"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('#about')} className="text-white/70 hover:text-white">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
