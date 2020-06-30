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


// Socket.io server listens to our app
let io = require('socket.io').listen(app);

// Send current time to all connected clients
function sendTime() {
    io.emit('time', { time: new Date().toJSON() });
}

// Send current time every 10 secs
setInterval(sendTime, 3000);


let x = true;


function xoChooser() {
  let piece = x? "x" : "o"
  x = !x
  return piece
}




// Emit welcome message on connection
io.on('connection', function(socket) {

  test = xoChooser()
   
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: test });
    
    socket.on('i am client', console.log);
});


app.use(require("./routes"))
require('./config')
.then(()=>app.listen(process.env.PORT))
.catch(err=>console.log(err))

