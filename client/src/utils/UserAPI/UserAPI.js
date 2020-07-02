import axios from 'axios'

const UserAPI = {

  login:(username, password)=>{
    axios.post('api/users/login',{
      username: username,
      password: password
    })
      .then(({ data }) => {
        console.log(data)
        if(data){
          localStorage.setItem('JWT',data)
        } else{
          console.log('incorrect Username or Password')
        }
      })},
    signUp:(username,password)=>{
      axios.post('api/users/signUp',{
        username: username,
        leaderboardRanking: 0, 
        userAvatarImageLink: '',
        password: password
      })
      .then(({data})=>{
        console.log(data)
      })
    },
}

export default UserAPI
