
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center legal-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Yashi Chaturvedi
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl font-light mb-2 text-legal-cream">
            LLB Student | Legal Research Enthusiast | Future Advocate
          </p>
        </div>
        
        <div className="mb-12">
          <p className="text-lg md:text-xl font-light text-legal-cream/90 max-w-2xl mx-auto leading-relaxed">
            "Committed to justice, research, and making an impact in the legal field."
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('#experience')}
            className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-8 py-3 text-lg hover-lift"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('#contact')}
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-legal-navy px-8 py-3 text-lg hover-lift"
          >
            Let's Connect
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('#about')} className="text-white/70 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
