import authReducer from './authReducer'
import placeReducer from './placeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  place: placeReducer
})

export default rootReducer;