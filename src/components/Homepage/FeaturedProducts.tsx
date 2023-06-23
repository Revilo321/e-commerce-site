import React, { useEffect, useState } from 'react';
import { GenericProducts } from './GenericProducts';
import { GenericProductHeader } from './GenericProductHeader';

const FeaturedProducts: React.FC = () => {
  const [specialOffers, setSpecialOffers] = useState([]);
  useEffect(() => {
    const fetchSpecialOffers = async () => {
      try {
        const response = await fetch('/api/products/special-offers');
        const data = await response.json();
        setSpecialOffers(data);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    };

    fetchSpecialOffers();
  }, []);

  return (
    <section>
      <GenericProductHeader
        header="STORE"
        secondHeader="FEATURED PRODUCTS"
        text="Here is an overview of all featured items"
      />
      <GenericProducts products={specialOffers} />
    </section>
  );
};

export default FeaturedProducts;
