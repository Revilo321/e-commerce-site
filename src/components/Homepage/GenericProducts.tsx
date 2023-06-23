import { Product } from '@/types/productType';
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
        <div key={product.id} className="sm:w-full px-10">
          <div
            className="cursor-pointer"
            onClick={() => {
              handleProductClick(product);
            }}
          >
            {product.image_url && (
              <img
                className="max-w-xs sm:max-w-full"
                src={product.image_url}
                alt="productimage"
              />
            )}

            <h3 className="text-sm pt-1">{product.name}</h3>
            <p className="text-xs">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
