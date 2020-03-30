import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createPlace} from '../../store/actions/placeActions'

class CreatePlace extends Component {
  state = {
    title: '',
    location: '',
    descript: '',
    hours: '',
    type: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createPlace(this.state)
  }

  render() {
    const  { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <h5>Create Place</h5>
          <div className="input-field">
            <input 
              type="text" 
              id="title" 
              placeholder="Title" 
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              id="location" 
              placeholder="Location" 
              onChange={this.handleChange} 
            />
            <textarea 
              type="text" 
              id="descript" 
              placeholder="Description" 
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              id="hours" 
              placeholder="Hours"
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              id="type" 
              placeholder="Type" 
              onChange={this.handleChange} 
            />
          </div>
          <div className="button-wrapper">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPlace: (place) => dispatch(createPlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlace)