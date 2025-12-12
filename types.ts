export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  category: 'starters' | 'mains' | 'wines' | 'desserts';
  isSignature?: boolean;
}

export interface SocialPost {
  id: string;
  imageUrl: string;
  caption: string;
  date: string;
  likes: number;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  source: string;
}

export interface NavLink {
  label: string;
  path: string;
}