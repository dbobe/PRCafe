const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
  phoneNumber: Number,
  isAdmin: Boolean,
});

exports.User = mongoose.model('User', userSchema);
