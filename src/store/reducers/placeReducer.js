const initState = {
  places: [
    {id: '1', title: 'arbys', descript: 'blah blah blah', hours: '1pm - 2pm', type: 'fast', location: 'Sandy'},
    {id: '2', title: 'mcdonals', descript: 'blah blah blah', hours: '3pm - 4pm', type: 'fast', location: 'West Jordan'},
    {id: '3', title: 'burger king', descript: 'blah blah blah', hours: '12pm - 1pm', type: 'fast', location: 'Midvale'}
  ]
}

const placeReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PLACE':
      console.log('successfully created place', action.place)
      return state;
    case 'CREATE_PLACE_ERROR':
      console.log('create place error', action.err)
      return state;
    default:
      return state;
  }
}

export default placeReducer