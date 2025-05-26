
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Prof. Anjali Sharma",
      title: "Faculty, [Law School]",
      content: "Yashi is diligent, detail-oriented, and always brings thoughtful legal insights to discussions. A promising law student with a bright future.",
      videoLink: "#"
    },
    {
      name: "Adv. Rajesh Kumar",
      title: "Senior Advocate, High Court",
      content: "During her internship, Yashi demonstrated exceptional research skills and legal acumen. Her work on case analysis was particularly impressive.",
      videoLink: "#"
    },
    {
      name: "Dr. Priya Mehta",
      title: "Legal Aid Director",
      content: "Yashi's dedication to legal awareness and helping underprivileged communities is commendable. She has a natural ability to explain complex legal concepts simply.",
      videoLink: "#"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            What Others Say 
            <span className="gold-accent"> About Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testimonials from mentors, professors, and colleagues who have witnessed my legal journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift animate-scale-in">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-legal-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-legal-navy">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <Button 
                  variant="outline" 
                  className="w-full text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white"
                  onClick={() => window.open(testimonial.videoLink, '_blank')}
                >
                  📹 Watch Video Testimonial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            These testimonials reflect my commitment to excellence in legal studies and practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="legal-gradient text-white hover:opacity-90">
              Request a Recommendation
            </Button>
            <Button variant="outline" className="text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white">
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
