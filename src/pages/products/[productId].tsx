import { ProductDetail } from '@/components/Products/ProductDetail';
import { Product } from '@/types/productType';
import { useRouter } from 'next/router'; // Assuming you have a Product type defined

export default function ProductDetailPage() {
  const router = useRouter();

  const product = router.query as unknown as Product;

  return <ProductDetail product={product} />;
}
