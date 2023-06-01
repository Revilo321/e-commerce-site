import React from 'react';
import { GenericProducts } from './GenericProducts';
import { GenericProductHeader } from './GenericProductHeader';

const NewArrivals: React.FC = () => {
  // Fetch or provide the list of new arrivals
  const newArrivals = [
    { id: 1, name: 'New Arrival 1', price: 29.99 },
    { id: 2, name: 'New Arrival 2', price: 39.99 },
    { id: 3, name: 'New Arrival 3', price: 34.99 },
  ];

  return (
    <section>
      <GenericProductHeader
        header="OLIVER"
        secondHeader="NEW ARRIVALS"
        text="Overview of all new arrivals"
      />
      <GenericProducts products={newArrivals} />
    </section>
  );
};

export default NewArrivals;
