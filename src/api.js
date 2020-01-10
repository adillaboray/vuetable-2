import axios from 'axios'

const Api = axios.create({
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  }
})

export default Api