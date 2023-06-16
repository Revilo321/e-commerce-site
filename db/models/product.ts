import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export interface ProductAttributes {
  name: string;
  description: string;
  price: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public name!: string;
  public description!: string;
  public price!: number;

  // You can define additional methods or associations here

  // Define the table name explicitly
  static tableName = 'products';
}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Product',
    timestamps: false,
  },
);

export default Product;
