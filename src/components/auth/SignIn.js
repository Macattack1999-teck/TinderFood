import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state)
  }

  render() {
    const { authError } = this.props
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <h5>Sign In</h5>
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
          </div>
          <div className="button-wrapper">
            <button className="btn">Sign In!</button>
            <div className="red-text">
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
