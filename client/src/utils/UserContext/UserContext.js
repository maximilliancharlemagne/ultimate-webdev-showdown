import { createContext } from 'react'

const UserContext = createContext({
  username: '',
  password: '',


  handleUsernameChange: () => { },
  handleAddUsername: () => { },
  handleUpdateUsername: () => { },
  handleDeleteUsername: () => { },

  handlePasswordChange: () => { },
  handleAddPassword: () => { },
  handleAddPassword: () => { },
  handleUpdatePassword: () => { },
  handleDeletePassword: () => { }

  // OR

    User: [{
    username: '',
    password: '',
  }
  ],

  handleInputChange: () => { },
  handleAddUser: () => { },
  handleUpdateUser: () => { },
  handleDeleteUser: () => { }
})

export default UserContext

// SignInForm textFields
// username-input
// password-input

// SignUpForm textFields
// new-password-input
// new-username-input