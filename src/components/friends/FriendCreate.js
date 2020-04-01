import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createFriend} from '../../store/actions/friendActions'

class CreateFriend extends Component {
  state = {
    userName: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createFriend(this.state)
    this.setState({
      userName: ''
    })
    // this.props.history.push('/')
    // console.log(this.state)
  }

  render() {
    const  { auth, usernameError, friendship } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="createfriend-form">
          <h5>Add Friend</h5>
          <div className="input-field-group">

            <div>
              <input 
                type="text" 
                id="userName" 
                placeholder="Username" 
                onChange={this.handleChange} 
                />
            </div>
          </div>
          <div className="button-wrapper">
            <button className="btn">Request</button>
            <div className="error">
              { usernameError ? <p>{ usernameError }</p> : null }
            </div>
            <div className="success">
              { friendship ? <p>{ friendship }</p> : null}
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
    usernameError: state.friends.usernameError,
    friendship: state.friends.friendship
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFriend: (friend) => dispatch(createFriend(friend))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFriend)