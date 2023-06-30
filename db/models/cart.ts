import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'db/database'; // Replace with your Sequelize instance
import Product from './product';

interface CartItemAttributes {
  id: number;
  user_id: string;
  product_id: number;
  quantity: number;
  created_at?: Date;
  updated_at?: Date;
}

type CartItemCreationAttributes = Optional<CartItemAttributes, 'id'>;

class CartItem
  extends Model<CartItemAttributes, CartItemCreationAttributes>
  implements CartItemAttributes
{
  public id!: number;
  public user_id!: string;
  public product_id!: number;
  public quantity!: number;
  public created_at?: Date;
  public updated_at?: Date;

  // Add any associations or additional methods here

  // Timestamps are enabled by default in Sequelize
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'cart_items',
    timestamps: true,
    underscored: true,
  },
);

// Fetches cart items for a given user ID
export async function getCartItems(user_id: string) {
  const cartItems = await CartItem.findAll({
    where: {
      user_id,
    },
  });

  // Fetch associated product information for each cart item
  const cartItemsWithProducts = await Promise.all(
    cartItems.map(async (cartItem: any) => {
      const product = await Product.findByPk(cartItem.product_id);
      if (product) {
        return {
          id: cartItem.id,
          userId: cartItem.user_id,
          productId: cartItem.product_id,
          quantity: cartItem.quantity,
          createdAt: cartItem.createdAt,
          updatedAt: cartItem.updatedAt,
          product: {
            name: product.name,
            price: product.price,
            description: product.description,
            image_url: product.image_url,
          },
        };
      }
      return null;
    }),
  );

  return cartItemsWithProducts.filter((item) => item !== null);
}

export async function updateCartItems(user_id: string, item: any) {
  const existingCartItem = await CartItem.findOne({
    where: {
      user_id,
      product_id: item.productId,
    },
  });

  if (existingCartItem) {
    existingCartItem.quantity += item.quantity;
    await existingCartItem.save();
    return existingCartItem;
  } else {
    const newCartItem = await CartItem.create({
      user_id,
      product_id: item.productId,
      quantity: item.quantity,
    });
    return newCartItem;
  }
}

export async function deleteCartItems(user_id: string) {
  await CartItem.destroy({
    where: {
      user_id,
    },
  });
}

export default CartItem;
