import { GenericProductHeader } from '@/components/Homepage/GenericProductHeader';
import { GenericProducts } from '@/components/Homepage/GenericProducts';
import useLazyLoading from '@/hooks/useLazyLoading';
import { Product } from '@/types/productType';
import { useEffect, useState } from 'react';

const Products = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const batchSize = 4;

  const fetchProducts = async (batch: number) => {
    const response = await fetch(
      `/api/products/lazy-loading?batch=${batch}&batchSize=${batchSize}`,
    );
    const data = await response.json();
    return data;
  };

  const fetchTotalProducts = async () => {
    try {
      const response = await fetch('/api/products/products');
      const data = await response.json();
      setTotalProducts(data.length);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    fetchTotalProducts();
  }, []);

  const products = useLazyLoading(fetchProducts, batchSize) as Product[];

  return (
    <section className="pt-14">
      <GenericProductHeader
        header="STORE"
        secondHeader="All Products"
        text="Here you can find all of our products"
      />
      <p className="pl-10 text-sm">
        Viser {products.length} ud af {totalProducts} produkter
      </p>
      <GenericProducts products={products} />
    </section>
  );
};

export default Products;
