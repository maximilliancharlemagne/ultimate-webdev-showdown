//import React
import React from 'react'

//import socket.io
import io from 'socket.io'

//setup socket
let socket = io()

//import custom components
import Square from '../Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      isXTurn: true
    }
  }

  //credit to React Tic Tac Toe tutorial: https://reactjs.org/tutorial/tutorial.html

  handleClick (i) {
    //emit a socket.io from handleClick
    socket.emit('squareClick',{data: {side: localStorage.getItem('side'), index: i}})
    
    const squares = this.state.squares.slice()
    squares[i] = this.state.isXTurn? 'X' : 'O'
    this.setState({squares: squares, isXTurn: !this.state.isXTurn})
  }

  renderSquare (i) {
    return (
      <Square
        value = {this.state.squares[i]}
        handleClick = {() => {this.handleClick(i)}}
      />
    )
  }

  render () {
    return (
      <>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}

export default Board
