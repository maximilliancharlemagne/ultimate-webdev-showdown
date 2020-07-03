import openSocket from "socket.io-client";
const socket = openSocket();

function listenToBoard(cb) {
  socket.on('boardEvent', (data) => {
    cb(data)
  })

}

function sendSquareClickEvent(side,index) {
  //emit a socket.io from handleClick
  console.log('sending click event...')
  socket.emit('squareClick',{side, index})
}

function assignSide(cb) {
  socket.on("welcome", function (data) {
    console.log(data)
    cb(data)
  });
}

export {listenToBoard, sendSquareClickEvent, assignSide}