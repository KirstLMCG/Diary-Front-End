import React, { Component } from 'react';
import { postBlog } from '../Api.jsx';

export default class AddBlog extends Component {
  state = {
    description: ""
  }
  
  handleChange = event => {
    this.setState({ description: event.target.value})

  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { description } = this.state;
    
    // postBlog(description).then(newBlog => {
    //   this.setState({ description: ""})
    // })
  }

  
  
   /* handleSubmit = event => {
    event.preventDefault();
    const { body, username } = this.state;
    const { newPostedComment, articleId } = this.props;
    postComment(body, articleId, username).then(newComment => {
      newPostedComment(newComment);
      this.setState({ body: "" });
    });
  }; */
  
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
            <div className="submit-thoughts-btn-container">
            <button className="submit-thoughts-btn">Submit your thoughts!</button>
        
            </div>
          </label>
        </form>
      </div>
    )    
  }
}

