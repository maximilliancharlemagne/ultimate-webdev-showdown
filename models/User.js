const { model, Schema } = require('mongoose')

const User = new Schema({
  username: String,
  leaderboardRanking: Number,
  userAvatarImageLink: String
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
