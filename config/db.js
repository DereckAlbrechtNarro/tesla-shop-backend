const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('PostgreSQL conectado en Render'))
  .catch(err => console.log('Error DB:', err));

module.exports = sequelize;