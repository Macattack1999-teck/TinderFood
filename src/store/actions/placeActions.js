export const createPlace = (place) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PLACE', place })
  }
}