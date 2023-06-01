import React from 'react';

interface GenericProductsProps {
  products: { id: number; name: string; price: number }[];
}

export const GenericProducts = ({ products }: GenericProductsProps) => {
  return (
    <div className="px-10 sm:px-0 sm:flex justify-center">
      {products.map((product) => (
        <div key={product.id} className="min-w-[225px] px-10">
          <div className="h-56 bg-gray-100" />
          <h3 className="text-sm pt-1">{product.name}</h3>
          <p className="text-xs">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
