import React from 'react';

const SpecialOffers: React.FC = () => {
  // Fetch or provide the list of special offers
  const specialOffers = [
    { id: 1, name: 'Special Offer 1', discount: 10 },
    { id: 2, name: 'Special Offer 2', discount: 20 },
    { id: 3, name: 'Special Offer 3', discount: 15 },
  ];

  return (
    <section>
      <h2>Special Offers</h2>
      <ul>
        {specialOffers.map((offer) => (
          <li key={offer.id}>
            <p>{offer.name}</p>
            <p>{offer.discount}% off</p>
            {/* Additional offer details */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SpecialOffers;
