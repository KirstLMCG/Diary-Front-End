import React, { Component } from 'react';
import axios from 'axios';

export default class Food extends Component {
    state = {
        foods: []
    }
    
    componentDidMount() {
        axios.get(`https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/foodtracking`)
        .then(res => {
         // console.log(res.data)
          this.setState({foods: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
      const { foods } = this.state;
      
        return (
          <div>
            <ul className="foods-ul">
              {foods.map((food) => (
                <div>
                <li key={food.id}>
                  <div className="breakfast-title">Breakfast:</div>
                  <div className="breakfast-item">{food.breakfast}</div>
                  <div className="lunch-title">Lunch:</div>
                  <div className="lunch-item">{food.lunch}</div>
                  <div className="dinner-title">Dinner: </div>
                  <div className="dinner-item">{food.dinner}</div>
                  <div className="snacks-title">Snacks:</div>
                  <div className="snacks-item">{food.snacks}</div> 
                </li>
                </div>
              ))}
            </ul>
          </div>
            
            )
    }
}