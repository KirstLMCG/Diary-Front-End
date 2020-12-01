import React, {Fragment, Component } from 'react';
import axios from 'axios';
import { getFoodForBlogId } from '../Api.jsx'
import FoodForm from '../components/FoodForm.jsx'

export default class Food extends Component {
    state = {
        foods: []
    }
    
    componentDidMount() {
        getFoodForBlogId(this.props.blogId).then(res => {
          console.log(res.data)
          this.setState({foods: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
      const { foods } = this.state;
      
       if (foods.length === 0 || foods === 'undefined')
          { return (
            <Fragment>
            <div>
             There are no foods recorded today, record them below.
            </div>
            <FoodForm blogId={this.props.blogId}/>
            </Fragment>
         ) }
          
        return (
          <div>
            <ul className="foods-ul">
              {foods.map((food) => (
                <div>
                <li key={food.id}>
                  <div className="food-title"><strong>Breakfast:</strong></div>
                  <div className="food-item">{food.breakfast}</div>
                  <div className="food-title"><strong>Lunch:</strong></div>
                  <div className="food-item">{food.lunch}</div>
                  <div className="food-title"><strong>Dinner:</strong></div>
                  <div className="food-item">{food.dinner}</div>
                  <div className="food-title"><strong>Snacks:</strong></div>
                  <div className="food-item">{food.snacks}</div> 
                </li>
                </div>
              ))}
            </ul>
          </div>
            
            )
    }
}