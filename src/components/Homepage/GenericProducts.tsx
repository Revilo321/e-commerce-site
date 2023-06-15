import { Product } from '@/types/productType';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

interface GenericProductsProps {
  products: Product[];
}

export const GenericProducts = ({ products }: GenericProductsProps) => {
  const router = useRouter();

  const handleProductClick = (product: Product) => {
    router.push({
      pathname: 'products/[productId]',
      query: { productId: product.id, ...product },
    });
  };
  return (
    <div className="py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-screen-lg place-items-center">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            handleProductClick(product);
          }}
          className="sm:w-full px-10"
        >
          {product.imageUrl && (
            <img
              className="max-w-full"
              src={product.imageUrl}
              alt="productimage"
            />
          )}

          <h3 className="text-sm pt-1">{product.name}</h3>
          <p className="text-xs">{product.price}</p>
        </div>
      ))}
    </div>
  );
};
