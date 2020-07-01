//import React
import React from 'react'

//import custom components
import Square from '../Square'

//import socket api

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  //credit to React Tic Tac Toe tutorial: https://reactjs.org/tutorial/tutorial.html

  handleClick (i) {
    console.log(this.props.side)
    const squares = this.state.squares.slice()
    squares[i] = this.props.side.toUpperCase()
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
