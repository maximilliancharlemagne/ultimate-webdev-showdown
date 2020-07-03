// import React
import React from 'react';

// import React Router
import { Link } from 'react-router-dom'

// import MUI core components
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Button from '@material-ui/core/Button'

//import custom components
import ProfileNav from '../../components/ProfileNav'
import ProfileForm from '../../components/ProfileForm'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userAvatarImageLink: ''
      },
      handleInputChange: (event) => {
        let newValue = event.target.value
        this.setState({
          user: {
            ...this.state.user,
            [event.target.name]: newValue
          }
        })
      },
      handleAddUser: (event) => {
        event.preventDefault()
        let userAvatarImageLink = this.state.user.userAvatarImageLink
        console.log(this.state.user.userAvatarImageLink)
        // UserAPI.login(userAvatarImageLink)
      },
      handleUpdateUser: () => { },
      handleDeleteUser: () => { }
    }
  }

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
          <Grid item>
            <ProfileForm />
          </Grid>
          <Grid item>
            <Paper>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Profile
