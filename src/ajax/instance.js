import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:34525/lab4_back/',
    withCredentials: true,
    headers: {
        accept: 'application/json',
    }
})

instance.defaults.withCredentials = true

export default instance
