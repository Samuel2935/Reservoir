'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Heart,
  Coffee,
  Laptop,
  Plane,
  DollarSign,
  Award,
  ArrowRight,
  Building
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Plane,
      title: 'Travel Perks',
      description: 'Free hotel stays, travel allowances, and exclusive discounts worldwide'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Market-leading salaries, equity options, and performance bonuses'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy'
    },
    {
      icon: Laptop,
      title: 'Latest Tech',
      description: 'Top-tier equipment, software licenses, and learning resources'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Career development programs, mentorship, and conference attendance'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Senior',
      description: 'Build scalable booking systems and user experiences that delight millions of travelers.',
      requirements: ['5+ years React/Node.js', 'Microservices architecture', 'AWS/GCP experience'],
      salary: '$150k - $200k'
    },
    {
      id: 2,
      title: 'Product Manager - Mobile',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      experience: 'Mid-level',
      description: 'Lead mobile product strategy and drive user engagement across iOS and Android platforms.',
      requirements: ['3+ years product management', 'Mobile app experience', 'Data-driven mindset'],
      salary: '$130k - $170k'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Mid-level',
      description: 'Create beautiful, intuitive interfaces that make hotel booking effortless and enjoyable.',
      requirements: ['4+ years UX/UI design', 'Figma expertise', 'Travel industry experience preferred'],
      salary: '$110k - $140k'
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Data',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Senior',
      description: 'Build ML models for personalized recommendations and dynamic pricing optimization.',
      requirements: ['PhD/MS in relevant field', 'Python/R expertise', 'ML/AI experience'],
      salary: '$160k - $220k'
    },
    {
      id: 5,
      title: 'Partnership Manager',
      department: 'Business',
      location: 'London, UK',
      type: 'Full-time',
      experience: 'Mid-level',
      description: 'Expand our hotel network across Europe and build strategic partnerships.',
      requirements: ['5+ years partnership/BD', 'Travel industry connections', 'Multilingual preferred'],
      salary: '£80k - £110k'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: 'Senior',
      description: 'Scale our infrastructure to handle millions of bookings with 99.99% uptime.',
      requirements: ['Kubernetes/Docker', 'CI/CD pipelines', 'Cloud security'],
      salary: '$140k - $180k'
    },
    {
      id: 7,
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Singapore',
      type: 'Full-time',
      experience: 'Entry-level',
      description: 'Ensure exceptional customer experiences and drive user satisfaction in APAC.',
      requirements: ['2+ years customer success', 'Excellent communication', 'Travel industry knowledge'],
      salary: 'S$70k - S$90k'
    },
    {
      id: 8,
      title: 'Marketing Analyst',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      experience: 'Entry-level',
      description: 'Analyze marketing performance and optimize campaigns across digital channels.',
      requirements: ['Google Analytics', 'SQL knowledge', 'Marketing automation tools'],
      salary: '$80k - $100k'
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Data', 'Business', 'Support', 'Marketing'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const stats = [
    { number: '500+', label: 'Team Members' },
    { number: '25+', label: 'Countries' },
    { number: '4.9/5', label: 'Glassdoor Rating' },
    { number: '95%', label: 'Employee Satisfaction' }
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
              Join the Future of Travel
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Help us revolutionize how people discover and book hotels worldwide. 
              Join a team of passionate innovators building the next generation of travel technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="h-4 w-4 mr-2" />
                500+ Team Members
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TrendingUp className="h-4 w-4 mr-2" />
                Fastest Growing Travel Tech
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="h-4 w-4 mr-2" />
                Best Places to Work 2024
              </Badge>
            </div>
            <Button size="lg" variant="secondary" className="mr-4">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Work at Reservoir?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can take care of our customers. 
              Here's what makes Reservoir a great place to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🚀 Innovation First</h3>
                  <p className="text-gray-600">We encourage bold ideas and give everyone the freedom to experiment and innovate.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🌍 Global Mindset</h3>
                  <p className="text-gray-600">Our diverse team spans 25+ countries, bringing unique perspectives to everything we build.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🤝 Collaboration</h3>
                  <p className="text-gray-600">We believe the best solutions come from working together across teams and disciplines.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">📈 Growth Mindset</h3>
                  <p className="text-gray-600">We invest in our people's development and celebrate both successes and learning opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join our team and help shape the future of travel technology. 
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="capitalize"
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{job.salary}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No positions in {selectedDepartment}
              </h3>
              <p className="text-gray-600 mb-4">
                Check back soon or explore other departments.
              </p>
              <Button variant="outline" onClick={() => setSelectedDepartment('all')}>
                View All Positions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. 
            Send us your resume and let us know how you'd like to contribute to Reservoir's mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Join Our Talent Network
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