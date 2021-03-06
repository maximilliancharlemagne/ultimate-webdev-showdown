import React from 'react'
import { Link } from 'react-router-dom'

//import MUI makestyles tool
import { makeStyles } from "@material-ui/core/styles"

//import MUI core components
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

//import MUI icon components
import MenuIcon from "@material-ui/icons/Menu"


//create styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const ProfileNav = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
            <Button to ="/game" component = {Link} variant="contained" color="primary">
              Go To Game
            </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("JWT");
              window.location = "signIn";
            }}
            variant="contained"
            color="primary"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ProfileNav

// color = "primary.contrastText"