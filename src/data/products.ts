import { Product } from '@/contexts/CartContext';
import productTee from '@/assets/product-tee.jpg';
import productJacket from '@/assets/product-jacket.jpg';
import productTote from '@/assets/product-tote.jpg';
import productCap from '@/assets/product-cap.jpg';
import productPrint from '@/assets/product-print.jpg';

export const products: Product[] = [
  {
    id: 'heritage-tee',
    name: 'PaperShoes Heritage Tee',
    price: 899,
    image: productTee,
    description: 'Premium organic cotton t-shirt featuring our signature PaperShoes emblem. Soft, breathable, and made to last. Every thread tells a story of environmental stewardship.',
    impact: 'Funds 10 student habit-trackers',
    material: 'Organic Cotton',
    category: 'Apparel',
  },
  {
    id: 'lightweight-jacket',
    name: 'Run For India Lightweight Jacket',
    price: 2499,
    image: productJacket,
    description: 'Engineered for runners, designed for everyday. This lightweight jacket is crafted from recycled ocean plastics, turning waste into wearable action.',
    impact: 'Funds a school workshop',
    material: 'Recycled Polyester',
    category: 'Apparel',
  },
  {
    id: 'eco-tote',
    name: 'PaperShoes Eco Tote',
    price: 649,
    image: productTote,
    description: 'Carry your commitment. This durable hemp blend tote is perfect for everyday use, from market runs to beach cleanups.',
    impact: 'Funds a community cleanup kit',
    material: 'Hemp Blend',
    category: 'Accessories',
  },
  {
    id: 'running-cap',
    name: 'PaperShoes Running Cap',
    price: 399,
    image: productCap,
    description: 'Stay cool under pressure. Our breathable running cap features moisture-wicking fabric and UV protection for those long marathon days.',
    impact: 'Funds volunteer safety gear',
    material: 'Recycled Nylon',
    category: 'Accessories',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
