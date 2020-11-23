// https://git.heroku.com/lit-stream-42769.git

import axios from 'axios'

export const getBlogs = () => {
    return axios.get('https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog')
}

