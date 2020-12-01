import React, { Component } from 'react'
import { getBlog, getFood } from '../Api.jsx'
import { Link } from '@reach/router'
import Flare from '../components/Flare.jsx'
import Food from '../components/Food.jsx'

export default class SingleBlog extends Component {
  state = {
    blog: []
  }
  
  componentDidMount() {
      getBlog(this.props.id)
        .then(res => {
            // console.log(this.props.id)
          this.setState({ blog: res.data})
        })
        .catch(err => {
            console.log(err)
        })
  }
  
    // handleDelete = (id) => {
  //   const {blogs} = this.state;
  //   deleteBlog(id);
    
  //   const deletedBlogs = blogs.filter(
  //     blog => blog.id !== id)
      
  //     this.setState({blogs: deletedBlogs})
    
  // } 
  
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
    <div class='row'>
      <div className='column-one'>
        <Flare blogId={this.props.id}/>
       </div>
       
      <div className="column-two">
        <Food blogId={this.props.id}/>
      </div>
    </div>
  </main>
      )
    }
}


