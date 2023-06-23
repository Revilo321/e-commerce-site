import useLazyLoading from '@/hooks/useLazyLoading';
import { Product } from '@/types/productType';
import React, { createContext, useEffect, useState } from 'react';

interface ProductContextProps {
  products: Product[];
  fetchProducts: () => Promise<void>;
  totalProducts: number;
  // Other product-related actions and state
}
export type ProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  fetchProducts: () => Promise.resolve(),
  totalProducts: 0,
});

export const ProductProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products/products');
      const data = await response.json();
      setTotalProducts(data.length);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const batchSize = 4;
  const fetchMoreProducts = async (batch: number, batchSize: number) => {
    try {
      const response = await fetch(
        `/api/products/lazy-loading?batch=${batch}&batchSize=${batchSize}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching more products:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useLazyLoading<Product>(fetchMoreProducts, batchSize);

  return (
    <ProductContext.Provider value={{ products, fetchProducts, totalProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
