const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const productsList = await Product.find();

  if (!productsList) {
    res.status(500).json({ success: false });
  }
  res.send(productsList);
});

module.exports = router;
