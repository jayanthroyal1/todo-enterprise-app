const User = require('../models/user.model');

const createUser = (data) => {
  return User.create(data);
};

const findUserByEmail = (email) => {
  return User.findOne({ email });
};

module.exports = { createUser, findUserByEmail };
