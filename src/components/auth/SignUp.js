import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    userName: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    const { auth } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <h5>Sign Up</h5>
          <div className="input-field">
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              onChange={this.handleChange} 
            />
            <input 
              type="password" 
              id="password" 
              placeholder="Password" 
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              id="userName" 
              placeholder="Username" 
              onChange={this.handleChange} 
            />
          </div>
          <div className="button-wrapper">
            <button className="btn">Sign Up!</button>
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

export default connect(mapStateToProps)(SignUp)