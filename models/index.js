const sequelize = require('../config/db');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');

module.exports = {
  sequelize,
  User,
  Product,
  Order,
};