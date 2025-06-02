
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Survey Specialist",
      organization: "Gujarat Police - Garima Project",
      location: "Gandhinagar",
      period: "Jan 2024 - Apr 2024",
      type: "Internship",
      responsibilities: [
        "Conducted comprehensive survey on women's safety across Gujarat state",
        "Completed 80 survey forms through direct interaction with women",
        "Assessed police-community coordination for women's safety",
        "Gathered valuable insights on women's perception of safety and security"
      ]
    },
    {
      title: "Legal Intern",
      organization: "Gujarat State Human Rights Commission",
      location: "Gandhinagar", 
      period: "Jun 2023 - Sep 2023",
      type: "Internship",
      responsibilities: [
        "Visited key institutions: central jail, district court, police station, cyber cell",
        "Gained exposure to Trinetra and Women and Security Cell operations",
        "Enhanced capabilities in risk management and problem-solving",
        "Developed comprehensive understanding of justice and law enforcement systems"
      ]
    },
    {
      title: "Education Volunteer & Teacher",
      organization: "Akar Foundation",
      location: "Gandhinagar",
      period: "Oct 2022 - May 2023", 
      type: "Social Work",
      responsibilities: [
        "Taught students in underprivileged slum areas lacking educational access",
        "Conducted field visits to understand educational challenges",
        "Developed strong communication and interaction skills",
        "Learned Gujarati language from students during service"
      ]
    },
    {
      title: "Social Worker & Team Leader",
      organization: "Social Management Foundation",
      location: "Gandhinagar",
      period: "Apr 2022 - Sep 2022",
      type: "Internship", 
      responsibilities: [
        "Led team while enhancing communication and interaction skills",
        "Empowered others through knowledge sharing and collaborative learning",
        "Provided teaching and counseling services",
        "Organized seminar on women's education and empowerment"
      ]
    }
  ];

  const projects = [
    {
      title: "Access to Justice",
      organization: "CEC (Consortium for Educational Communication)",
      period: "Jan 2024 - Feb 2024",
      description: "6-week comprehensive course providing foundational knowledge about justice and law - essential basics every individual should understand"
    },
    {
      title: "Understanding Gender and Law", 
      organization: "IGNOU (Indira Gandhi National Open University)",
      period: "Jan 2023 - Mar 2023",
      description: "8-week specialized course focusing on gender empowerment, security, equality, and legal frameworks for gender justice"
    }
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
            Practical experience in legal systems, social work, and community engagement across Gujarat
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
                    <p className="text-gray-600 mb-1">{exp.location}</p>
                    <p className="text-legal-gold font-semibold">{exp.period}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Badge className={exp.type === 'Internship' ? 'bg-legal-navy text-white' : 'bg-legal-gold text-white'}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-legal-navy mb-3">Key Responsibilities & Achievements</h4>
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

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-6 text-center">
            Academic Projects & Specialized Courses
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-legal-navy mb-2">{project.title}</h4>
                  <p className="text-legal-gold font-semibold mb-2">{project.organization}</p>
                  <p className="text-gray-600 text-sm mb-3">{project.period}</p>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-6 text-center">
            Extracurricular Activities
          </h3>
          
          <Card className="hover-lift">
            <CardContent className="p-6">
              <h4 className="font-playfair text-xl font-semibold text-legal-navy mb-4">Mental Health Awareness Seminar</h4>
              <p className="text-gray-700 mb-4">
                Led a 5-member team in organizing a comprehensive mental health seminar focused on the present generation. 
                The event featured multiple engagement formats to maximize impact and awareness.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                    🎤
                  </div>
                  <h5 className="font-semibold text-legal-navy mb-1">Presentation</h5>
                  <p className="text-gray-600 text-sm">Organizational presentation on mental health</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                    🎭
                  </div>
                  <h5 className="font-semibold text-legal-navy mb-1">Street Play</h5>
                  <p className="text-gray-600 text-sm">Nukkad Natak for community awareness</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-legal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                    ❓
                  </div>
                  <h5 className="font-semibold text-legal-navy mb-1">Q&A Session</h5>
                  <p className="text-gray-600 text-sm">Interactive engagement with participants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-semibold text-legal-navy mb-2">Professional Skills</h4>
              <p className="text-gray-600 text-sm">MS Office Suite, Report Writing, Content Marketing, English Proficiency</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-semibold text-legal-navy mb-2">Field Experience</h4>
              <p className="text-gray-600 text-sm">Community Surveys, Teaching, Counseling, Team Leadership</p>
            </CardContent>
          </Card>
          
          <Card className="hover-lift text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold text-legal-navy mb-2">Institutional Exposure</h4>
              <p className="text-gray-600 text-sm">Courts, Police Stations, Human Rights Commission, NGOs</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
