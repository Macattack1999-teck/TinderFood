import React from 'react'
import { Link } from 'react-router-dom'

import PlaceSummary from './PlaceSummary'

const PlaceList = ({places}) => {
  return (
    <div className="container">
      { places && places.map(place => {
        return (
          <Link to={'/place/' + place.id} key={place.id}>
            <PlaceSummary place={place}/>
          </Link>
        )
      })}
    </div>
  )
}

export default PlaceList;