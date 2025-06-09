
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="section-padding legal-gradient text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Collaborate or 
            <span className="text-legal-cream"> Connect!</span>
          </h2>
          <p className="text-lg text-legal-cream/90 max-w-2xl mx-auto">
            Interested in legal research collaboration, social work projects, internship opportunities, or just want to discuss law and social justice? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-legal-cream/80">vedicyashi2.o@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-legal-cream/80">+91 7985223774</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-legal-cream/80">Lucknow, Uttar Pradesh</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/yashi-chaturvedi-4b398a367/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-legal-cream/80 hover:text-legal-gold transition-colors underline"
                    >
                      Visit My LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-xl font-bold mb-4">Available For</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Legal Research Collaborations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Social Work Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Women's Safety & Empowerment Initiatives
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Educational Access Programs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Human Rights Advocacy
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Mental Health Awareness Campaigns
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  data-tally-src="https://tally.so/embed/3jqWqY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="276" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Send a Message"
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
