module.exports = require('mongoose').connect(`mongodb://localhost/${process.env.MONGODB_URI || process.env.LOCALDB_URI}`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
