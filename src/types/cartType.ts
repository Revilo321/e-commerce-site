import Product from 'db/models/product';

export interface CartItems {
  id: number;
  userId: string;
  productId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
}
