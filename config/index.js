module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCALDB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
