
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Prof. Anjali Sharma",
      title: "Faculty, [Law School]",
      content: "Yashi is diligent, detail-oriented, and always brings thoughtful legal insights to discussions. A promising law student with a bright future.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    {
      name: "Adv. Rajesh Kumar",
      title: "Senior Advocate, High Court",
      content: "During her internship, Yashi demonstrated exceptional research skills and legal acumen. Her work on case analysis was particularly impressive.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    },
    {
      name: "Dr. Priya Mehta",
      title: "Legal Aid Director",
      content: "Yashi's dedication to legal awareness and helping underprivileged communities is commendable. She has a natural ability to explain complex legal concepts simply.",
      videoId: "dQw4w9WgXcQ" // Replace with actual video ID
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-legal-navy mb-4 lg:mb-6">
            What Others Say 
            <span className="gold-accent"> About Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Testimonials from mentors, professors, and colleagues who have witnessed my legal journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift animate-scale-in">
              <CardContent className="p-4 lg:p-6">
                <div className="text-center mb-4 lg:mb-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-legal-gradient rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-xl mx-auto mb-3 lg:mb-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-legal-navy text-sm lg:text-base">{testimonial.name}</h3>
                  <p className="text-xs lg:text-sm text-gray-600">{testimonial.title}</p>
                </div>
                
                <blockquote className="text-gray-700 mb-4 lg:mb-6 italic text-sm lg:text-base">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Video Testimonial */}
                <div className="mb-4 lg:mb-6">
                  <div className="relative w-full h-32 lg:h-40 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${testimonial.videoId}`}
                      title={`${testimonial.name} Video Testimonial`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white text-sm lg:text-base"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${testimonial.videoId}`, '_blank')}
                >
                  📹 Watch Full Testimonial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 lg:mt-12 text-center px-4">
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
            These testimonials reflect my commitment to excellence in legal studies and practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="legal-gradient text-white hover:opacity-90 text-sm lg:text-base">
              Request a Recommendation
            </Button>
            <Button variant="outline" className="text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white text-sm lg:text-base">
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
