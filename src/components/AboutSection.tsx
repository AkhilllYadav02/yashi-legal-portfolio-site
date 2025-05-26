
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Empowering Legal Awareness Through 
            <span className="gold-accent"> Research & Advocacy</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Yashi Chaturvedi, a second-year LLB student at [Your Law School Name], deeply passionate about law, social justice, and research. My journey so far includes moot courts, internships, legal writing, and academic projects — all helping me build a strong foundation in legal analysis and public policy.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm committed to contributing meaningfully to the legal ecosystem and continuing to learn from every experience. My focus areas include constitutional law, criminal law, and legal research methodologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">50+</div>
                <div className="text-gray-600">Cases Researched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">3</div>
                <div className="text-gray-600">Internships Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">15+</div>
                <div className="text-gray-600">Articles Written</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">2</div>
                <div className="text-gray-600">Moot Court Wins</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    ⚖️
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-legal-navy">Legal Philosophy</h3>
                </div>
                <p className="text-gray-700">
                  Believing in the power of law to create positive social change and protect fundamental rights.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    📚
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-legal-navy">Research Focus</h3>
                </div>
                <p className="text-gray-700">
                  Specializing in constitutional law, criminal justice, and legal policy research with academic rigor.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    🎯
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-legal-navy">Future Goals</h3>
                </div>
                <p className="text-gray-700">
                  Aspiring to become a practicing advocate with focus on public interest litigation and legal advocacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
