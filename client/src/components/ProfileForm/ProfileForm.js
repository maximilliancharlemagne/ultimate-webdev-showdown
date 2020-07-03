// import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

//import MUI makestyles tool
import { makeStyles } from '@material-ui/core/styles'

//import MUI core components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


//create styles
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



const ProfileForm = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <form >
            <Grid item>
              <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item>
              <TextField
                name="avatar"
                id="avatar-input"
                label="Paste Avatar Link"
                type="url"
                autoComplete="Paste Avatar URL"
              // value={props.user.password}
              // onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item>
              <Link to="" className="nav-link">
                <Button variant="contained" color="primary">
                  Change Avatar
                </Button>
              </Link>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  )
}

export default ProfileForm