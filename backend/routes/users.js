const { User } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  const usersList = await User.find().select('-passwordHash');

  if (!usersList) {
    res.status(500).json({ success: false });
  }
  res.send(usersList);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).select('-passwordHash');

  if (!user) {
    res.status(500).json({ mesage: 'The user with the given ID was not found.' });
  }
  res.status(200).send(user);
});

router.get('/get/count', async (req, res) => {
  const userCount = await User.countDocuments().then((count) => count);

  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({ userCount: userCount });
});

router.post('/', async (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phoneNumber: req.body.phoneNumber,
    isAdmin: req.body.isAdmin,
  });
  user = await user.save();

  if (!user) {
    return res.status(400).send('The user cannot be created.');
  }

  res.send(user);
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.SECRET;

  if (!user) {
    return res.status(400).send('Can not log in user with current credentials.');
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: '1d' }
    );
    res.status(200).send({ user: user.email, toke: token });
  } else {
    res.status(400).send('Can not log in user with current credentials.');
  }
});

router.post('/register', async (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    phoneNumber: req.body.phoneNumber,
    isAdmin: req.body.isAdmin,
  });
  user = await user.save();

  if (!user) {
    return res.status(400).send('The user cannot be created.');
  }

  res.send(user);
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).json({ success: true, message: 'The user was deleted!' });
      } else {
        return res.status(404).json({ success: false, message: 'User not found!' });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

module.exports = router;
