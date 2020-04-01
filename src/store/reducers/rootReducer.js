import authReducer from './authReducer'
import placeReducer from './placeReducer'
import friendReducer from './friendReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export  const rootReducer = combineReducers({
  auth: authReducer,
  place: placeReducer,
  friends: friendReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})