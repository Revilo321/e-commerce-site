// Import necessary Sequelize modules
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Order extends Model {}

Order.init(
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
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: false,
  },
);

export default Order;
