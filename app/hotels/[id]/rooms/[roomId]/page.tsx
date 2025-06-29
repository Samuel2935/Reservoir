'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import LayoutCard from '@/components/layouts/LayoutCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { hotels, rooms, layouts } from '@/data/mockData';
import { Hotel, Room, Layout } from '@/types';
import { ArrowLeft, Users, Bed, Wifi } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RoomPage() {
  const params = useParams();
  const hotelId = params.id as string;
  const roomId = params.roomId as string;
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [roomLayouts, setRoomLayouts] = useState<Layout[]>([]);

  useEffect(() => {
    const foundHotel = hotels.find(h => h.id === hotelId);
    const foundRoom = rooms.find(r => r.id === roomId);
    const foundLayouts = layouts.filter(l => l.roomId === roomId);
    
    setHotel(foundHotel || null);
    setRoom(foundRoom || null);
    setRoomLayouts(foundLayouts);
  }, [hotelId, roomId]);

  if (!hotel || !room) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Room not found</h2>
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
      
      {/* Room Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href={`/hotels/${hotelId}`} 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {hotel.name}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant={room.isAvailable ? 'success' : 'destructive'}>
                    {room.isAvailable ? 'Available' : 'Booked'}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {room.type} Room
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {room.name}
                </h1>
                
                <div className="flex items-center space-x-6 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Up to {room.capacity} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>{room.type} room</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 mr-2" />
                    <span>Free WiFi</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">
                        ${room.price}
                      </p>
                      <p className="text-sm text-gray-500">per night</p>
                    </div>
                    {room.isAvailable && (
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-2">Choose a layout to continue</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layouts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Room Layouts
          </h2>
          <p className="text-gray-600">
            Choose from our available room configurations
          </p>
        </div>

        {roomLayouts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No room layouts available for this room.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomLayouts.map((layout) => (
              <LayoutCard 
                key={layout.id} 
                layout={layout} 
                hotelId={hotelId}
                roomId={roomId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}