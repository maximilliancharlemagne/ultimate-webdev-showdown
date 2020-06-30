const router = require('express').Router()
const{ User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// sign in funtionality
router.post('/users/signUp',(req, res)=>{
  const{ username, wins, loses } = req.body
  User.register(new User({ username, wins, loses }),req.body.password, err=>{
    if (err){console.log(err)}
    res.sendStatus(200)
  })
})

// login functionality
 router.post('/users/login',(req,res)=>{
   User.authenticate()(req.body.username, req.body.password, (err, user) => {
     if (err) { console.error(err) }
     res.json(user ? jwt.sign({id:user._id}, process.env.SECRET) : null)
    })
  })
module.exports = router