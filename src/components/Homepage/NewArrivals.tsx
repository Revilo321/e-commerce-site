import React, { useEffect, useState } from 'react';
import { GenericProducts } from './GenericProducts';
import { GenericProductHeader } from './GenericProductHeader';

const NewArrivals: React.FC = () => {
  // Fetch or provide the list of new arrivals
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/products?sort=desc',
        );
        const data = await response.json();
        setNewArrivals(data);
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      }
    };

    fetchNewArrivals();
  }, []);
  console.log(newArrivals);
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
