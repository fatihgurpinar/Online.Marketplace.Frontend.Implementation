export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  seller: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}