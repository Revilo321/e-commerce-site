import { GenericProductHeader } from '@/components/Homepage/GenericProductHeader';
import { GenericProducts } from '@/components/Homepage/GenericProducts';
import { ProductContext } from '@/context/ProductContext';
import { useContext } from 'react';

const Products = () => {
  const { products, totalProducts } = useContext(ProductContext);

  return (
    <section className="pt-14">
      <GenericProductHeader
        header="STORE"
        secondHeader="All Products"
        text="Here you can find all of our products"
      />
      <div className="flex justify-center pb-5">
        <p className="text-sm">
          Viser {products.length} ud af {totalProducts} produkter
        </p>
      </div>
      <div className="h-px bg-gray-200" />
      <GenericProducts products={products} />
    </section>
  );
};

export default Products;
