import React, { Component } from 'react'

import PlaceList from '../places/PlacesList';
import { connect } from 'react-redux'

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
    places: state.place.places
  }
}

export default connect(mapStateToProps)(Dashboard);