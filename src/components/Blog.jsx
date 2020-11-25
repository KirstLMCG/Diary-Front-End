import React, { Component } from 'react'
import { Link } from '@reach/router'
import { getBlogs, getBlog } from '../Api.jsx'


export default class Blog extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    getBlogs()
      .then(res => {
          // console.log(res.data)
          this.setState({blogs: res.data})
      })
      .catch(err => {
          console.log(err)
      })
  }

  render() {
      const {blogs} = this.state;
        return (
      <div className="blog-container">
        <button className="create-blog-button">Create new blog</button>
          <p className="blog-header">Blogs</p>
            <ul className="blog-ul">
             {blogs.map((blog) => (
               <li key={blog._id}>
                 <Link to={`/blog/${blog._id}`} style={{textDecoration: "none"}}>
                 <div className="blog-title">{new Date(blog.title).toLocaleDateString()}</div>
                 <div className="blog-description">{blog.description}</div>
                 </Link>
               </li>
            ))}
          </ul> 
      </div>
    )
  }
}