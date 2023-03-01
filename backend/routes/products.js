const { Product } = require('../models/product');
const express = require('express');
const { Category } = require('../models/category');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
  let filter = {};
  if (req.query.categories) {
    filter = { category: req.query.categories.split(',') };
  }
  const productsList = await Product.find(filter).populate('category');

  if (!productsList) {
    res.status(500).json({ success: false });
  }
  res.send(productsList);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');

  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
});

router.post('/', async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(400).send('Invalid category');
  }
  let product = new Product({
    name: req.body.name,
    nameTranslation: req.body.nameTranslation,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isAvailable: req.body.isAvailable,
  });

  product = await product.save();

  if (!product) {
    return res.status(500).send('The product cannot be created');
  }
  res.send(product);
});

router.put('/:id', async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).send('Invalid product ID');
  }
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(400).send('Invalid category');
  }

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      nameTranslation: req.body.nameTranslation,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      category: req.body.category,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isAvailable: req.body.isAvailable,
    },
    { new: true }
  );

  if (!product) {
    return res.status(400).send('The product cannot be updated!');
  }

  res.send(product);
});

router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then((product) => {
      if (product) {
        return res.status(200).json({ success: true, message: 'The product was deleted!' });
      } else {
        return res.status(404).json({ success: false, message: 'Product not found!' });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

router.get('/get/count', async (req, res) => {
  const productCount = await Product.countDocuments().then((count) => count);

  if (!productCount) {
    res.status(500).json({ success: false });
  }
  res.send({ productCount: productCount });
});

router.get('/get/available', async (req, res) => {
  const products = await Product.find({ isAvailable: true });

  if (!products) {
    res.status(500).json({ success: false });
  }
  res.send(products);
});

module.exports = router;
