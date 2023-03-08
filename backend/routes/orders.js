const { Order } = require('../models/order');
const express = require('express');
const { OrderItem } = require('../models/order-item');
const router = express.Router();

router.get('/', async (req, res) => {
  const ordersList = await Order.find()
    .populate('user', 'firstName lastName phoneNumber')
    .sort({ dateOrdered: -1 });

  if (!ordersList) {
    res.status(500).json({ success: false });
  }
  res.send(ordersList);
});

router.post('/', async (req, res) => {
  const orderItemsIds = Promise.all(
    req.body.orderItems.map(async (orderItem) => {
      let newOrderItem = new OrderItem({
        quantity: orderItem.quantity,
        product: orderItem.product,
      });

      newOrderItem = await newOrderItem.save();

      return newOrderItem._id;
    })
  );
  const orderItemsIdsResolved = await orderItemsIds;
  console.log(orderItemsIdsResolved);
  let order = new Order({
    orderItems: orderItemsIdsResolved,
    phone: req.body.phone,
    totalPrice: req.body.totalPrice,
    user: req.body.user,
  });
  order = await order.save();

  if (!order) {
    return res.status(404).send('The order cannot be created.');
  }
  res.send(order);
});

module.exports = router;
