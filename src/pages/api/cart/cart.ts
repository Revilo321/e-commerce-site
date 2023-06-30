import { getCartItems, updateCartItems } from 'db/models/cart';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, query } = req;
  const userId = query.userId as string;

  if (method === 'GET') {
    try {
      const cartItems = await getCartItems(userId);
      res.status(200).json(cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  } else if (method === 'POST') {
    try {
      const item = JSON.parse(req.body);
      const updatedCartItems = await updateCartItems(userId, item);
      res.status(200).json(updatedCartItems);
    } catch (error) {
      console.error('Error updating cart items:', error);
      res.status(500).json({ error: 'Failed to update cart items' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
