import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNav from '../../components/UserNav'
import SignInForm from '../../components/SignInForm'



const SignIn = () => {
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
          <SignInForm />
        </Grid>
      </Grid>
    </>
  )
}

export default SignIn


