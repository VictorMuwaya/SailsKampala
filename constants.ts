import { MenuItem, SocialPost, Review } from './types';

// Simulated extracted data from social media
export const RESTAURANT_INFO = {
  name: "Sails Restaurant & Wine Boutique",
  tagline: "We shall Sail through the storms.",
  address: "Old Port Bell Road, Luzira, Kampala, Uganda",
  phone: "+256 772 123 456",
  email: "reservations@sailskampala.com",
  hours: {
    weekdays: "11:00 AM - 11:00 PM",
    weekends: "10:00 AM - Midnight"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: "Lake Victoria Calamari",
    description: "Crispy fried calamari rings served with our house tartar sauce and lemon wedges.",
    priceRange: "UGX 25,000 - 30,000",
    category: 'starters'
  },
  {
    id: 's2',
    name: "Luzira Prawn Cocktail",
    description: "Chilled prawns tossed in a tangy marie rose sauce, served on a bed of crisp lettuce.",
    priceRange: "UGX 35,000",
    category: 'starters'
  },
  // Mains
  {
    id: 'm1',
    name: "Signature Whole Tilapia",
    description: "Fresh from the lake, charcoal grilled to perfection with lemon butter herbs. Served with fries or gonja.",
    priceRange: "UGX 45,000 - 55,000",
    category: 'mains',
    isSignature: true
  },
  {
    id: 'm2',
    name: "Port Bell Pepper Steak",
    description: "Tender beef fillet aged for 21 days, served with a creamy peppercorn sauce and mashed potatoes.",
    priceRange: "UGX 50,000 - 65,000",
    category: 'mains',
    isSignature: true
  },
  {
    id: 'm3',
    name: "Sails Surf & Turf",
    description: "The best of both worlds: Grilled steak medallion paired with garlic butter prawns.",
    priceRange: "UGX 75,000",
    category: 'mains'
  },
  // Wines
  {
    id: 'w1',
    name: "South African Pinotage",
    description: "A robust red with notes of dark berry and spice. Perfect with our steak.",
    priceRange: "UGX 120,000 / Bottle",
    category: 'wines'
  },
  {
    id: 'w2',
    name: "Chill Sauvignon Blanc",
    description: "Crisp, dry white wine with tropical fruit notes. Pairs excellently with Tilapia.",
    priceRange: "UGX 110,000 / Bottle",
    category: 'wines'
  },
  // Desserts
  {
    id: 'd1',
    name: "Passion Fruit Cheesecake",
    description: "Creamy cheesecake topped with fresh local passion fruit coulis.",
    priceRange: "UGX 20,000",
    category: 'desserts'
  }
];

export const SOCIAL_FEED: SocialPost[] = [
  {
    id: 'p1',
    imageUrl: 'https://picsum.photos/id/431/600/600',
    caption: "Sunday brunch vibes at Sails! 🥂 The perfect weather for a glass of white wine by the patio.",
    date: "2 days ago",
    likes: 124
  },
  {
    id: 'p2',
    imageUrl: 'https://picsum.photos/id/292/600/600',
    caption: "Our Whole Grilled Tilapia is back in stock! Fresh from the lake this morning. #KampalaEats",
    date: "4 days ago",
    likes: 89
  },
  {
    id: 'p3',
    imageUrl: 'https://picsum.photos/id/42/600/600',
    caption: "Evening ambiance. We are ready to host your anniversary dinners tonight.",
    date: "1 week ago",
    likes: 210
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/id/225/800/600', // Interior
  'https://picsum.photos/id/429/800/1000', // Food
  'https://picsum.photos/id/1060/800/800', // Chef
  'https://picsum.photos/id/75/800/600', // Wine
  'https://picsum.photos/id/292/800/1000', // Plate
  'https://picsum.photos/id/163/800/600', // Outdoors
];