import React from 'react'

//import custom components
import Board from '../Board'

class GameArea extends React.Component {
  render = () => {
    return (
      <>
        <h1>Game Area</h1>
        <Board/>
      </>
    );
  }
}

export default GameArea