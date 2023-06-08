const mongoose = require('mongoose');
const  {Schema} = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {type: String, require: true},
    email: {type: String, require: true},
    thoughts:[ {type: Schema.Types.ObjectID, ref: 'Thought'} ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;