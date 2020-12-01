import React, { Component } from 'react'
import {postFlare} from '../Api.jsx';

export default class FlareForm extends Component {
    state = {
        head: '',
        neck: '',
        hands: '',
        arms: '',
        stomach: '',
        back: '',
        legs: '',
        feet: ''
    }
    
    handleChange = event => {
        event.preventDefault()
            const bodyPart = event.target.id
            console.log(event.target.id)
            if (bodyPart === 'head')
                this.setState({ head: event.target.value})
            else if (bodyPart === 'neck')
                this.setState({ neck: event.target.value})
            else if (bodyPart === 'hands')
                this.setState({ hands: event.target.value})
            else if (bodyPart === 'arms')
                this.setState({ arms: event.target.value})
            else if (bodyPart === 'stomach')
                this.setState({ stomach: event.target.value})
            else if (bodyPart === 'back')
                this.setState({ back: event.target.value})
            else if (bodyPart === 'legs')
                this.setState({ legs: event.target.value})
            else if (bodyPart === 'feet')
                this.setState({ feet: event.target.value})
            
        //  feet: event.target.value
        //  })

  }
    
    handleSubmit = event => {
        // event.preventDefault();
        
        const {head, neck, hands, arms, stomach, back, legs, feet} = this.state;
        const { blogId } = this.props
        
        postFlare(blogId, head, neck, hands, arms, stomach, back, legs, feet).then(newFlare => {
            this.setState({head: newFlare.head, 
            neck: newFlare.neck, 
            hands: newFlare.hands, 
            arms: newFlare.arms, 
            stomach: newFlare.stomach, 
            back: newFlare.back, 
            legs: newFlare.legs, 
            feet: newFlare.feet})
        })
        .catch(err => {
            console.log(err)
        })
    }

render () {
    return (
        <div className="flare-form">
            <form onSubmit={this.handleSubmit}>
            <div className="form-content">
                <label for="head">Head:</label><br></br>
                <input onChange={this.handleChange} type="number" max="10" id="head" value={this.state.head}/><br></br>
              </div>
             <div className="form-content">
                <label className='form-content' for="neck">Neck:</label><br></br>
                <input onChange={this.handleChange} type="number" id="neck" value={this.state.neck}/><br></br>
             </div>
             <div className="form-content">
                <label className='form-content' for="hands">Hands:</label><br></br>
                <input onChange={this.handleChange} type="number" id="hands" value={this.state.hands}/><br></br>
                  </div>
             <div className="form-content">    
                <label className='form-content' for="arms">Arms:</label><br></br>
                <input onChange={this.handleChange} type="number" id="arms" value={this.state.arms}/><br></br>
                  </div>
             <div className="form-content">    
                <label className='form-content' for="stomach">Stomach:</label><br></br>
                <input onChange={this.handleChange} type="number" id="stomach" value={this.state.stomach}/><br></br>
                  </div>
             <div className="form-content">    
                <label className='form-content' for="back">Back:</label><br></br>
                <input onChange={this.handleChange} type="number"id="back" value={this.state.back}/><br></br>
                 </div> 
             <div className="form-content">    
                <label className='form-content' for="legs">Legs:</label><br></br>
                <input onChange={this.handleChange} type="number" id="legs" value={this.state.legs}/><br></br>
                 </div> 
              <div className="form-content">    
                <label className='form-content' for="feet">Feet:</label><br></br>
                <input onChange={this.handleChange} type="number" id="feet" value={this.state.feet}/><br></br>
                </div>
                <div className="submit-flares-btn-container">
                <button className='submit-flares-btn' type='submit'> Submit Flares</button>
                </div>
            </form>
         </div>
        )
  }
}
