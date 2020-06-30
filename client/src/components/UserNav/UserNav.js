import React from 'react'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const UserNav = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid
            container
            direction="column"
            alignItems="center"
          >
            <Typography variant="subtitle1">
              Ultimate-Webdev-Showdown
            </Typography>
            <Typography variant="h5">
              Tic-Tac-Toe
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default UserNav
