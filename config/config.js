require('dotenv').config();

// Get the environment-specific configuration
const config = {
  development: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'pass',
    database: 'ecommerce',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'database_production',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
};

module.exports = config;
