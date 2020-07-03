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
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    margin: '20px',
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '20px',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: '10px',
    marginLeft: '65px',
  },
}));



const ProfileForm = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper className={classes.paper}>
          <form >
            <Paper className={classes.paper}>

              <Grid item>
                <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" className={classes.avatar} />
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
            </Paper>
            <Paper borderColor="secondary.main" className={classes.paper}>
              <Grid item>
                <Link to="" className="nav-link">
                  <Button variant="contained" color="secondary">
                    Delete Profile
                </Button>
                </Link>
              </Grid>
            </Paper>
          </form>
        </Paper>
      </Grid>
    </div>
  )
}

export default ProfileForm