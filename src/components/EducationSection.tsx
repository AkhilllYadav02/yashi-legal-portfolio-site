
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Education & 
            <span className="gold-accent"> Academic Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a strong foundation in legal studies with focus on research and practical application
          </p>
        </div>
        
        <div className="grid gap-8">
          <Card className="hover-lift animate-scale-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-2">
                    Bachelor of Laws (LLB)
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">[University Name], [City]</p>
                  <p className="text-legal-gold font-semibold">2023 – Present</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge className="bg-legal-navy text-white text-sm px-3 py-1">
                    Currently in 2nd Year
                  </Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Focus Areas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Constitutional Law
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Criminal Law
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Legal Research Methodologies
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Contract Law & Commercial Law
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Extracurricular Activities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Member of Moot Court Society
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Active in Legal Aid Cell
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Law Review Editorial Board
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Student Legal Forum Organizer
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-6 text-center">
            Key Skills Developed
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="font-semibold text-legal-navy mb-2">Legal Research & Drafting</h4>
                <p className="text-gray-600 text-sm">Advanced skills in case law research, legal writing, and document drafting</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="font-semibold text-legal-navy mb-2">Case Analysis & Briefing</h4>
                <p className="text-gray-600 text-sm">Expertise in analyzing complex legal cases and preparing comprehensive briefs</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h4 className="font-semibold text-legal-navy mb-2">Public Speaking & Mooting</h4>
                <p className="text-gray-600 text-sm">Strong advocacy skills developed through moot court competitions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
