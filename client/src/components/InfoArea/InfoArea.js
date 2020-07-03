//import axios
import axios from 'axios';

//import React
import React from 'react';

//import mui-core components
import Divider from '@material-ui/core/Divider'

//import custom components
import PlayerCard from '../PlayerCard'

class InfoArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      p1: {
        num: "1",
        name: "",
        leaderBoardPos: "",
      },
      p2: {
        num: "2",
        name: "",
        leaderBoardPos: "",
      },
    };
  }
  componentDidMount() {
    //who is the active player???
    let currentJWT = localStorage.getItem('JWT')
    axios.get(`/api/users/`,{headers: {'Authorization': `Bearer ${currentJWT}`}})
    .then(({data}) => {
      console.log(data)
      this.setState({player: {...this.state.player, name: data.name, leaderboardRanking: data.leaderboardRanking}})
    })
    .catch(err => console.error(err))
  }
  
  render() {
    return (
      <>
        <h1>Info Area</h1>
        <PlayerCard
          playerName={this.state.player.name}
          leaderBoardPos={this.state.player.leaderboardRanking}
        />
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
