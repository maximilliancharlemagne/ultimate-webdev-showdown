const router = require('express').Router()
const{ User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

//get player info
router.get('/users/',passport.authenticate('jwt'),(req,res) => {
  console.log('this route works')
  res.json(req.user)
})

// change user's avatar picture
router.put('/users/updateAvatar',passport.authenticate('jwt'),(req,res)=>{
  User.findByIdAndUpdate(req.user._id, { userAvatarImageLink: req.body.newLink},{new:true},(err,user)=>{
    res.json(user)
  })
})


// sign in funtionality
router.post('/users/signUp',(req, res)=>{
  const{ username, leaderboardRanking, userAvatarImageLink } = req.body
  User.register(new User({ username, leaderboardRanking, userAvatarImageLink }),req.body.password, err=>{
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

  // delete User
  router.delete('/users/deleteUser',passport.authenticate('jwt'),(req,res)=>{
    User.findByIdAndDelete(req.user._id, (err,user)=>{
      console.log(err)
      res.sendStatus(200)
    })
    
  })

  //
module.exports = router