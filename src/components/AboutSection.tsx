
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Empowering Justice Through 
            <span className="gold-accent"> Law & Social Work</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Yashi Chaturvedi, an LLB student at University of Lucknow with a strong foundation in social work from Central University of Gujarat. My unique combination of legal education and social work experience has equipped me with the ability to approach legal issues through empathy, advocacy, and social justice.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey includes extensive fieldwork with Gujarat Police, Human Rights Commission, and various NGOs focused on women's safety, education access, and empowerment. I'm committed to using my academic background and practical experience to promote justice and social welfare.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">80+</div>
                <div className="text-gray-600">Survey Forms Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">4</div>
                <div className="text-gray-600">Major Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">2</div>
                <div className="text-gray-600">Specialized Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-navy mb-2">8.34</div>
                <div className="text-gray-600">BA Social Work CGPA</div>
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
                  Combining law and social work to promote justice through empathy, advocacy, and meaningful social change.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    👥
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-legal-navy">Social Impact Focus</h3>
                </div>
                <p className="text-gray-700">
                  Specializing in women's safety, education access, gender equality, and human rights advocacy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    🎯
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-legal-navy">Career Vision</h3>
                </div>
                <p className="text-gray-700">
                  Aspiring to bridge the gap between legal practice and social welfare through justice-oriented advocacy.
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
