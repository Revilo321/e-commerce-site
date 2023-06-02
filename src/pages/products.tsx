import { GenericProducts } from '@/components/Homepage/GenericProducts';
import { Product } from '@/types/productType';

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 24.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/product3.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://example.com/product3.jpg',
    },
    // Add more products as needed
  ];
  return (
    <div>
      <GenericProducts products={products} />
    </div>
  );
};

export default Products;
