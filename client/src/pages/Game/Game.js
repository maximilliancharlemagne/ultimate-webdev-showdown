// import React
import React from 'react';

//import MUI core components
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//import custom components
import Navbar from '../../components/Navbar'
import GameArea from '../../components/GameArea'
import InfoArea from '../../components/InfoArea';

const Game = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Paper>
              <GameArea/>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <InfoArea currentPlayer = "Ben"/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Game