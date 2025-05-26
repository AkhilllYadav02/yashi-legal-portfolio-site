
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-legal-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 Yashi Chaturvedi. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-legal-gold transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-legal-gold transition-colors duration-200"
            >
              Terms of Use
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            Built with passion for justice and legal excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
