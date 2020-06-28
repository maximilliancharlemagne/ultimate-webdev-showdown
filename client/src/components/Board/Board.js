import React from 'react'

//import custom components
import Square from '../Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      boardState: [['X','O','X'],['X',' ','O'],['X','X','X']]
    }
  }

  render () {
    return (
      <>
        {this.state.boardState.map(elem => {
          return (
            <div>
              {elem.map(subElem => {
                return (
                  <Square text={subElem}/>
                )
              })}
            </div>
          )
        })}
      </>
    );
  }
}

export default Board