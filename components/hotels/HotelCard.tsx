'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hotel } from '@/types';
import { Star, MapPin } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link href={`/hotels/${hotel.id}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              {hotel.rating}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {hotel.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {hotel.location.city}
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">
              {hotel.description}
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-wrap gap-1">
                {hotel.amenities.slice(0, 2).map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
                {hotel.amenities.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{hotel.amenities.length - 2} more
                  </Badge>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {hotel.priceRange}
                </p>
                <p className="text-xs text-gray-500">per night</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}