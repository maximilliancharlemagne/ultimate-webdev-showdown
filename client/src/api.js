import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

function listenToBoard(cb) {
  socket.on('squareClick', () => {
    console.log(data)
  })

}

function sendSquareClickEvent(side,index,cb) {
  //emit a socket.io from handleClick
  socket.emit('squareClick',{side, index})
}

function assignSide(cb) {
  socket.on("welcome", function (data,cb) {
    cb(data)
  });
}

export {listenToBoard, sendSquareClickEvent, assignSide}