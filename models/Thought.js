const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, require: true, maxlength: 280},
    username: {type: String, require: true}
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = Thought; 