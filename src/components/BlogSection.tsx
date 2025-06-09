
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Linkedin } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Why Legal Awareness is the Need of the Hour",
      excerpt: "Exploring the importance of legal literacy in empowering citizens and strengthening democratic institutions...",
      date: "March 2024",
      category: "Legal Awareness",
      readTime: "5 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/legal-awareness-need-hour-yashi-chaturvedi"
    },
    {
      title: "Case Analysis: Kesavananda Bharati v. State of Kerala",
      excerpt: "A comprehensive analysis of the landmark judgment that established the basic structure doctrine...",
      date: "February 2024",
      category: "Case Analysis",
      readTime: "8 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/kesavananda-bharati-analysis-yashi-chaturvedi"
    },
    {
      title: "Internship Diaries: My First Courtroom Experience",
      excerpt: "Reflections on observing legal proceedings and understanding the practical aspects of litigation...",
      date: "January 2024",
      category: "Personal Experience",
      readTime: "4 min read",
      linkedinUrl: "https://www.linkedin.com/pulse/internship-diaries-courtroom-experience-yashi-chaturvedi"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-legal-navy mb-4 lg:mb-6">
            Legal Perspectives by 
            <span className="gold-accent"> Yashi</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Sharing insights on current legal issues, case analyses, and personal experiences in the legal field
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12 px-4">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover-lift animate-scale-in group cursor-pointer">
              <CardContent className="p-4 lg:p-6">
                <div className="mb-4">
                  <Badge className="bg-legal-cream text-legal-navy text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center justify-between text-xs lg:text-sm text-gray-500 mt-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-lg lg:text-xl font-bold text-legal-navy mb-3 group-hover:text-legal-gold transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 lg:mb-6 line-clamp-3 text-sm lg:text-base">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                  <Button 
                    variant="outline" 
                    className="text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white flex items-center gap-2 text-sm lg:text-base"
                    onClick={() => window.open(post.linkedinUrl, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                    Read on LinkedIn
                  </Button>
                  <Button 
                    size="sm"
                    variant="ghost"
                    className="text-legal-gold hover:text-legal-navy text-sm lg:text-base"
                    onClick={() => window.open(post.linkedinUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center px-4">
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
            Want to read more of my legal insights and analyses?
          </p>
          <Button 
            className="legal-gradient text-white hover:opacity-90 px-6 lg:px-8 py-3 text-sm lg:text-base flex items-center gap-2 mx-auto"
            onClick={() => window.open('https://www.linkedin.com/in/yashi-chaturvedi-4b398a367/', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            Visit My LinkedIn Profile
          </Button>
        </div>
        
        <div className="mt-12 lg:mt-16 bg-white rounded-lg p-6 lg:p-8 mx-4">
          <h3 className="font-playfair text-xl lg:text-2xl font-bold text-legal-navy mb-4 lg:mb-6 text-center">
            Popular Topics I Write About
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              "Constitutional Law",
              "Criminal Justice",
              "Legal Research",
              "Case Analysis",
              "Legal Education",
              "Court Procedures",
              "Legal Rights",
              "Public Policy"
            ].map((topic, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 lg:p-4 text-center hover-lift">
                <span className="text-legal-navy font-medium text-sm lg:text-base">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
