import React from 'react';
import { GenericProducts } from './GenericProducts';
import { GenericProductHeader } from './GenericProductHeader';

const FeaturedProducts: React.FC = () => {
  // Fetch or provide the list of featured products
  const featuredProducts = [
    { id: 1, name: 'Rolex Watch', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
  ];

  return (
    <section>
      <GenericProductHeader
        header="OLIVER"
        secondHeader="FEATURED PRODUCTS"
        text="Here is an overview of all featured items"
      />
      <GenericProducts products={featuredProducts} />
    </section>
  );
};

export default FeaturedProducts;
