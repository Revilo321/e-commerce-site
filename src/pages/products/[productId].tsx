import { ProductDetail } from '@/components/Products/ProductDetail';
import { Product } from '@/types/productType';
import { useRouter } from 'next/router';

export default function ProductDetailPage() {
  const router = useRouter();

  const product = router.query as unknown as Product;

  return <ProductDetail product={product} />;
}
