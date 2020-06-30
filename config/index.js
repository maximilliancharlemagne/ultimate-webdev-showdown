module.exports = require('mongoose').connect(`mongodb://localhost/webdevdb`,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})