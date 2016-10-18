import { combineReducers } from 'redux'
import buildings from './buildings'
import hours from './hours'

const rootReducer = combineReducers({
  buildings,
  hours
})

export default rootReducer
