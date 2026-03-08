export interface Creator {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  categories: string[];
  avatar: string;
  coverImage: string;
  isLive: boolean;
  isVerified: boolean;
  subscribers: number;
  bio: string;
  monthlyPrice: number;
}

export const creators: Creator[] = [
  {
    id: "1",
    name: "Mila Kunis",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 124,
    categories: ["FASHION", "UGC", "LIFESTYLE"],
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    coverImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    isLive: true,
    isVerified: true,
    subscribers: 12400,
    bio: "Fashion & lifestyle content creator based in LA ✨",
    monthlyPrice: 9.99,
  },
  {
    id: "2",
    name: "Julian Vancore",
    location: "Austin, TX",
    rating: 5.0,
    reviews: 89,
    categories: ["PHOTOGRAPHY", "TECH"],
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    isLive: false,
    isVerified: true,
    subscribers: 8900,
    bio: "Photographer & tech enthusiast 📸",
    monthlyPrice: 9.99,
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    location: "New York, NY",
    rating: 4.8,
    reviews: 215,
    categories: ["FITNESS", "HEALTH", "VIDEO"],
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    isLive: true,
    isVerified: true,
    subscribers: 21500,
    bio: "Fitness coach & wellness creator 💪",
    monthlyPrice: 9.99,
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    location: "Miami, FL",
    rating: 4.7,
    reviews: 67,
    categories: ["DANCE", "LIFESTYLE"],
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    coverImage: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80",
    isLive: true,
    isVerified: false,
    subscribers: 6700,
    bio: "Professional dancer & content creator 💃",
    monthlyPrice: 9.99,
  },
  {
    id: "5",
    name: "Marcus Chen",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 156,
    categories: ["TECH", "EDUCATION"],
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    isLive: false,
    isVerified: true,
    subscribers: 15600,
    bio: "Tech educator & gadget reviewer 🎮",
    monthlyPrice: 9.99,
  },
  {
    id: "6",
    name: "Jordan Blake",
    location: "Chicago, IL",
    rating: 4.6,
    reviews: 43,
    categories: ["MUSIC", "LIFESTYLE"],
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    isLive: true,
    isVerified: false,
    subscribers: 4300,
    bio: "Musician & vibe creator 🎵",
    monthlyPrice: 9.99,
  },
  {
    id: "7",
    name: "Sophia Williams",
    location: "London, UK",
    rating: 4.8,
    reviews: 198,
    categories: ["FASHION", "BEAUTY"],
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    isLive: false,
    isVerified: true,
    subscribers: 19800,
    bio: "Fashion designer & beauty expert 💄",
    monthlyPrice: 9.99,
  },
  {
    id: "8",
    name: "Alex Rivera",
    location: "São Paulo, BR",
    rating: 4.7,
    reviews: 112,
    categories: ["PHOTOGRAPHY", "TRAVEL"],
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    coverImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    isLive: true,
    isVerified: true,
    subscribers: 11200,
    bio: "Travel photographer exploring the world 🌍",
    monthlyPrice: 9.99,
  },
];

// Color gradients for placeholder avatars
export const avatarGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)",
  "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
];

// Cover image gradients (more dramatic)
export const coverGradients = [
  "linear-gradient(135deg, #1a0533 0%, #3d1259 30%, #8B2FC9 100%)",
  "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  "linear-gradient(135deg, #1e1333 0%, #4a1942 50%, #6b2fa0 100%)",
  "linear-gradient(135deg, #0d0d2b 0%, #1a1a4e 30%, #4b1d8e 100%)",
  "linear-gradient(135deg, #16003b 0%, #3d0c5c 50%, #7b2ebd 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #6b21a8 100%)",
  "linear-gradient(135deg, #160b26 0%, #3b1f5b 50%, #9333ea 100%)",
  "linear-gradient(135deg, #100a1f 0%, #261447 30%, #5b21b6 100%)",
];

export const categories = [
  "All",
  "Fashion",
  "Photography",
  "Fitness",
  "Tech",
  "Health",
  "Video",
  "UGC",
  "Lifestyle",
  "Dance",
  "Music",
  "Education",
  "Beauty",
  "Travel",
];

export interface CreditPackage {
  id: string;
  credits: number;
  price: number;
  bonus: string;
  popular: boolean;
}

export const creditPackages: CreditPackage[] = [
  { id: "pkg1", credits: 10, price: 9.99, bonus: "", popular: false },
  { id: "pkg2", credits: 25, price: 22.50, bonus: "10% bônus", popular: true },
  { id: "pkg3", credits: 50, price: 39.99, bonus: "20% bônus", popular: false },
  { id: "pkg4", credits: 100, price: 74.99, bonus: "25% bônus", popular: false },
];

export const liveCreators = creators.filter((c) => c.isLive);

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  credits?: number;
  timestamp: string;
}

export const sampleChatMessages: ChatMessage[] = [
  { id: "1", user: "Pedro_BR", message: "Oi! Amei o conteúdo 😍", timestamp: "agora" },
  { id: "2", user: "Lucas_SP", message: "Incrível!!!", timestamp: "1m" },
  { id: "3", user: "Ana_RJ", message: "Maravilhosa!", credits: 5, timestamp: "2m" },
  { id: "4", user: "Carlos_MG", message: "👏👏👏", timestamp: "3m" },
  { id: "5", user: "Julia_BA", message: "Quando a próxima live?", timestamp: "4m" },
  { id: "6", user: "Marcos_RS", message: "Top demais!", credits: 10, timestamp: "5m" },
];
