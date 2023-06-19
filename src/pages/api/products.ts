import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../db/models/product'; // Import the Product model

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { sort } = req.query;
  if (req.method === 'GET') {
    try {
      let products;
      if (sort === 'desc') {
        products = await Product.findAll({
          order: [['created_at', 'DESC']],
          limit: 3,
        });
        //TODO: Improve the logic below
      } else if (req.query.specialOffers === '') {
        products = await Product.findAll({
          where: {
            isSpecialOffer: true,
          },
          limit: 3,
        });
      } else {
        products = await Product.findAll();
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    const { name, description, price, image_url, isSpecialOffer } = req.body;
    try {
      const product = await Product.create({
        name,
        description,
        price,
        image_url,
        isSpecialOffer,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
