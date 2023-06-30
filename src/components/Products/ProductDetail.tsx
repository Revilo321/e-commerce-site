import { Product } from '@/types/productType';
import { useSession } from 'next-auth/react';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { name, description, image_url, price } = product;
  const { data: session } = useSession();
  const userId = session && session.user.id;

  const handleAddToCart = () => {
    fetch(`/api/cart/cart?userId=${userId}`, {
      method: 'POST',
      body: JSON.stringify({
        productId: product.id,
        quantity: 1,
      }),
    });
  };

  return (
    <>
      {product && image_url && (
        <div className="flex justify-center pt-10">
          <div className="w-1/4">
            <img src={image_url} alt="Product image" className="max-w-full" />
          </div>
          <div className="pl-14">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p className="text-lg mb-4">{price}</p>
            <p className="text-gray-600">{description}</p>
            <button
              className="bg-green-400 py-2 px-4 rounded-full text-sx"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
