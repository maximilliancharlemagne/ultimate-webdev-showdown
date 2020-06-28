import React from 'react';

//import mui-core components
import Card from '@material-ui/core/Card'

const PlayerCard = (props) => {
  return (
    <Card variant = "outlined" style = {{display: "inline-block"}}>
      <h2>Player {props.num}</h2>
      <img src = {props.imgSrc} alt = "player avatar"/>
      <h3>{props.playerName}</h3>
      <h3>Leaderboard Rank: {props.leaderBoardPos}</h3>
    </Card>
  )
}

export default PlayerCard