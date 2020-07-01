import { createContext } from 'react'

const UserContext = createContext({
  user: {}
  
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