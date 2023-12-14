import axios from 'axios'

const API = 'http://localhost:3306/api'

export const registerRequest = (user) => axios.post(`${API}/register`, user)