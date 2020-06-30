import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserNav from '../../components/UserNav'
import SignUpForm from '../../components/SignUpForm'



const SignUp = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
        <UserNav />
        </Grid>
        <Grid item>
          <SignUpForm />
        </Grid>
      </Grid>
    </>
  )
}

export default SignUp

