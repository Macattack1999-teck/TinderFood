import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import PlaceList from '../places/PlacesList';

class Dashboard extends Component {
  render() {
    const { places, auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
          <PlaceList places={places}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.firestore.ordered.places,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'places' }
  ])
)(Dashboard)
