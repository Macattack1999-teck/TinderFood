import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const PlaceDetails = (props) => {
  const { place } = props;
  if (place) {
    return (
      <div className="container">
        <div className="title">{place.title}</div>
        <p className="place-info">{place.descript}</p>
        <p className="hours">{place.hours}</p>
      </div>
    )
  } else {
    return (
      <div className="container">
        <p>Sorry, there is no places...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id
  const places = state.firestore.data.places
  const place = places ? places[id] : null
  return {
    place: place
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'places'}
  ])
)(PlaceDetails)
