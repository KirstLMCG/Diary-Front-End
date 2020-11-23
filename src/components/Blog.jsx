import React, { Component } from 'react'
import { getBlogs } from '../api.jsx'

class Blog extends Component {
    state = { blogs: [], err: null}
    
  componentDidMount() {  
      getBlogs()
        .then(response => {
            this.setState({blogs: response.data.blog})
        }).catch(({response}) => {
            this.setState({
                err: {
                    status: response.status, msg: response.data.msg
                }
            })
        })
  }
  
  render() {
      const { blogs } = this.state
      return (
          <div>
            <ul>
              {blogs.map((singleBlog) =>
                  <li>
                  {singleBlog.blog}
                  </li>
              )}
            </ul>
          
          </div>
          )
  }
}


export default Blog;