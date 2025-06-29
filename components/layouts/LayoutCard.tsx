'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Layout } from '@/types';
import { Home, Bath, Maximize, Star } from 'lucide-react';

interface LayoutCardProps {
  layout: Layout;
  hotelId: string;
  roomId: string;
}

export default function LayoutCard({ layout, hotelId, roomId }: LayoutCardProps) {
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
          isHovered ? 'opacity-25' : 'opacity-0'
        }`}
      />
      
      <Card className={`overflow-hidden transition-all duration-300 relative z-20 ${
        isHovered ? 'shadow-2xl scale-[1.03] ring-2 ring-blue-500/30' : 'shadow-md'
      }`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={layout.thumbnail}
            alt={layout.name}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-115' : 'scale-100'
            }`}
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {layout.area} sq ft
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {layout.name}
              </h3>
              <p className="text-sm text-gray-600">{layout.unitType}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1 text-gray-400" />
                <span>{layout.roomCount} rooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1 text-gray-400" />
                <span>{layout.bathrooms} baths</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1 text-gray-400" />
                <span>{layout.area} sq ft</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {layout.features.slice(0, 3).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {layout.features.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{layout.features.length - 3} more
                </Badge>
              )}
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${layout.price}
                </p>
                <p className="text-sm text-gray-500">per night</p>
              </div>
              
              <Link href={`/hotels/${hotelId}/rooms/${roomId}/layouts/${layout.id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}