import React from 'react'

import PlaceSummary from './PlaceSummary'

const PlaceList = ({places}) => {
  return (
    <div className="container">
      { places && places.map(place => {
        return (
          <PlaceSummary place={place} key={place.id}/>
        )
      })}
    </div>
  )
}

export default PlaceList;