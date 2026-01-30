require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => res.send('Tesla Shop Backend - Hackathon 17'));

sequelize.sync({ alter: true }).then(() => {
  console.log('Modelos sincronizados');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Servidor en puerto ${process.env.PORT || 5000} 🚀🔥`);
  });
}).catch(err => console.log('Error sync DB:', err));