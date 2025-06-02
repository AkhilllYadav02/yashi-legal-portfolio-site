
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
            Building expertise through law and social work education with strong academic performance
          </p>
        </div>
        
        <div className="grid gap-8">
          <Card className="hover-lift animate-scale-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-2">
                    Bachelor of Laws (LL.B)
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">University of Lucknow</p>
                  <p className="text-legal-gold font-semibold">2024 – 2026</p>
                  <p className="text-gray-600 mt-1">CGPA: 6.85/10</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge className="bg-legal-navy text-white text-sm px-3 py-1">
                    Currently Pursuing
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
                      Gender and Law
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Access to Justice
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Projects Completed</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Access to Justice (CEC Course)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Understanding Gender and Law (IGNOU)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Mental Health Awareness Seminar
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-scale-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-2">
                    Bachelor of Arts (B.A.) - Social Work
                  </h3>
                  <p className="text-lg text-gray-700 mb-2">Central University of Gujarat</p>
                  <p className="text-legal-gold font-semibold">2021 – 2024</p>
                  <p className="text-gray-600 mt-1">CGPA: 8.34/10</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge className="bg-legal-gold text-white text-sm px-3 py-1">
                    Completed
                  </Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Specializations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Community Development
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Women's Empowerment
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Education Access
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Mental Health Advocacy
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Field Experience</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Teaching in Underprivileged Areas
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Community Survey Research
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                      Team Leadership & Counseling
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-scale-in">
            <CardContent className="p-8">
              <h3 className="font-playfair text-xl font-bold text-legal-navy mb-4">Secondary Education</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2">Senior Secondary (XII) - Science</h4>
                  <p className="text-gray-700">Children School, Azamgarh</p>
                  <p className="text-legal-gold font-semibold">2021 - 69.00%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-legal-navy mb-2">Secondary (X)</h4>
                  <p className="text-gray-700">Cross Belly International School, Azamgarh</p>
                  <p className="text-legal-gold font-semibold">2019 - 79.00%</p>
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
                <div className="text-4xl mb-4">💼</div>
                <h4 className="font-semibold text-legal-navy mb-2">Professional Skills</h4>
                <p className="text-gray-600 text-sm">MS Office Suite, Report Writing, Content Marketing, English Proficiency</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="font-semibold text-legal-navy mb-2">Social Work Skills</h4>
                <p className="text-gray-600 text-sm">Community Engagement, Counseling, Team Leadership, Field Research</p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="font-semibold text-legal-navy mb-2">Legal Knowledge</h4>
                <p className="text-gray-600 text-sm">Gender Law, Access to Justice, Constitutional Principles, Human Rights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
