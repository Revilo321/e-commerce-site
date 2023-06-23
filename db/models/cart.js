// Import necessary Sequelize modules
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Cart extends Model {}

Cart.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts',
    timestamps: false,
  },
);

export default Cart;
