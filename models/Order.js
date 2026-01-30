const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
  },
  paymentId: {
    type: DataTypes.STRING,
  },
  products: {
    type: DataTypes.JSON, // array de {productId, quantity, price}
    allowNull: false,
  },
});

Order.belongsTo(User, { foreignKey: 'userId' });

module.exports = Order;