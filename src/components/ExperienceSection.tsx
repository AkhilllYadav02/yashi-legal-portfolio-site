
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Legal Intern",
      organization: "[Firm/NGO Name]",
      period: "Month Year – Month Year",
      type: "Internship",
      responsibilities: [
        "Researched case laws and legal precedents",
        "Drafted legal notices and case summaries",
        "Attended client meetings and observed court proceedings",
        "Assisted in preparation of legal documents and contracts"
      ]
    },
    {
      title: "Legal Aid Volunteer",
      organization: "[Legal Aid Cell / NGO Name]",
      period: "Month Year – Month Year",
      type: "Volunteer",
      responsibilities: [
        "Assisted in spreading awareness of basic legal rights",
        "Participated in legal literacy camps",
        "Helped draft simple legal documents for underprivileged clients",
        "Conducted legal awareness sessions in local communities"
      ]
    }
  ];

  const certifications = [
    "Introduction to Indian Constitution – NALSAR (Coursera)",
    "Legal Drafting Workshop – [Institution Name]",
    "Basics of Contract Law – [Platform Name]",
    "Moot Court Training – [Law School / External Body]"
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Experience & 
            <span className="gold-accent"> Professional Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical legal experience through internships, volunteer work, and professional development
          </p>
        </div>
        
        <div className="grid gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-lift animate-fade-in">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-2">{exp.organization}</p>
                    <p className="text-legal-gold font-semibold">{exp.period}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Badge className={exp.type === 'Internship' ? 'bg-legal-navy text-white' : 'bg-legal-gold text-white'}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Key Responsibilities</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-legal-gold rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-6 text-center">
            Certifications & Training
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg hover-lift">
                <div className="w-3 h-3 bg-legal-gold rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-semibold text-legal-navy mb-2">Professional Tools</h4>
              <p className="text-gray-600 text-sm">SCC Online, Manupatra, Microsoft Office, Canva</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="font-semibold text-legal-navy mb-2">Legal Writing</h4>
              <p className="text-gray-600 text-sm">Blogs, Articles, Case Summaries, Legal Notices</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold text-legal-navy mb-2">Court Experience</h4>
              <p className="text-gray-600 text-sm">Moot Courts, Legal Proceedings, Client Meetings</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
