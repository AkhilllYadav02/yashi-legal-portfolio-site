
import React from 'react';
import Navigation from '@/components/Navigation';
import TemplatesSection from '@/components/TemplatesSection';
import Footer from '@/components/Footer';

const Templates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <TemplatesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Templates;
