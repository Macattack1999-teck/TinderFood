export const createFriend = (friend) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();
    const usersRef = firestore.collection("users")


    usersRef.where('userName', '==', `${friend.userName}`).get()
    .then(snapshot => {
      if (snapshot.empty) {
        dispatch({ type: 'INVALID_USERNAME'})
      } else {
        snapshot.forEach(doc => {
          return firestore.collection('userfriends').doc(firebase.auth().W)
            .collection('friends').doc(doc.id).set({
              userName: friend.userName
            }).then(() => {
              dispatch({ type: 'FRIENDSHIP_CREATED'})
            }).catch((err) => {
              console.log(err)
            })
        })
      }
    }).catch(err => {
      console.log('Error getting documents', err);
    });
  }
}