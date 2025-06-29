'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Download, 
  ExternalLink,
  Award,
  TrendingUp,
  Users,
  Globe,
  Newspaper,
  Camera,
  FileText,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: 'Reservoir Raises $50M Series B to Accelerate Global Expansion',
      date: '2024-12-15',
      category: 'Funding',
      excerpt: 'Leading travel technology company secures funding from top-tier investors to expand into new markets and enhance AI-powered booking platform.',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Reservoir Launches Revolutionary Blockchain Payment Integration',
      date: '2024-11-28',
      category: 'Product',
      excerpt: 'First major hotel booking platform to accept cryptocurrency payments through secure Flutterwave integration, opening new possibilities for digital nomads.',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Reservoir Named "Best Travel App 2024" by TechCrunch',
      date: '2024-11-10',
      category: 'Awards',
      excerpt: 'Recognition for innovative user experience and cutting-edge technology that\'s transforming how people discover and book hotels worldwide.',
      readTime: '2 min read'
    },
    {
      id: 4,
      title: 'Reservoir Surpasses 10 Million Active Users Milestone',
      date: '2024-10-22',
      category: 'Growth',
      excerpt: 'Platform achieves significant user growth milestone, with 500% year-over-year increase in bookings across 180+ countries.',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'Partnership Announcement: Reservoir Teams with Luxury Hotel Chains',
      date: '2024-09-18',
      category: 'Partnership',
      excerpt: 'Strategic partnerships with leading luxury hotel brands expand premium accommodation options for discerning travelers.',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Reservoir Introduces AI-Powered Personalized Recommendations',
      date: '2024-08-30',
      category: 'Technology',
      excerpt: 'Machine learning algorithms now provide hyper-personalized hotel recommendations based on user preferences and travel patterns.',
      readTime: '4 min read'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logos',
      description: 'High-resolution logos in various formats',
      type: 'ZIP',
      size: '2.4 MB'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      type: 'ZIP',
      size: '8.1 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'App interface and feature demonstrations',
      type: 'ZIP',
      size: '12.3 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics and company information',
      type: 'PDF',
      size: '1.2 MB'
    }
  ];

  const awards = [
    {
      title: 'Best Travel App 2024',
      organization: 'TechCrunch',
      year: '2024',
      description: 'Recognized for innovative user experience and technology'
    },
    {
      title: 'Fastest Growing Travel Tech',
      organization: 'Forbes',
      year: '2024',
      description: '500% year-over-year growth in user base'
    },
    {
      title: 'Innovation in Hospitality',
      organization: 'Travel Weekly',
      year: '2024',
      description: 'Pioneering blockchain payments in travel industry'
    },
    {
      title: 'Best Workplace Culture',
      organization: 'Glassdoor',
      year: '2024',
      description: '4.9/5 employee satisfaction rating'
    }
  ];

  const mediaContacts = [
    {
      name: 'Sarah Mitchell',
      title: 'Head of Communications',
      email: 'press@reservoir.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'David Chen',
      title: 'PR Manager',
      email: 'media@reservoir.com',
      phone: '+1 (555) 234-5678'
    }
  ];

  const stats = [
    { number: '10M+', label: 'Active Users' },
    { number: '50K+', label: 'Partner Hotels' },
    { number: '180+', label: 'Countries' },
    { number: '$50M', label: 'Series B Funding' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, announcements, and milestones from Reservoir. 
              Access our media kit, press releases, and connect with our communications team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Newspaper className="h-4 w-4 mr-2" />
                Latest News
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="h-4 w-4 mr-2" />
                Industry Recognition
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="h-4 w-4 mr-2" />
                Growth Milestones
              </Badge>
            </div>
            <Button size="lg" variant="secondary" className="mr-4">
              Download Media Kit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Press Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reservoir by the Numbers
            </h2>
            <p className="text-gray-600">
              Key metrics that showcase our growth and impact in the travel industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Press Releases
            </h2>
            <p className="text-gray-600">
              Stay informed about Reservoir's latest developments, partnerships, and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{release.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{release.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-gray-600">
              Industry accolades that recognize our innovation and excellence in travel technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {award.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {award.organization} • {award.year}
                      </p>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Kit
            </h2>
            <p className="text-gray-600">
              Download high-quality assets, logos, and company information for your stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {item.type === 'ZIP' ? (
                      <Camera className="h-8 w-8 text-blue-600" />
                    ) : (
                      <FileText className="h-8 w-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Contacts
            </h2>
            <p className="text-gray-600">
              Get in touch with our communications team for interviews, quotes, and additional information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{contact.title}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <span className="mr-2">📞</span>
                      <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our press newsletter to receive the latest news and announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">Reservoir</span>
              </div>
              <p className="text-gray-400">
                Your gateway to exceptional hotel experiences worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Reservoir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}