import authReducer from './authReducer'
import placeReducer from './placeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

export  const rootReducer = combineReducers({
  auth: authReducer,
  place: placeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})