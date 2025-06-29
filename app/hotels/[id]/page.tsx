'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import RoomCard from '@/components/rooms/RoomCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { hotels, rooms } from '@/data/mockData';
import { Hotel, Room } from '@/types';
import { Star, MapPin, Wifi, Car, Utensils, Waves, Dumbbell, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HotelPage() {
  const params = useParams();
  const hotelId = params.id as string;
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [hotelRooms, setHotelRooms] = useState<Room[]>([]);
  const [filter, setFilter] = useState<'all' | 'available' | 'standard' | 'deluxe' | 'suite'>('all');

  useEffect(() => {
    const foundHotel = hotels.find(h => h.id === hotelId);
    const foundRooms = rooms.filter(r => r.hotelId === hotelId);
    
    setHotel(foundHotel || null);
    setHotelRooms(foundRooms);
  }, [hotelId]);

  const filteredRooms = hotelRooms.filter(room => {
    if (filter === 'all') return true;
    if (filter === 'available') return room.isAvailable;
    return room.type === filter;
  });

  const amenityIcons = {
    'Pool': Waves,
    'Spa': Star,
    'Restaurant': Utensils,
    'Beach Access': Waves,
    'Fitness Center': Dumbbell,
    'Rooftop Bar': Utensils,
    'Business Center': Wifi,
    'Gym': Dumbbell,
    'Room Service': Utensils,
    'Valet Parking': Car,
  };

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Hotel not found</h2>
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
      
      {/* Hotel Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Hotels
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    {hotel.rating}
                  </Badge>
                  <Badge variant="outline">{hotel.priceRange}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {hotel.location.address}, {hotel.location.city}
                </div>
                <p className="text-gray-700">{hotel.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {hotel.amenities.map((amenity) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi;
                    return (
                      <div key={amenity} className="flex items-center space-x-2 text-sm text-gray-600">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Available Rooms</h2>
          
          <div className="flex space-x-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'available' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('available')}
            >
              Available
            </Button>
            <Button
              variant={filter === 'standard' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('standard')}
            >
              Standard
            </Button>
            <Button
              variant={filter === 'deluxe' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('deluxe')}
            >
              Deluxe
            </Button>
            <Button
              variant={filter === 'suite' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('suite')}
            >
              Suite
            </Button>
          </div>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No rooms match your current filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} hotelId={hotelId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}