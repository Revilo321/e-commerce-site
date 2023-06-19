import { Product } from '@/types/productType';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { id, name, description, image_url, price } = product;
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
            {/* Render other product details */}
          </div>
        </div>
      )}
    </>
  );
};
