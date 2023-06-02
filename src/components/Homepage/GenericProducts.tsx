import { Product } from '@/types/productType';
import React from 'react';

interface GenericProductsProps {
  products: Product[];
}

export const GenericProducts = ({ products }: GenericProductsProps) => {
  return (
    <div className="py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-screen-lg place-items-center">
      {products.map((product) => (
        <div key={product.id} className="w-3/4 sm:w-full px-4 lg:w-2/3">
          <div className="h-56 bg-gray-100" />
          <h3 className="text-sm pt-1">{product.name}</h3>
          <p className="text-xs">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
