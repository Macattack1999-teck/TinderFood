import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import FriendList from './FriendList'
import { getFirestore } from 'redux-firestore'

class FriendsDashboard extends Component {

  render() {
    console.log(this.props)
    const { userfriends, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <FriendList userfriends={userfriends} />
      </div>
    )
  }
} 

// const mapStateToProps = (state) => {
//   // console.log(state.firestore.ordered)
//   // const userfriends = state.firestore.data.userfriends
//   return {
//     places: state.firestore.ordered.places,
//     // userfriends: state.firestore.ordered.userfriends,
//     auth: state.firebase.auth
//   }
// }

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {collection: 'places'}
//   ])
// )(FriendsList)

const mapStateToProps = (state) => {

  // console.log(state.firestore.listeners)
  // console.log(state.firestore)
  // console.log(state.firestore.ordered)
  // const userfriends = state.firestore.data.userfriends
  return {
    // places: state.firestore.ordered.places,
    userfriends: state.friends.userfriends,
    auth: state.firebase.auth,
    firestore: state.firestore
  }
}

export default compose(
  connect(mapStateToProps)
  // firestoreConnect([
  //   {collection: 'friends'}
  // ])
)(FriendsDashboard)