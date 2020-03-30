import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import PlaceList from '../places/PlacesList';

class Dashboard extends Component {
  render() {
    const { places } = this.props;
    return (
      <div className="container">
          <PlaceList places={places}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.firestore.ordered.places
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'places' }
  ])
)(Dashboard)
