// https://git.heroku.com/lit-stream-42769.git

import axios from 'axios'

export const getBlogs = () => {
    return axios.get('https://localhost:8081/blog')
}

