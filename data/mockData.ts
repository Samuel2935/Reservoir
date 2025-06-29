import { Hotel, Room, Layout } from '@/types';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Grand Marina Resort',
    description: 'Luxury beachfront resort with stunning ocean views and world-class amenities.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    location: {
      address: '123 Ocean Drive',
      city: 'Miami Beach, FL',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    rating: 4.8,
    priceRange: '$300-600',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Beach Access', 'Fitness Center']
  },
  {
    id: '2',
    name: 'Metropolitan Heights',
    description: 'Modern city hotel in the heart of downtown with panoramic skyline views.',
    image: 'https://images.pexels.com/photos/2403016/pexels-photo-2403016.jpeg',
    location: {
      address: '456 City Center Blvd',
      city: 'New York, NY',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    rating: 4.6,
    priceRange: '$200-450',
    amenities: ['Rooftop Bar', 'Business Center', 'Gym', 'Room Service', 'Valet Parking']
  },
  {
    id: '3',
    name: 'Alpine Lodge Retreat',
    description: 'Cozy mountain lodge surrounded by pristine wilderness and hiking trails.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    location: {
      address: '789 Mountain View Road',
      city: 'Aspen, CO',
      coordinates: { lat: 39.1911, lng: -106.8175 }
    },
    rating: 4.7,
    priceRange: '$250-500',
    amenities: ['Ski Access', 'Fireplace', 'Hot Tub', 'Restaurant', 'Hiking Trails']
  },
  {
    id: '4',
    name: 'Desert Oasis Palace',
    description: 'Exotic resort featuring authentic architecture and desert adventure experiences.',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
    location: {
      address: '321 Desert Springs Way',
      city: 'Scottsdale, AZ',
      coordinates: { lat: 33.4942, lng: -111.9261 }
    },
    rating: 4.5,
    priceRange: '$180-380',
    amenities: ['Desert Tours', 'Spa', 'Golf Course', 'Pool', 'Fine Dining']
  }
];

export const rooms: Room[] = [
  // Grand Marina Resort rooms
  { id: '1-1', hotelId: '1', name: 'Ocean View Standard', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', isAvailable: true, price: 320, capacity: 2, type: 'standard' },
  { id: '1-2', hotelId: '1', name: 'Beachfront Deluxe', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', isAvailable: true, price: 450, capacity: 3, type: 'deluxe' },
  { id: '1-3', hotelId: '1', name: 'Presidential Suite', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', isAvailable: false, price: 800, capacity: 4, type: 'suite' },
  { id: '1-4', hotelId: '1', name: 'Garden View Standard', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', isAvailable: true, price: 280, capacity: 2, type: 'standard' },
  { id: '1-5', hotelId: '1', name: 'Balcony Deluxe', image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', isAvailable: true, price: 420, capacity: 3, type: 'deluxe' },
  
  // Metropolitan Heights rooms
  { id: '2-1', hotelId: '2', name: 'City View Standard', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', isAvailable: true, price: 220, capacity: 2, type: 'standard' },
  { id: '2-2', hotelId: '2', name: 'Skyline Deluxe', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', isAvailable: true, price: 350, capacity: 3, type: 'deluxe' },
  { id: '2-3', hotelId: '2', name: 'Executive Suite', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', isAvailable: true, price: 650, capacity: 4, type: 'suite' },
  { id: '2-4', hotelId: '2', name: 'Corner Standard', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', isAvailable: false, price: 240, capacity: 2, type: 'standard' },
  { id: '2-5', hotelId: '2', name: 'Penthouse Suite', image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', isAvailable: true, price: 950, capacity: 6, type: 'suite' },
];

export const layouts: Layout[] = [
  // Room 1-1 layouts
  {
    id: '1-1-a',
    roomId: '1-1',
    name: 'Classic Ocean View',
    thumbnail: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    area: 450,
    unitType: 'King Room',
    roomCount: 1,
    bathrooms: 1,
    features: ['Ocean View', 'Balcony', 'Mini Bar', 'WiFi'],
    price: 320
  },
  {
    id: '1-1-b',
    roomId: '1-1',
    name: 'Twin Ocean View',
    thumbnail: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    area: 420,
    unitType: 'Twin Room',
    roomCount: 1,
    bathrooms: 1,
    features: ['Ocean View', 'Balcony', 'Work Desk', 'WiFi'],
    price: 320
  },
  {
    id: '1-1-c',
    roomId: '1-1',
    name: 'Accessible Ocean View',
    thumbnail: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    area: 480,
    unitType: 'Accessible Room',
    roomCount: 1,
    bathrooms: 1,
    features: ['Ocean View', 'Wheelchair Accessible', 'Roll-in Shower', 'WiFi'],
    price: 320
  },
  
  // Room 1-2 layouts
  {
    id: '1-2-a',
    roomId: '1-2',
    name: 'Beachfront Suite',
    thumbnail: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    area: 650,
    unitType: 'Suite',
    roomCount: 2,
    bathrooms: 2,
    features: ['Direct Beach Access', 'Living Area', 'Kitchenette', 'Terrace'],
    price: 450
  },
  {
    id: '1-2-b',
    roomId: '1-2',
    name: 'Family Beachfront',
    thumbnail: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
    area: 700,
    unitType: 'Family Room',
    roomCount: 2,
    bathrooms: 2,
    features: ['Beach Access', 'Bunk Beds', 'Game Area', 'Fridge'],
    price: 450
  },
];