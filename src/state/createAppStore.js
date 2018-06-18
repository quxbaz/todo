import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'

const createAppStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(
      createLogger({collapsed: true}),
    ),
  )
)

export default createAppStore
