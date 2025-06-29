'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Room } from '@/types';
import { Users, Bed, Wifi } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  hotelId: string;
}

export default function RoomCard({ room, hotelId }: RoomCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 pointer-events-none z-10 ${
          isHovered ? 'opacity-20' : 'opacity-0'
        }`}
      />
      
      <Card className={`overflow-hidden transition-all duration-300 relative z-20 ${
        isHovered ? 'shadow-2xl scale-[1.02] ring-2 ring-blue-500/20' : 'shadow-md'
      }`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute top-3 left-3">
            <Badge variant={room.isAvailable ? 'success' : 'destructive'}>
              {room.isAvailable ? 'Available' : 'Booked'}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-800 capitalize">
              {room.type}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">
              {room.name}
            </h3>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {room.capacity} guests
              </div>
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {room.type} room
              </div>
              <div className="flex items-center">
                <Wifi className="h-4 w-4 mr-1" />
                Free WiFi
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  ${room.price}
                </p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
              
              {room.isAvailable ? (
                <Link href={`/hotels/${hotelId}/rooms/${room.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Select Room
                  </Button>
                </Link>
              ) : (
                <Button disabled variant="outline">
                  Unavailable
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}