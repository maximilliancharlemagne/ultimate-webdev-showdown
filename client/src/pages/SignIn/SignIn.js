//import React
import React from 'react'

//import mui core components
import Grid from '@material-ui/core/Grid'

//import custom components
import UserNav from '../../components/UserNav'
import SignInForm from '../../components/SignInForm'

//import API
import UserAPI from '../../utils/UserAPI'


class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      },
      error: '',
      setError: () => {
        this.setState({error: 'Incorrect username or password.'})
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
        let username = this.state.user.username
        let password = this.state.user.password
        console.log(this.state.user.username)
        console.log(this.state.user.password)
        UserAPI.login(username, password,this.state.setError)
      },
      handleUpdateUser: () => { },
      handleDeleteUser: () => { }
    }
  }
  render() {
    return(
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
            <SignInForm user = {this.state.user}
              handleInputChange = {this.state.handleInputChange}
              handleAddUser = {this.state.handleAddUser} />
              <p>{this.state.error}</p>
        </Grid>
      </Grid>
      </>
  )
  }
}
export default SignIn


