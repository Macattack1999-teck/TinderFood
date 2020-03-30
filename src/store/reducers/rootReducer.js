import authReducer from './authReducer'
import placeReducer from './placeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

export  const rootReducer = combineReducers({
  auth: authReducer,
  place: placeReducer,
  firestore: firestoreReducer
})