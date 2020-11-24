import React, { Component } from 'react'
// import { getBlogs } from '../api.jsx'
import axios from 'axios'

export default class Blog extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    axios.get(`https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/blog`)
      .then(res => {
          console.log(res.data)
          this.setState({blogs: res.data})
      })
      .catch(err => {
          console.log(err)
      })
  }

  render() {
      const {blogs} = this.state;
        return (
      <div>
      <p className="blog-header">Blogs</p>
      <p className="blog-description">Hi</p>
        <ul className="blog-ul">
        {blogs.map((blog) => (
              <li key={blog.id}>
                <div className="blog-title">{blog.title}</div>
                <div className="blog-description">{blog.description}</div>
              </li>
            ))}
        </ul> 
      </div>
    )
  }
}


