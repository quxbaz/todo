import {combineReducers} from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos: todos.reducer,
})

export default rootReducer
