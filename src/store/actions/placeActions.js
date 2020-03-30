export const createPlace = (place) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('places').add({
      ...place
    }).then(() => {
      dispatch({ type: 'CREATE_PLACE', place: place })
    }).catch((err) => {
      dispatch({ type: 'CREATE_PLACE_ERROR', err})
    })
  }
}