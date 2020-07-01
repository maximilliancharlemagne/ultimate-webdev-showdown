import axios from 'axios'

const UserAPI = {
  getUser: () => axios.get('/api/user'),
  createUsername: item => axios.post('/api/user', username),
  updateUsername: (id, updates) => axios.put(`/api/user/${id}`, updates),
  deleteUsername: id => axios.delete(`/api/user/${id}`)
}

export default UserAPI
