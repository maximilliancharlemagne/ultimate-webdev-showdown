import React from 'react'

//import custom components
import Board from '../Board'

const GameArea = (props) => {
    return (
      <>
        <h1>Game Area</h1>
        <Board side = {props.side}/>
      </>
    );
}

export default GameArea