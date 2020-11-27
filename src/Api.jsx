import axios from 'axios'

export const getBlogs = () => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog`
    return axios.get(baseURL)
}

export const getBlog = id => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}`;
  return axios.get(baseURL);
};

export const getLatestBlog = () => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/latest`;
  return axios.get(baseURL);
};

export const postBlog = (description) => {
  const baseURL = 'https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/new'
  return axios.post(baseURL, {description}).then(res => {
    return res.data;
  })
}

