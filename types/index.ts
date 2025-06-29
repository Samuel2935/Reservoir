export interface Hotel {
  id: string;
  name: string;
  description: string;
  image: string;
  location: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  priceRange: string;
  amenities: string[];
}

export interface Room {
  id: string;
  hotelId: string;
  name: string;
  image: string;
  isAvailable: boolean;
  price: number;
  capacity: number;
  type: 'standard' | 'deluxe' | 'suite';
}

export interface Layout {
  id: string;
  roomId: string;
  name: string;
  thumbnail: string;
  image: string;
  area: number;
  unitType: string;
  roomCount: number;
  bathrooms: number;
  features: string[];
  price: number;
}

export interface Reservation {
  id: string;
  userId: string;
  hotelId: string;
  roomId: string;
  layoutId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  authMethod: 'social' | 'wallet';
}