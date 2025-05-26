
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding legal-gradient text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Let's Collaborate or 
            <span className="text-legal-cream"> Connect!</span>
          </h2>
          <p className="text-lg text-legal-cream/90 max-w-2xl mx-auto">
            Interested in legal research collaboration, internship opportunities, or just want to discuss law? I'd love to hear from you.
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
                    <div className="text-legal-cream/80">yashichaturvedi@email.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">💼</span>
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-legal-cream/80">linkedin.com/in/yashi-chaturvedi</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-legal-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-legal-navy font-bold">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-legal-cream/80">@yashi.law</div>
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
                  Internship Opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Legal Writing Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Moot Court Preparations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-legal-gold rounded-full mr-3"></div>
                  Legal Awareness Programs
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-navy font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
