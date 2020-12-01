import React, { Component } from 'react'
import {postFood} from '../Api.jsx';

export default class FlareForm extends Component {
    state = {
        breakfast: "",
        lunch: "",
        dinner: "",
        snacks: ""
    }
    
    handleChange = event => {
        event.preventDefault()
            const meal = event.target.id
            if (meal === 'breakfast')
                this.setState({ breakfast: event.target.value})
            else if (meal === 'lunch')
                this.setState({ lunch: event.target.value})
            else if (meal === 'dinner')
                this.setState({ dinner: event.target.value})
            else if (meal === 'snacks')
                this.setState({ snacks: event.target.value})
     }
     
     handleSubmit = event => {
        // event.preventDefault();
        
        const {breakfast, lunch, dinner, snacks} = this.state;
        const { blogId } = this.props
        
        postFood(this.props.blogId, breakfast, lunch, dinner, snacks).then(newFood => {
            this.setState({breakfast: newFood.breakfast, 
            lunch: newFood.lunch, 
            dinner: newFood.dinner, 
            snacks: newFood.snacks})
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    
    
render() {
    return (
        <div className='flare-form'>
        <form onSubmit={this.handleSubmit}>
        <div className='form-content'>
          <label for="breakfast">Breakfast:</label><br></br>
            <input onChange={this.handleChange} type="text" id="breakfast" value={this.state.breakfast}/><br></br>
        </div>
        <div className='form-content'>
          <label for="lunch">Lunch:</label><br></br>
            <input onChange={this.handleChange} type="text" id="lunch" value={this.state.lunch}/><br></br>
        </div>
        <div className='form-content'>
          <label for="dinner">Dinner:</label><br></br>
            <input onChange={this.handleChange} type="text" id="dinner" value={this.state.dinner}/><br></br>
        </div>
        <div className='form-content'>
          <label for="snacks">Snacks:</label><br></br>
            <input onChange={this.handleChange} type="text" id="snacks" value={this.state.snacks}/><br></br>
        </div>
        <button className='submit-flares-tn' type='submit'> Submit</button>
        </form>
        </div>
        
        )
}
    
}