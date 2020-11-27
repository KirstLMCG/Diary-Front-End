import React, { Component, Fragment } from 'react';
import { Router, Link } from "@reach/router"
import { postBlog, getLatestBlog, getBlogs } from '../Api.jsx';
import { Redirect } from '@reach/router'
import { useHistory, withRouter } from 'react-router'

// 
export default class AddBlog extends Component {
  state = {
    description: "",
    blogId: "",
    latestBlogDate: "",
    latestBlogId: "",
    // redirect: false
  }
  
  handleChange = event => {
    event.preventDefault()
    // console.log(event.target.value)
    this.setState({ description: event.target.value})

  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { description } = this.state
      postBlog(description).then(newBlog => {
      this.setState({description: newBlog.description})
      // this.setState({description: [...this.state.description], description: ''})
      this.setState({blogId: newBlog._id})
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  componentDidMount() {
    getBlogs()
      .then(res => {
          this.setState({
            latestBlogDate: res.data[0].title,
            latestBlogId: res.data[0]._id,
          })
      })
  }
  
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { description } = this.state;
  //   const { newPostedBlog } = this.props;
  //   postBlog(description).then(newBlog => {
  //     newPostedBlog(newBlog)
  //     this.setState({description: ""})
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }



  render() {
    const { blogId, latestBlogDate, latestBlogId } = this.state
      // Uncomment the below line and comment out the line underneath that one if you need to see this page after creating a blog on today's date!
      // if (true)
      if (latestBlogDate.slice(0, 10) === new Date().toISOString().slice(0, 10))
        { return <Fragment> <span> You have already created a diary entry for today. View it </span> <Link to={`/blog/${latestBlogId}`}>here</Link>. </Fragment> }
      else if (blogId !== "")
        { return <Redirect noThrow to={`/blog/${blogId}`}/> }
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className="description-box-container">
            <textarea onChange={this.handleChange}
                      placeholder="Say what's on your mind..." 
                      className="description-box"
                      rows="30"
                      cols="120"
                      type="text"
                      id="body"
                      value={this.state.description}>
            </textarea>
            </div>
            
          </label>
          <div className="submit-thoughts-btn-container">
          
          <button type='submit' className="submit-thoughts-btn"> Submit your thoughts! </button>
          </div>
        </form>
      </div>
    )    
  }
}

