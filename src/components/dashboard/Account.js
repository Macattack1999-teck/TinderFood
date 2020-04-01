import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
          <div className="info">Email: {auth.email}</div>
          <div className="info">Username: {profile.userName}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Dashboard)