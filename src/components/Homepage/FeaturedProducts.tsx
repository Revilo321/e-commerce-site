import React from 'react';

const FeaturedProducts: React.FC = () => {
  // Fetch or provide the list of featured products
  const featuredProducts = [
    { id: 1, name: 'Rolex Watch', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
  ];

  return (
    <section>
      <div className="pb-5">
        <p className="text-center text-sm font-semibold">OLIVER</p>
        <h2 className="text-center text-xl font-bold">FEATURED PRODUCTS</h2>
        <div className="flex justify-center pt-1">
          <div className=" bg-pink-200 w-10 h-px"></div>
        </div>
        <p className="text-center text-sm font-medium">
          Here is an overview of all featured items
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="  mx-10">
            <div className="h-20 w-full bg-black" />
            <h3 className="text-sm pt-1">{product.name}</h3>
            <p className="text-xs">{product.price}</p>
            {/* Additional product details */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
