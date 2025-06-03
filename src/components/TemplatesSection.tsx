import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, AlertCircle, Scale, Home, Briefcase, Heart, DollarSign, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TemplatesSection = () => {
  const navigate = useNavigate();

  const templateCategories = [
    {
      id: 'general',
      name: 'General Legal',
      icon: Scale,
      color: 'text-legal-navy',
      templates: [
        {
          name: 'Power of Attorney (POA)',
          description: 'Legal document granting someone authority to act on your behalf',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Affidavit Format',
          description: 'Sworn statement of facts for legal proceedings',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'NOC (No Objection Certificate)',
          description: 'Certificate stating no objection to a particular action',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Legal Notice Format',
          description: 'Formal notice for non-payment, defamation, or legal disputes',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Will Format',
          description: 'Document for distributing assets after death',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Declaration Format',
          description: 'For address proof, name change, and other declarations',
          formats: ['PDF', 'DOCX']
        }
      ]
    },
    {
      id: 'property',
      name: 'Property & Rental',
      icon: Home,
      color: 'text-blue-600',
      templates: [
        {
          name: 'Rent Agreement',
          description: 'Standard rental agreement for residential properties',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Lease Agreement',
          description: 'Long-term lease contract for properties',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Property Sale Agreement',
          description: 'Agreement for buying and selling property',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Property Gift Deed Format',
          description: 'Document for transferring property as a gift',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Leave and License Agreement',
          description: 'Agreement for temporary occupation of property',
          formats: ['PDF', 'DOCX']
        }
      ]
    },
    {
      id: 'business',
      name: 'Business & Startup',
      icon: Briefcase,
      color: 'text-green-600',
      templates: [
        {
          name: 'Non-Disclosure Agreement (NDA)',
          description: 'Protect confidential information in business relationships',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Partnership Agreement',
          description: 'Agreement between business partners',
          formats: ['PDF', 'DOCX']
        },
        {
          name: "Founder's Agreement",
          description: 'Agreement between startup co-founders',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Employment Offer Letter',
          description: 'Formal job offer letter template',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Freelancer Agreement',
          description: 'Contract for freelance work and services',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Consulting Agreement',
          description: 'Agreement for consulting services',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Service Level Agreement (SLA)',
          description: 'Define service standards and expectations',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Internship Agreement',
          description: 'Agreement for internship programs',
          formats: ['PDF', 'DOCX']
        }
      ]
    },
    {
      id: 'personal',
      name: 'Personal & Family',
      icon: Heart,
      color: 'text-pink-600',
      templates: [
        {
          name: 'Divorce Petition Template',
          description: 'Mutual consent divorce petition format',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Child Custody Agreement',
          description: 'Agreement for child custody arrangements',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Maintenance Agreement',
          description: 'Agreement for financial maintenance',
          formats: ['PDF', 'DOCX']
        }
      ]
    },
    {
      id: 'financial',
      name: 'Financial',
      icon: DollarSign,
      color: 'text-yellow-600',
      templates: [
        {
          name: 'Loan Agreement Format',
          description: 'Agreement for personal or business loans',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Promissory Note',
          description: 'Promise to pay a specific amount',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'EMI Agreement',
          description: 'Agreement for installment payments',
          formats: ['PDF', 'DOCX']
        }
      ]
    },
    {
      id: 'academic',
      name: 'Academic',
      icon: GraduationCap,
      color: 'text-purple-600',
      templates: [
        {
          name: 'Internship Certificate Template',
          description: 'Certificate format for completed internships',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Bonafide Certificate Format',
          description: 'Certificate confirming student status',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'Letter of Recommendation (LOR)',
          description: 'Template for academic recommendations',
          formats: ['PDF', 'DOCX']
        },
        {
          name: 'MOUs for Institutions',
          description: 'Memorandum of Understanding for collaborations',
          formats: ['PDF', 'DOCX']
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('general');

  const handleDownload = (templateName: string, format: string) => {
    // In a real implementation, this would trigger the actual download
    console.log(`Downloading ${templateName} in ${format} format`);
    // You would typically make an API call here to generate and download the template
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector('#contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-legal-navy mb-4 lg:mb-6">
            Legal Templates & 
            <span className="gold-accent"> Documents</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6 lg:mb-8 px-4">
            Access professionally crafted legal templates for various purposes. These templates are designed to help you understand legal document structures and common clauses.
          </p>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 lg:p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <AlertCircle className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800 text-sm lg:text-base">Important Disclaimer</span>
            </div>
            <p className="text-xs lg:text-sm text-yellow-700 leading-relaxed">
              These templates are for reference and educational purposes only. They should not substitute professional legal advice. 
              Always consult with a qualified lawyer before using any legal document for official purposes.
            </p>
          </div>
        </div>

        {/* Templates Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-6 lg:mb-8 h-auto">
            {templateCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm py-2 px-2 lg:px-4"
                >
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-center">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {templateCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.templates.map((template, index) => (
                  <Card key={index} className="hover-lift h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-start gap-2 text-base lg:text-lg">
                        <FileText className={`h-4 w-4 lg:h-5 lg:w-5 ${category.color} flex-shrink-0 mt-0.5`} />
                        <span className="leading-tight">{template.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {template.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {template.formats.map((format) => (
                          <Button
                            key={format}
                            onClick={() => handleDownload(template.name, format)}
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1 text-xs lg:text-sm"
                          >
                            <Download className="h-3 w-3" />
                            {format}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Information */}
        <div className="mt-12 lg:mt-16 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center p-4 lg:p-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 legal-gradient rounded-full flex items-center justify-center text-white text-xl lg:text-2xl mx-auto mb-3 lg:mb-4">
              📝
            </div>
            <h3 className="font-playfair text-lg lg:text-xl font-semibold text-legal-navy mb-2">Easy to Use</h3>
            <p className="text-gray-600 text-sm lg:text-base">Simple, well-structured templates that are easy to understand and customize.</p>
          </Card>
          
          <Card className="text-center p-4 lg:p-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 legal-gradient rounded-full flex items-center justify-center text-white text-xl lg:text-2xl mx-auto mb-3 lg:mb-4">
              ⚖️
            </div>
            <h3 className="font-playfair text-lg lg:text-xl font-semibold text-legal-navy mb-2">Legally Sound</h3>
            <p className="text-gray-600 text-sm lg:text-base">Templates based on current legal practices and common law principles.</p>
          </Card>
          
          <Card className="text-center p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 lg:w-16 lg:h-16 legal-gradient rounded-full flex items-center justify-center text-white text-xl lg:text-2xl mx-auto mb-3 lg:mb-4">
              🔄
            </div>
            <h3 className="font-playfair text-lg lg:text-xl font-semibold text-legal-navy mb-2">Regular Updates</h3>
            <p className="text-gray-600 text-sm lg:text-base">Templates are regularly reviewed and updated to reflect current legal standards.</p>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-legal-navy text-white rounded-lg p-6 lg:p-8 text-center">
            <h3 className="font-playfair text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Need Custom Legal Documents?</h3>
            <p className="text-legal-cream mb-4 lg:mb-6 text-sm lg:text-base leading-relaxed">
              Looking for personalized legal documents or advice? Get in touch for professional legal consultation.
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-6 lg:px-8 py-2 lg:py-3 text-sm lg:text-base"
            >
              Contact for Legal Advice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
