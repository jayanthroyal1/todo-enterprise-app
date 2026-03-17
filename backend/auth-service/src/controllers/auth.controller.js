const authService = require('../services/auth.service');

const resgister = async (req, res) => {
  try {
    const result = await authService.register(req.body);

    res.status(201).json(result);
  } catch (err) {
    console.error('Unable to register', err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { resgister };
