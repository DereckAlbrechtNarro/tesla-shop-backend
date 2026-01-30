const express = require('express');
const { createCheckoutSession, createOrder } = require('../controllers/orderController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/checkout', authMiddleware, createCheckoutSession);
router.post('/', authMiddleware, createOrder);

module.exports = router;