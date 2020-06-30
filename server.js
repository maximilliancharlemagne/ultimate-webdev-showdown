require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')

const { User } = require('./models')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

express.static(path.join(__dirname,'client','build'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())


passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
},({id},cb)=>User.findById(id)
.then(user=>cb(null,user))
.catch(err=>cb(err))))


app.use(require("./routes"))
require('./config')
.then(()=>app.listen(process.env.PORT))
.catch(err=>console.log(err))
