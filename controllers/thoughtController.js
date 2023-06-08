const{Thought} = require('../models');

async function getAllThoughts(req, res) {
      const thoughts = await Thought.find();
      res.json(thoughts);
  }
  
  async function createThought(req, res) {
    const { thoughtText , username } = req.body;
    const newThought = await Thought.create({ thoughtText, username });
    res.json(newThought);
  }

module.exports = {
    getAllThoughts,
    createThought
};