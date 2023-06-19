import { GenericProductHeader } from '@/components/Homepage/GenericProductHeader';
import { GenericProducts } from '@/components/Homepage/GenericProducts';
import { Product } from '@/types/productType';

const Products = ({ products }: { products: Product[] }) => {
  /* const products: Product[] = [
    {
      id: 1,
      name: 'Coke zero',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/coke.jpg',
    },
    {
      id: 2,
      name: 'Coca Cola',
      price: 24.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/coke.jpg',
    },
    {
      id: 3,
      name: 'Sprite',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/coke.jpg',
    },
    {
      id: 4,
      name: 'Fanta',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/coke.jpg',
    },
    {
      id: 5,
      name: 'Fanta Exotic',
      price: 14.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/coke.jpg',
    },
    // Add more products as needed
  ]; */

  return (
    <section className="pt-14">
      <GenericProductHeader
        header="STORE"
        secondHeader="All Products"
        text="Here you can find all of our products"
      />
      <GenericProducts products={products} />
    </section>
  );
};

export async function getServerSideProps() {
  // Fetch products from the API
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();

  // Pass the fetched products as props
  return {
    props: {
      products,
    },
  };
}

export default Products;
