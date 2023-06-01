import React from 'react';

const NewArrivals: React.FC = () => {
  // Fetch or provide the list of new arrivals
  const newArrivals = [
    { id: 1, name: 'New Arrival 1', price: 29.99 },
    { id: 2, name: 'New Arrival 2', price: 39.99 },
    { id: 3, name: 'New Arrival 3', price: 34.99 },
  ];

  return (
    <section>
      <h2>New Arrivals</h2>
      <div className="grid grid-cols-3 gap-4">
        {newArrivals.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* Additional product details */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
