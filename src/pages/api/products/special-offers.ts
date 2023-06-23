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

    const products = await Product.findAll({
      where: {
        isSpecialOffer: true,
      },
      limit: 3,
    });

    res.json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
