import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? "api/1" : "http://localhost:5000/api/1"

export default axios.create({
    baseURL 
})
 