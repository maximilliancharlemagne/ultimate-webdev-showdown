// import React
import React from 'react';

//import MUI core components
// import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

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
        <Grid container>
          <Paper>
            <Grid item md={6}>



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
