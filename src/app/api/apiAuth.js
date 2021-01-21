import axios from 'axios'

/**
 * cadastro: POST /api/projeto/cadastro
 * login: POST /api/projeto/login
 */

const apiAuth = axios.create({
  baseURL: 'http://paggue.io'
})

export default apiAuth