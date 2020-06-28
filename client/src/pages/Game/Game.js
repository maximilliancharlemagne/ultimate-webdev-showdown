// import React
import React from 'react';

//import MUI core components
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

//import custom components
import Navbar from '../../components/Navbar'
import GameArea from '../../components/GameArea'

const Game = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <Grid container>
          <Grid item md={9}>
            <Paper>
              <GameArea/>
            </Paper>
          </Grid>
          <Grid item md={3}>
            <Paper>
              <h1>Info Area</h1>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Game