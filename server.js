require('dotenv').config()

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const path = require('path')

express.static(path.join(__dirname,'client','build'))

// Socket.io server listens to our app
let io = require('socket.io').listen(server);

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


server.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)
})