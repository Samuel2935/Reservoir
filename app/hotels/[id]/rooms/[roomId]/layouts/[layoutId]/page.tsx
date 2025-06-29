'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { hotels, rooms, layouts } from '@/data/mockData';
import { Hotel, Room, Layout } from '@/types';
import { ArrowLeft, Home, Bath, Maximize, Calendar, Users, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LayoutDetailPage() {
  const params = useParams();
  const router = useRouter();
  const hotelId = params.id as string;
  const roomId = params.roomId as string;
  const layoutId = params.layoutId as string;
  
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const foundHotel = hotels.find(h => h.id === hotelId);
    const foundRoom = rooms.find(r => r.id === roomId);
    const foundLayout = layouts.find(l => l.id === layoutId);
    
    setHotel(foundHotel || null);
    setRoom(foundRoom || null);
    setLayout(foundLayout || null);
    
    // Set default dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckIn(today.toISOString().split('T')[0]);
    setCheckOut(tomorrow.toISOString().split('T')[0]);
  }, [hotelId, roomId, layoutId]);

  const handleReservation = () => {
    // Navigate to checkout page with reservation details
    const reservationData = {
      hotelId,
      roomId,
      layoutId,
      checkIn,
      checkOut,
      guests,
      totalAmount: layout?.price || 0
    };
    
    router.push(`/checkout?data=${encodeURIComponent(JSON.stringify(reservationData))}`);
  };

  if (!hotel || !room || !layout) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Layout not found</h2>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href={`/hotels/${hotelId}/rooms/${roomId}`} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Room Selection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Layout Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Layout Image */}
            <Card className="overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={layout.image}
                  alt={layout.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            
            {/* Layout Info */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {layout.name}
                    </h1>
                    <p className="text-lg text-gray-600">{layout.unitType}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 py-4 border-y">
                    <div className="text-center">
                      <Home className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">{layout.roomCount}</p>
                      <p className="text-sm text-gray-500">Rooms</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">{layout.bathrooms}</p>
                      <p className="text-sm text-gray-500">Bathrooms</p>
                    </div>
                    <div className="text-center">
                      <Maximize className="h-6 w-6 mx-auto text-gray-400 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">{layout.area}</p>
                      <p className="text-sm text-gray-500">sq ft</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Features & Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {layout.features.map((feature) => (
                        <Badge key={feature} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Hotel Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">About {hotel.name}</h3>
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 mb-2">{hotel.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{hotel.location.address}, {hotel.location.city}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center pb-4 border-b">
                    <p className="text-3xl font-bold text-gray-900">
                      ${layout.price}
                    </p>
                    <p className="text-sm text-gray-500">per night</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-in
                        </label>
                        <Input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Check-out
                        </label>
                        <Input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Guests
                      </label>
                      <Input
                        type="number"
                        min="1"
                        max={room.capacity}
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                      />
                    </div>
                    
                    <div className="space-y-2 py-3 border-t">
                      <div className="flex justify-between text-sm">
                        <span>Base price</span>
                        <span>${layout.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Service fee</span>
                        <span>$25</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Taxes</span>
                        <span>${Math.round(layout.price * 0.1)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span>${layout.price + 25 + Math.round(layout.price * 0.1)}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleReservation}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Reserve Now
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      You won't be charged yet. Review your booking details on the next page.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}