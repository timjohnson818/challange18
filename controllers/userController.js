const{User} = require('../models');

async function getAllUsers(req, res) {
      const users = await User.find();
      res.json(users);
  }
  
  async function createUser(req, res) {
    const { name , email } = req.body;
    const newUser = await User.create({ name, email });
    res.json(newUser);
  }

module.exports = {
    getAllUsers,
    createUser
};