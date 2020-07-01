import React from 'react'


import Grid from '@material-ui/core/Grid'


import UserNav from '../../components/UserNav'
import SignInForm from '../../components/SignInForm'


import UserContext from '../../utils/UserContext'


class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
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
        console.log(this.state.user.username)
        console.log(this.state.user.password)
      },
      handleUpdateUser: () => { },
      handleDeleteUser: () => { }
    }
  }
  render() {
    return(
      <UserContext.Provider value={this.state}>
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
        </Grid>
      </Grid>
      </UserContext.Provider>
  )
  }
}
export default SignIn


