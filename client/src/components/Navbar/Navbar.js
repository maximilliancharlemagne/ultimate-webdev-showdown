import React from 'react';

//import MUI makestyles tool
import { makeStyles } from "@material-ui/core/styles";

//import MUI core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

//import MUI icon components
import MenuIcon from "@material-ui/icons/Menu";

//create styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Game
          </Typography>
          <Button color="inherit">Settings</Button>
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar