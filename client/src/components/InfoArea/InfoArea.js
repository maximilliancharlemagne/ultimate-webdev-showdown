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

    axios.get(`/api/player/${JWT}`)
    .then(({data}) => {
      if(localStorage.getItem('side') == 'x'){
        this.setState({
          p1: {
            num: "1",
            name: data.name,
            leaderBoardPos: data.leaderBoardPos,
          },
        });
      }
      else{
        this.setState({
          p2: {
            num: "1",
            name: "",
            leaderBoardPos: data.leaderBoardPos,
          },
        });
      }
    })
    .catch(err => console.error(err))
  }
  
  render() {
    return (
      <>
        <h1>Info Area</h1>
        <PlayerCard
          num="1"
          playerName={this.state.p1.name}
          leaderBoardPos={this.state.p1.leaderBoardPos}
        />
        <PlayerCard
          num="2"
          playerName={this.state.p2.name}
          leaderBoardPos={this.state.p2.leaderBoardPos}
        />
        />
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