import React, { Component } from 'react'
import axios from 'axios'

export default class Flare extends Component {
  state = {
    flares: []    
  } 
  
  componentDidMount() {
      axios.get(`https://f2f1c0aaf7de41d4bc57354de1d10938.vfs.cloud9.eu-west-1.amazonaws.com/flaretracking`)
  
  .then(res => {
      console.log(res.data)
    this.setState({flares: res.data})
  })
  .catch(err => {
      console.log(err)
  })}
  
    render() {
      const { flares } = this.state
      
        return (
            <div>
              <ul className="flare-ul">
                {flares.map((flare) => (
                  <li key={flare.id}>
                   <div className="flare-title">Head:</div>
                  <div className="flare-score">{flare.head}</div>
                  <div className="flare-title">Arms:</div>
                  <div className="flare-score">{flare.arms}</div>
                  </li>
                ))}
              </ul>
            </div>
            
        )
    }
}