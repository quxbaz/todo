import {omit} from 'lodash'
import {types} from './actions'

const initialState = {
  id: undefined,
  text: '',
  timestamp: 0,
  isCompleted: false,
}

const todo = (state={}, action) => {
  switch (action.type) {
  case types.CREATE:
    return {
      ...initialState,
      id: action.data.id,
      text: action.data.text,
      timestamp: action.data.timestamp,
    }
  case types.TOGGLE:
    return {
      ...state,
      isCompleted: !state.isCompleted,
    }
  default:
    return state
  }
}

const todos = (state={}, action) => {
  switch (action.type) {
  case types.CREATE:
    return {
        ...state,
      [action.data.id]: todo(undefined, action),
    }
  case types.DESTROY:
    return omit(state, action.data.id)
  case types.TOGGLE:
    return {
      ...state,
      [action.data.id]: todo(state[action.data.id], action),
    }
  default:
    return state
  }
}

export default todos
