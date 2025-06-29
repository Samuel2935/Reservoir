'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileText, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const lastUpdated = '2024-12-01';

  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: CheckCircle,
      content: `By accessing and using Reservoir's hotel booking platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      icon: Info,
      content: `
        • "Service" refers to the Reservoir hotel booking platform and related services
        • "User" refers to any individual or entity using our Service
        • "Hotel Partner" refers to accommodation providers listed on our platform
        • "Booking" refers to a reservation made through our Service
        • "Content" refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials
      `
    },
    {
      id: 'booking',
      title: '3. Booking Terms',
      icon: FileText,
      content: `
        3.1 Reservation Process: All bookings are subject to availability and confirmation by the hotel partner.
        
        3.2 Pricing: Prices displayed include all mandatory taxes and fees unless otherwise stated. Additional charges may apply for optional services.
        
        3.3 Payment: Payment is processed securely through our integrated payment partners including Flutterwave. We accept major credit cards, digital wallets, and cryptocurrency.
        
        3.4 Confirmation: You will receive a booking confirmation via email containing your reservation details and cancellation policy.
        
        3.5 Modifications: Changes to bookings are subject to hotel partner policies and may incur additional fees.
      `
    },
    {
      id: 'cancellation',
      title: '4. Cancellation & Refund Policy',
      icon: AlertTriangle,
      content: `
        4.1 Cancellation Terms: Each booking is subject to the specific cancellation policy of the hotel partner, which is clearly displayed during the booking process.
        
        4.2 Refund Processing: Eligible refunds will be processed within 5-10 business days to the original payment method.
        
        4.3 No-Show Policy: Failure to check-in without prior cancellation may result in full charges and no refund.
        
        4.4 Force Majeure: In cases of extraordinary circumstances (natural disasters, government restrictions, etc.), special cancellation terms may apply.
      `
    },
    {
      id: 'user-conduct',
      title: '5. User Conduct',
      icon: Shield,
      content: `
        5.1 Prohibited Activities: Users must not engage in fraudulent activities, provide false information, or violate any applicable laws.
        
        5.2 Account Security: Users are responsible for maintaining the confidentiality of their account credentials.
        
        5.3 Accurate Information: Users must provide accurate and complete information when making bookings.
        
        5.4 Compliance: Users must comply with hotel partner policies and local laws at their destination.
      `
    },
    {
      id: 'privacy',
      title: '6. Privacy & Data Protection',
      icon: Shield,
      content: `
        6.1 Data Collection: We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws.
        
        6.2 Data Security: We implement industry-standard security measures to protect your personal information.
        
        6.3 Third-Party Sharing: Personal data may be shared with hotel partners and payment processors as necessary to complete bookings.
        
        6.4 Marketing Communications: Users may opt-out of marketing communications at any time.
      `
    },
    {
      id: 'liability',
      title: '7. Limitation of Liability',
      icon: AlertTriangle,
      content: `
        7.1 Service Availability: While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability.
        
        7.2 Third-Party Services: We are not liable for the actions or services of hotel partners or other third-party providers.
        
        7.3 Damages: Our liability is limited to the amount paid for the specific booking in question.
        
        7.4 Indirect Damages: We are not liable for any indirect, incidental, or consequential damages.
      `
    },
    {
      id: 'intellectual-property',
      title: '8. Intellectual Property',
      icon: FileText,
      content: `
        8.1 Platform Content: All content on the Reservoir platform is protected by copyright and other intellectual property laws.
        
        8.2 User Content: Users retain ownership of content they submit but grant us a license to use it for service provision.
        
        8.3 Trademarks: Reservoir and related logos are trademarks of our company.
        
        8.4 Restrictions: Users may not reproduce, distribute, or create derivative works without permission.
      `
    },
    {
      id: 'dispute-resolution',
      title: '9. Dispute Resolution',
      icon: Info,
      content: `
        9.1 Customer Support: We encourage users to contact our support team first to resolve any issues.
        
        9.2 Mediation: Disputes may be resolved through mediation before pursuing legal action.
        
        9.3 Governing Law: These terms are governed by the laws of the jurisdiction where our company is incorporated.
        
        9.4 Jurisdiction: Any legal proceedings must be brought in the courts of our primary business location.
      `
    },
    {
      id: 'modifications',
      title: '10. Modifications to Terms',
      icon: Clock,
      content: `
        10.1 Updates: We reserve the right to modify these terms at any time with reasonable notice.
        
        10.2 Notification: Users will be notified of significant changes via email or platform notifications.
        
        10.3 Continued Use: Continued use of the service after modifications constitutes acceptance of the new terms.
        
        10.4 Version Control: The most current version of terms will always be available on our website.
      `
    }
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
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              These terms govern your use of Reservoir's hotel booking platform. 
              Please read them carefully to understand your rights and responsibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-4 w-4 mr-2" />
                Last Updated: {new Date(lastUpdated).toLocaleDateString()}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="h-4 w-4 mr-2" />
                Legally Binding
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <FileText className="h-4 w-4 mr-2" />
                Comprehensive Coverage
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Quick Navigation
            </h2>
            <p className="text-gray-600">Jump to specific sections</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors"
              >
                {section.title.split('.')[1]?.trim() || section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Important Notice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Welcome to Reservoir's Terms of Service. These terms constitute a legally binding agreement between you and Reservoir regarding your use of our hotel booking platform and related services.
              </p>
              <p className="text-gray-600 mb-4">
                By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you must not use our service.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Last Updated:</strong> {new Date(lastUpdated).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <Card key={section.id} id={section.id} className="scroll-mt-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <section.icon className="h-5 w-5 mr-3 text-blue-600" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {section.content.split('\n').map((paragraph, index) => {
                      if (paragraph.trim() === '') return null;
                      
                      if (paragraph.trim().startsWith('•')) {
                        return (
                          <div key={index} className="flex items-start mb-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-gray-600 m-0">{paragraph.trim().substring(1).trim()}</p>
                          </div>
                        );
                      }
                      
                      if (paragraph.trim().match(/^\d+\.\d+/)) {
                        const [title, ...content] = paragraph.split(':');
                        return (
                          <div key={index} className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-1">{title.trim()}:</h4>
                            <p className="text-gray-600 m-0">{content.join(':').trim()}</p>
                          </div>
                        );
                      }
                      
                      return (
                        <p key={index} className="text-gray-600 mb-4">
                          {paragraph.trim()}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Questions About These Terms?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact our legal team:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@reservoir.com</p>
                <p><strong>Address:</strong> 123 Tech Street, Suite 400, San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  For general support inquiries, please visit our <Link href="/contact" className="text-blue-600 hover:underline">Contact Page</Link> or reach out to our customer support team.
                </p>
              </div>
            </CardContent>
          </Card>
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