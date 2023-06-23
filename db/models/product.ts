import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

export interface ProductAttributes {
  name: string;
  description: string;
  price: number;
  image_url: string;
  isSpecialOffer: boolean;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public name!: string;
  public description!: string;
  public price!: number;
  public image_url!: string;
  public isSpecialOffer!: boolean;

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
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSpecialOffer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'products',
    timestamps: false,
  },
);

export default Product;
