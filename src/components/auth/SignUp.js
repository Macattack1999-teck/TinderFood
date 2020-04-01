import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signUp } from '../../store/actions/authActions'

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
    this.props.signUp(this.state)
    this.setState({
      email: '',
      password: '',
      userName: ''
    })
  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h5>Sign Up</h5>
          <div className="input-field-group">
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
            <div className="error">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)