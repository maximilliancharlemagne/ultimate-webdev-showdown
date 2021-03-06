//import React
import React from 'react'

//import mui core components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";

//import custom components
import UserNav from '../../components/UserNav'
import SignUpForm from '../../components/SignUpForm'

//import utils
import UserAPI from '../../utils/UserAPI'


class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      },
    handleInputChange: (event) => {
      let newValue = event.target.value
      this.setState({user: {...this.state.user,
        [event.target.name]: newValue
      }})
    },
    handleAddUser: (event) => { 
      event.preventDefault()
      console.log(this.state.user.username)
      console.log(this.state.user.password)
      let username = this.state.user.username
      let password = this.state.user.password
      UserAPI.signUp(username, password)
    },
    handleUpdateUser: () => { },
    handleDeleteUser: () => { }
    }
  }
  render() {
      return (
        <>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <UserNav />
            </Grid>
            <Grid item>
              {/* <Paper>
                <Typography variant="h2">
                  <UserContext.Consumer>
                  {value => <p>{value.user.username}</p>}
                  </UserContext.Consumer>
                </Typography>
              </Paper> */}
              <SignUpForm user = {this.state.user}
              handleInputChange = {this.state.handleInputChange}
              handleAddUser = {this.state.handleAddUser}/>
            </Grid>
          </Grid>
        </>
      );
  }
}

export default SignUp

