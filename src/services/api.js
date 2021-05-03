import axios from 'axios'

const api = axios.create({
  baseURL: 'https://processo.profranchising.com.br',
  headers: {
    'Content-type': 'application/json'
  }
})

export default api