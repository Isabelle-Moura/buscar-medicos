import axios from 'axios'

const baseURL = 'https://api.buscarmedicos.izap.dev'

export default axios.create({
  baseURL
})
