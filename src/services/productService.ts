import { Product } from '../types';

// Mock data for demonstration
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Vintage Camera',
    description: 'Professional vintage camera in excellent condition',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    seller: 'Camera Enthusiast',
    category: 'Electronics'
  },
  {
    id: '2',
    title: 'Handcrafted Leather Bag',
    description: 'Genuine leather handmade bag',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601',
    seller: 'Artisan Leather',
    category: 'Fashion'
  },
  {
    id: '3',
    title: 'Smart Watch',
    description: 'Latest generation smartwatch with health tracking',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    seller: 'Tech Store',
    category: 'Electronics'
  }
];

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return MOCK_PRODUCTS;
};