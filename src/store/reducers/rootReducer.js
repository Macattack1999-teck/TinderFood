import authReducer from './authReducer'
import placeReducer from './placeReducer'
import { combineReducers } from 'redux'

export  const rootReducer = combineReducers({
  auth: authReducer,
  place: placeReducer
})