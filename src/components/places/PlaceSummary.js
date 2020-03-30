import React from 'react'

const PlaceSummary = ({place}) => {
  return (
    <div className="place-group">
        <span className="title">{place.title}</span>
        <span className="location">{place.location}</span>
        <span className="type">{place.type}</span>

        <button>Yes</button>
        <button>No</button>
      </div>
  )
}

export default PlaceSummary;