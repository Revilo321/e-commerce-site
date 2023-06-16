import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add more columns as needed
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  },
);

export default User;
