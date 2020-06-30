const { model, Schema } = require('mongoose')

const User = new Schema({
  username: String,
  wins: Number,
  loses: Number,
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)