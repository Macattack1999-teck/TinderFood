export const createPlace = (place) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({ type: 'CREATE_PLACE', place })
  }
}