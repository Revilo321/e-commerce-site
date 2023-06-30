import React, { useEffect, useState } from 'react';
import { GenericProducts } from './GenericProducts';
import { GenericProductHeader } from './GenericProductHeader';

const NewArrivals: React.FC = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch('/api/products/recent');
        const data = await response.json();
        setNewArrivals(data);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <section>
      <GenericProductHeader
        header="STORE"
        secondHeader="NEW ARRIVALS"
        text="Overview of all new arrivals"
      />
      <GenericProducts products={newArrivals} />
    </section>
  );
};

export default NewArrivals;
