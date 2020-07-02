// import React
import React from 'react';

// import React Router
import { Link } from 'react-router-dom'


// import MUI core components
// import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar';




//import custom components
import ProfileNav from '../../components/ProfileNav'


class Profile extends React.Component {
  // constructor() {
  //   super()

  // }

  render() {
    return (
      <>
        <ProfileNav />
        <Grid  
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Paper>
            <Grid item md={6}>
            
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

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

            <Link to="" className="nav-link">
                <Button variant="contained" color="primary">
                  Change Avatar
                </Button>
              </Link>

            </Grid>
            <Grid item md={6}>


            </Grid>
          </Paper>
        </Grid>
      </>


    );
  }
}

export default Profile
