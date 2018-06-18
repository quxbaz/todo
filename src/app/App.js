import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createAppStore} from '../state'
import TodoForm from '../TodoForm'

// TESTING
import state from '../state'

class App extends Component {

  constructor (props) {
    super(props)
    this.store = createAppStore()
    this.store.dispatch(state.todos.actions.create('buy lunch'))
    this.store.dispatch(state.todos.actions.create('eat lunch'))
  }

  render () {
    return (
      <Provider store={this.store}>
        <TodoForm />
      </Provider>
    )
  }

}

export default App
