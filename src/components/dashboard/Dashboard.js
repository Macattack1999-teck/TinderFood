import React, { Component } from 'react'

import PlaceList from '../places/PlacesList';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
          <PlaceList />
      </div>
    )
  }
}

export default Dashboard;