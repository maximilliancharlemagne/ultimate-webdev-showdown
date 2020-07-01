require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const http = require('http')

const { User } = require('./models')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

express.static(path.join(__dirname,'client','build'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())
app.use(require("./routes"))

const server = http.createServer(app)
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
let io = require('socket.io').listen(server);

// Send current time to all connected clients
//function sendTime() {
//    io.emit('time', { time: new Date().toJSON() });
//}


let x = true;
function xoChooser() {
  let piece = x? "x" : "o"
  x = !x
  return piece
}


// Emit welcome message on connection
io.on('connection', function(socket) {

  side = xoChooser()
  socket.emit('welcome', { side });

  socket.on("squareClick", function (data) {
    console.log("hey we heard you");
    console.log(data)
    io.emit("boardEvent", data)
  });
    
});


require('./config')
.then( ()=> {
  server.listen(process.env.PORT)
  console.log(`Server running on: ` + process.env.PORT)})
.catch(err=>console.log(err))

