'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { hotels, rooms, layouts } from '@/data/mockData';
import { Hotel, Room, Layout } from '@/types';
import { CreditCard, Shield, ArrowLeft, User, Mail, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const [reservationData, setReservationData] = useState<any>(null);
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'flutterwave'>('flutterwave');
  
  // Form state
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const dataParam = searchParams.get('data');
    if (dataParam) {
      try {
        const data = JSON.parse(decodeURIComponent(dataParam));
        setReservationData(data);
        
        // Find related data
        const foundHotel = hotels.find(h => h.id === data.hotelId);
        const foundRoom = rooms.find(r => r.id === data.roomId);
        const foundLayout = layouts.find(l => l.id === data.layoutId);
        
        setHotel(foundHotel || null);
        setRoom(foundRoom || null);
        setLayout(foundLayout || null);
      } catch (error) {
        console.error('Failed to parse reservation data:', error);
      }
    }
  }, [searchParams]);

  const handlePayment = async () => {
    if (!reservationData || !layout) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate Flutterwave payment integration
      if (paymentMethod === 'flutterwave') {
        // In a real app, you would integrate with Flutterwave's API
        const paymentData = {
          amount: layout.price + 25 + Math.round(layout.price * 0.1),
          currency: 'USD',
          customer: guestInfo,
          customizations: {
            title: 'Reservoir Hotel Booking',
            description: `${hotel?.name} - ${layout.name}`,
          },
        };
        
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        alert('Payment successful! Your reservation has been confirmed.');
        
        // In a real app, you would redirect to a confirmation page
        window.location.href = '/bookings';
      }
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!reservationData || !hotel || !room || !layout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Invalid reservation data</h2>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalAmount = layout.price + 25 + Math.round(layout.price * 0.1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href={`/hotels/${reservationData.hotelId}/rooms/${reservationData.roomId}/layouts/${reservationData.layoutId}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Room Details
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Guest Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Guest Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input
                      value={guestInfo.firstName}
                      onChange={(e) => setGuestInfo(prev => ({ ...prev, firstName: e.target.value }))}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input
                      value={guestInfo.lastName}
                      onChange={(e) => setGuestInfo(prev => ({ ...prev, lastName: e.target.value }))}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                       onClick={() => setPaymentMethod('flutterwave')}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'flutterwave'}
                      onChange={() => setPaymentMethod('flutterwave')}
                      className="text-blue-600"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Flutterwave</p>
                      <p className="text-sm text-gray-500">Secure payment with cards, bank transfer, and more</p>
                    </div>
                    <Badge variant="success">Recommended</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 opacity-50"
                       onClick={() => setPaymentMethod('card')}>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      disabled
                      className="text-blue-600"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Credit/Debit Card</p>
                      <p className="text-sm text-gray-500">Direct card payment (coming soon)</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Booking Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Hotel & Room Info */}
                <div className="flex space-x-4 pb-4 border-b">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={layout.image}
                      alt={layout.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{hotel.name}</h3>
                    <p className="text-sm text-gray-600">{layout.name}</p>
                    <p className="text-sm text-gray-500">{layout.unitType}</p>
                  </div>
                </div>
                
                {/* Booking Details */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Check-in
                    </span>
                    <span>{new Date(reservationData.checkIn).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Check-out
                    </span>
                    <span>{new Date(reservationData.checkOut).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Guests</span>
                    <span>{reservationData.guests}</span>
                  </div>
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-2 py-3 border-t">
                  <div className="flex justify-between text-sm">
                    <span>Room rate</span>
                    <span>${layout.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Service fee</span>
                    <span>$25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Taxes & fees</span>
                    <span>${Math.round(layout.price * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${totalAmount}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePayment}
                  disabled={isProcessing || !guestInfo.firstName || !guestInfo.lastName || !guestInfo.email}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  {isProcessing ? (
                    'Processing...'
                  ) : (
                    <>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Complete Booking (${totalAmount})
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By completing this booking, you agree to our terms of service and privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <p>Loading checkout...</p>
          </div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}