
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Why Legal Awareness is the Need of the Hour",
      excerpt: "Exploring the importance of legal literacy in empowering citizens and strengthening democratic institutions...",
      date: "March 2024",
      category: "Legal Awareness",
      readTime: "5 min read"
    },
    {
      title: "Case Analysis: Kesavananda Bharati v. State of Kerala",
      excerpt: "A comprehensive analysis of the landmark judgment that established the basic structure doctrine...",
      date: "February 2024",
      category: "Case Analysis",
      readTime: "8 min read"
    },
    {
      title: "Internship Diaries: My First Courtroom Experience",
      excerpt: "Reflections on observing legal proceedings and understanding the practical aspects of litigation...",
      date: "January 2024",
      category: "Personal Experience",
      readTime: "4 min read"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-legal-navy mb-6">
            Legal Perspectives by 
            <span className="gold-accent"> Yashi</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing insights on current legal issues, case analyses, and personal experiences in the legal field
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover-lift animate-scale-in group cursor-pointer">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="bg-legal-cream text-legal-navy text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-legal-navy mb-3 group-hover:text-legal-gold transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button variant="outline" className="text-legal-navy border-legal-navy hover:bg-legal-navy hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Want to read more of my legal insights and analyses?
          </p>
          <Button className="legal-gradient text-white hover:opacity-90 px-8 py-3">
            Visit My Blog
          </Button>
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8">
          <h3 className="font-playfair text-2xl font-bold text-legal-navy mb-6 text-center">
            Popular Topics I Write About
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4">
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
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover-lift">
                <span className="text-legal-navy font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
