import React, { Component } from 'react'
import { getBlog } from '../Api.jsx'
import { Link } from '@reach/router'

export default class SingleBlog extends Component {
  state = {
    blog: []
  }
  
  componentDidMount() {
      getBlog(this.props.id)
        .then(res => {
            console.log(res.data._id)
          this.setState({ blog: res.data})
        })
        .catch(err => {
            console.log(err)
        })
  }
  
    render() {
      const { blog } = this.state; 

      return (
        <main>
          <Link to={`/`}>
            <button className="single-blog-back-btn"> Back </button>
          </Link>
            <div className="single-blog-container">
            <div className="single-blog-title">
             {new Date(blog.title).toLocaleDateString()}
            </div>
            <div className="single-blog-description"> 
             {blog.description}
            </div> 
            </div>
        </main>
      )
    }
}


