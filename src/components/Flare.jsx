import React, { Fragment, Component } from 'react'
import { getFlaresForBlog } from '../Api.jsx'
import FlareForm from '../components/FlareForm.jsx'

export default class Flare extends Component {
  state = {
    flares: []
  } 
  
  componentDidMount() {
    getFlaresForBlog(this.props.blogId).then(res => {
      // console.log(res)
    this.setState({flares: res.data}) //[res.data[res.data.length -1]
  })
  .catch(err => {
      console.log(err)
  })}
  
    render() {
      const { flares } = this.state
     
        if (flares.length === 0 || flares === 'undefined')
          { return (
            <Fragment>
              <div className="no-flares-text"> 
               There are no flare scores recorded today, record them below.
              </div>
              <FlareForm blogId={this.props.blogId}/>
            </Fragment>
            )
          }
          
        return( 
          
            <div>
              How you rated the severity of your flares:
              <ul className="flare-ul">
                
                {flares.map((flare) => (
                  <li key={flare.id}>
                 
                  <div className="flare-title">Head: <strong>{flare.head}</strong></div>
                  <div className="flare-title">Neck: <strong>{flare.neck}</strong></div>
                  <div className="flare-title">Hands: <strong>{flare.hands}</strong></div>
                  <div className="flare-title">Arms: <strong>{flare.arms}</strong></div>
                  <div className="flare-title">Stomach: <strong>{flare.stomach}</strong></div>
                  <div className="flare-title">Back: <strong>{flare.back}</strong></div>
                  <div className="flare-title">Legs: <strong>{flare.legs}</strong></div>
                  <div className="flare-title">Feet: <strong>{flare.feet}</strong></div>
                  </li>
                ))}
              </ul>
            </div>
                // <div className="diary-delete-btn-container">
                // <button className='diary-btn'> Delete </button>
                // {/* onClick={this.handleDelete(blog._id)} */}
                // </div>
            
        )
    }
}