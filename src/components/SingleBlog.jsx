import React, { Component } from 'react'
import { getBlog } from '../Api.jsx'

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


