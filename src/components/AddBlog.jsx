import React, { Component } from 'react';
import { postBlog } from '../Api.jsx';

export default class AddBlog extends Component {
  state = {
    description: []
  }
  
  render() {
    return (
      <div>
        <form>
          <label>
            <textarea placeholder="Say what's on your mind..."></textarea>
            <button>Submit your thoughts!</button>
          </label>
        </form>
      <div>
    )    
  }
}


{/* <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              className={styles.textArea}
              rows="8"
              cols="60"
              type="text"
              id="body"
              placeholder="Say what's on your mind..."
              value={this.state.body}
              onChange={this.handleChange}
              required
            ></textarea>
            <br></br>
            <button className={styles.postbtn}>Post it!</button>
          </label>
        </form> */}