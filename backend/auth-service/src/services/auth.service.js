const bcrypt = require('bcrypt');

const userRepository = require('../repositories/user.repository');

const generateToken = require('../utils/jwt');

const register = async (data) => {
  const { name, email, password } = data;

  const exisitingUser = await userRepository.findUserByEmail(email);

  if (exisitingUser) {
    throw new Error('user already exists');
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const user = await userRepository.createUser({
    name,
    email,
    password: hasedPassword,
  });

  const token = generateToken(user._id);

  return { user, token };
};

module.exports = { register };
