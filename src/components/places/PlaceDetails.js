import React from 'react'

const PlaceDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container">
      <div className="title">Place Title - {id}</div>
      <p className="place-info">Lorim impsum</p>
      <p className="hours">Hours</p>
    </div>
  )
}

export default PlaceDetails
