import * as types from '../constants/ActionTypes'

export const addBuilding = id => ({ type: types.ADD_BUILDING, id })
export const deleteBuilding = id => ({ type: types.DELETE_BUILDING, id })
export const editBuilding = (id, text) => ({ type: types.EDIT_BUILDING, id, text })
