import React from 'react';

//import mui-core components
import Divider from '@material-ui/core/Divider'

//import custom components
import PlayerCard from '../PlayerCard'

const InfoArea = (props) => {
  return (
    <>
      <h1>Info Area</h1>
      <PlayerCard num="1" playerName="Ben Roznos" leaderBoardPos="1" />
      <PlayerCard num="2" playerName="Kele Palafox" leaderBoardPos="2" />

      <Divider />

      <h2>{props.currentPlayer}'s Turn</h2>

      <Divider />

      <h2>Score</h2>
      <h3>Player 1: </h3>
      <h3>Player 2: </h3>
      <h3>Draws: </h3>
    </>
  );
}

export default InfoArea