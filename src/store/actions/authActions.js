export const signIn = (creds) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      creds.email,
      creds.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const usersRef = firestore.collection("users")

    usersRef.where('userName', '==', `${newUser.userName}`).get()
    .then(snapshot => {
      if (snapshot.empty) {
        firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        ).then((resp) => {
          console.log(resp)
          return firestore.collection('users').doc(resp.user.uid).set({
            userName: newUser.userName
          })
        }).then(() => {
          dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
          dispatch({ type: 'SIGNUP_ERROR', err })
        })
      } else {
        dispatch({ type: 'USERNAME_TAKEN_ERROR' })
      }
    }).catch(err => {
      console.log('Error getting documents', err);
    });

  }
}

