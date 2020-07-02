// import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
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


const SignUpForm = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <form>
            <Grid item>
              <TextField
                name="username"
                id="username"
                label="New Username"
                type="username"
                value = {props.user.username}
                onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                id="password"
                label="New Password"
                type="password"
                value = {props.user.password}
                onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={props.handleAddUser}>
                Create Account
              </Button>
            </Grid>
            <Grid item>
              <h4>
                Already a user?
                <br />
                Log in here!{" "}
              </h4>
            </Grid>
            <Grid item>
              <Link to="/" className="nav-link">
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </Link>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUpForm
