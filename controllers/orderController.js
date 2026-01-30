const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { Order, User } = require('../models');

exports.createCheckoutSession = async (req, res) => {
  const { products } = req.body; // array de {id, quantity}

  try {
    const line_items = await Promise.all(products.map(async (item) => {
      const product = await require('../models').Product.findByPk(item.id);
      if (!product) throw new Error('Producto no encontrado');
      return {
        price_data: {
          currency: 'usd',
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      };
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      metadata: { userId: req.user.id },
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.createOrder = async (req, res) => {
  const { total, products } = req.body;

  try {
    const order = await Order.create({
      userId: req.user.id,
      total,
      products,
      status: 'pending',
    });
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Error creando orden' });
  }
};