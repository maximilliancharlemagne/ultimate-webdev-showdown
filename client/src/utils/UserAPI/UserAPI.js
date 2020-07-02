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


  getUser:() => axios.get('/api/user'),
  createUsername: item => axios.post('/api/user'),
  updateUsername: (id, updates) => axios.put(`/api/user/${id}`, updates),
  deleteUsername: id => axios.delete(`/api/user/${id}`)
}

export default UserAPI
