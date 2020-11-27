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
    <div className='row'>
   <div className='column_one'> Flare scores:
      <ul>
         <li className="body-li">Head:  2</li>
         <li className="body-li">Neck:  4</li>
         <li className="body-li">Hands:  6</li>
         <li className="body-li">Arms:  8</li>
         <li className="body-li">Stomach:  2</li>
         <li className="body-li">Back:  7</li>
         <li className="body-li">Legs:  3</li>
         <li className="body-li">Feet:  9</li>
        
      </ul>
   </div>
   <div className="column_two">
   <p className="single-food-item"><b>Breakfast:</b> Sainsbury's free from honey hoop cereal</p>
   <p className="single-food-item"><b>Lunch:</b> Vegetable Soup with one slice of bread</p>
   <p className="single-food-item"><b>Dinner:</b> BBQ Chicken breast, Cauliflower, Spinach and new potatoes</p>
   <p className="single-food-item"><b>Snavks:</b> N/A</p>
   
   </div>
   </div>
  </main>
      )
    }
}


