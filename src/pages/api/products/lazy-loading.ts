import { NextApiRequest, NextApiResponse } from 'next';
import Product from 'db/models/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'GET') {
      throw new Error('Method Not Allowed');
    }
    const { batch, batchSize } = req.query;
    const products = await Product.findAll({
      limit: Number(batchSize),
      offset: Number(batch) * Number(batchSize),
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
