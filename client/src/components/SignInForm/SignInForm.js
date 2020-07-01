// import React from 'react'
import React, { useContext } from 'react'
import UserContext from '../../utils/UserContext'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




const SignInForm = () => {
  const classes = useStyles()
  return (

    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <form onSubmit={handleAddItem}>
            <Grid item>
              <TextField
                id="username-input"
                label="Username"
                type="username"
                autoComplete="current-username"
                onChange={handleUsernameChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary"
                onClick={handleAddItem}>
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <h4>Dont' have an account?<br />Sign up here!</h4>
            </Grid>
            <Grid item>
              <Link to="/SignUp" className="nav-link">
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
              </Link>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>

  )
}

export default SignInForm