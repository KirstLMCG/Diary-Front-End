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

export const deleteBlog = id => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}`;
  return axios.delete(baseURL).then(res => {
    return res.data
  })
}

export const getFlares = () => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/flaretracking/`
  return axios.get(baseURL)
}

export const getFlaresForBlog = (id) => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}/flares/`
  return axios.get(baseURL)
}

export const postFlare = (id, head, neck, hands, arms, stomach, back, legs, feet) => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}/flaretracking`
  return axios.post(baseURL, {head, neck, hands, arms, stomach, back, legs, feet}).then(res => {
    return res.data
  })
}

export const postFood = (id, breakfast, lunch, dinner, snacks) => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}/foodtracking`
  return axios.post(baseURL, {breakfast, lunch, dinner, snacks}).then(res => {
    return res.data
  })
}

export const getFoodForBlogId = (id) => {
  const baseURL = `https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog/${id}/food/`
  return axios.get(baseURL)
}