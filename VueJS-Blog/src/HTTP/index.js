import axios from 'axios'

let HTTP = axios.create({
  baseURL: 'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles',
  Authorization: undefined
})

if (window.localStorage.getItem('api_key_header')) {
  HTTP.defaults.headers.common['Authorization'] = window.localStorage.getItem('api_key_header')
}

export default HTTP
