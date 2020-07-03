//import CSS
import React from 'react';

//import mui-core components
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'

//import CSS
import './PlayerCard.css'

const PlayerCard = (props) => {
  return (
    <Card variant="outlined" style={{ display: "inline-block" }}>
      <h2>Player {props.num}</h2>
      <Avatar alt="Avatar" src={props.imgSrc} className="avatar" />
      <h3>{props.playerName}</h3>
      <h3>Leaderboard Rank: {props.leaderBoardPos}</h3>
    </Card>
  );
}

export default PlayerCard