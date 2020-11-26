import React, { Component } from 'react'
import { Link } from '@reach/router'
import { getBlogs } from '../Api.jsx'
import AddBlog from '../components/AddBlog.jsx'


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
  
  newPostedBlog = addedNewBlog => {
    this.setState(currentState => {
      return {
        blogs: [addedNewBlog, ...currentState.blogs]
      };
    });
  };
  
  onClick = () => {
    
  } 
  
  render() {
      const {blogs} = this.state;
        return (
      <div className="blog-container">
        <Link to={`/blog/new`}>
        <button className="create-blog-button">Create new blog</button>
        </Link>
          <p className="blog-header">Blogs</p>
            <ul className="blog-ul">
             {blogs.map((blog) => (
               <li key={blog._id}>
                 <Link to={`/blog/${blog._id}`} className="link-to-single-blog">
                 <div className="blog-title">{new Date(blog.title).toLocaleDateString()}</div>
                 </Link>
                 <div className="blog-description">{blog.description}</div>
                 <div className="diary-btn-container">
                 <button className='diary-btn' onClick={this.handleClick}> Diary </button>
                 </div>
               </li>
            ))}
          </ul> 
      </div>
    )
  }
}