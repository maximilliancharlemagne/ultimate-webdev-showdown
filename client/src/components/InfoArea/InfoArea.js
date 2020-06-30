import React from 'react';

//import mui-core components
import Divider from '@material-ui/core/Divider'

//import custom components
import PlayerCard from '../PlayerCard'

class InfoArea extends React.Component {
  componentDidMount() {
    //do some stuff
    //with axios

    //¯\_( ツ )_/¯
  }
  
  render() {
    return (
      <>
        <h1>Info Area</h1>
        <PlayerCard num="1" playerName="Ben Roznos" leaderBoardPos="1" />
        <PlayerCard num="2" playerName="Kele Palafox" leaderBoardPos="2" />

        <Divider />

        <h2>###'s Turn</h2>

        <Divider />

        <h2>Score</h2>
        <h3>Player 1: </h3>
        <h3>Player 2: </h3>
        <h3>Draws: </h3>
      </>
    );
  }
}

export default InfoArea