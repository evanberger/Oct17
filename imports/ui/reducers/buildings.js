import { ADD_BUILDING } from '../constants/ActionTypes'

const initialState = []

export default function buildings(state = initialState, action) {
  switch (action.type) {
    case ADD_BUILDING:
      return [
        {
          id: action.id
        },
        ...state
      ]
    default:
      return state
  }
}
