import React, { Component } from 'react';
import { postBlog } from '../Api.jsx';

export default class AddBlog extends Component {
  state = {
    description: ""
  }
  
  handleChange = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ description: event.target.value})

  }
  
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { description } = this.state
  //     postBlog(description).then(newBlog => {
  //     this.setState({description: [...this.state.description], description: ''})
  //   })
    
  // }
  
  handleSubmit = event => {
    event.preventDefault();
    const { description } = this.state;
    const { newPostedBlog } = this.props;
    postBlog(description).then(newBlog => {
      newPostedBlog(newBlog)
      this.setState({description: ""})
    }).catch(err => {
      console.log(err)
    })
  }

  
  //   newPostedComment = addedNewComment => {
  //   this.setState(currentState => {
  //     return {
  //       comments: [addedNewComment, ...currentState.comments]
  //     };
  //   });
  // };

  render() {
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

