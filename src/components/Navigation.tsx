
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', isSection: true },
    { name: 'Education', href: '#education', isSection: true },
    { name: 'Experience', href: '#experience', isSection: true },
    { name: 'Templates', href: '/templates', isSection: false },
    { name: 'Blog', href: '#blog', isSection: true },
    { name: 'Contact', href: '#contact', isSection: true }
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isSection) {
      if (isHomePage) {
        scrollToSection(item.href);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(item.href), 100);
      }
    } else {
      navigate(item.href);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (isHomePage) {
      scrollToSection('#contact');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('#contact'), 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            className="font-playfair font-bold text-lg sm:text-xl text-legal-navy hover:text-legal-gold transition-colors"
          >
            Yashi Chaturvedi
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-gray-700 hover:text-legal-navy transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={handleContactClick}
              className="legal-gradient text-white hover:opacity-90 text-sm lg:text-base px-4 lg:px-6"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-legal-navy hover:bg-gray-50 rounded-md font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={handleContactClick}
              className="w-full mt-2 legal-gradient text-white"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
