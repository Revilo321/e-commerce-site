import Cart from '@/components/Cart/Cart';
import { GenericProductHeader } from '@/components/Homepage/GenericProductHeader';
import { GenericProducts } from '@/components/Homepage/GenericProducts';
import { ProductContext } from '@/context/ProductContext';
import withAuth from '@/hooks/withAuth';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';

const Products = () => {
  const { products, totalProducts } = useContext(ProductContext);
  const { data: session } = useSession();

  return (
    <section className="pt-14">
      <GenericProductHeader
        header="STORE"
        secondHeader="All Products"
        text="Here you can find all of our products"
      />
      {session && <Cart userId={session?.user.id} />}
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

export default withAuth(Products);
