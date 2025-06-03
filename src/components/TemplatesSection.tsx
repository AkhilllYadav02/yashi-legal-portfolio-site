
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, AlertCircle, Scale, Home, Briefcase, Heart, DollarSign, GraduationCap } from 'lucide-react';

const TemplatesSection = () => {
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

  return (
    <section id="templates" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Legal Templates & 
            <span className="gold-accent"> Documents</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Access professionally crafted legal templates for various purposes. These templates are designed to help you understand legal document structures and common clauses.
          </p>
          
          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="font-semibold text-yellow-800">Important Disclaimer</span>
            </div>
            <p className="text-sm text-yellow-700">
              These templates are for reference and educational purposes only. They should not substitute professional legal advice. 
              Always consult with a qualified lawyer before using any legal document for official purposes.
            </p>
          </div>
        </div>

        {/* Templates Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {templateCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 text-xs md:text-sm"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {templateCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <FileText className={`h-5 w-5 ${category.color}`} />
                        {template.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
                            className="flex items-center gap-1"
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
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="w-16 h-16 legal-gradient rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              📝
            </div>
            <h3 className="font-playfair text-xl font-semibold text-legal-navy mb-2">Easy to Use</h3>
            <p className="text-gray-600">Simple, well-structured templates that are easy to understand and customize.</p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-16 h-16 legal-gradient rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              ⚖️
            </div>
            <h3 className="font-playfair text-xl font-semibold text-legal-navy mb-2">Legally Sound</h3>
            <p className="text-gray-600">Templates based on current legal practices and common law principles.</p>
          </Card>
          
          <Card className="text-center p-6 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 legal-gradient rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              🔄
            </div>
            <h3 className="font-playfair text-xl font-semibold text-legal-navy mb-2">Regular Updates</h3>
            <p className="text-gray-600">Templates are regularly reviewed and updated to reflect current legal standards.</p>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-legal-navy text-white rounded-lg p-8">
            <h3 className="font-playfair text-2xl font-bold mb-4">Need Custom Legal Documents?</h3>
            <p className="text-legal-cream mb-6">
              Looking for personalized legal documents or advice? Get in touch for professional legal consultation.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold px-8 py-3"
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
