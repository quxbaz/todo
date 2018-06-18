import {connect} from 'react-redux'
import state from '../state'
import Component from './Component'

const mapDispatchToProps = (dispatch) => ({
  onToggle (todo) {
    dispatch(state.todos.actions.toggle(todo.id))
  },
  onClickRemove (todo) {
    dispatch(state.todos.actions.destroy(todo.id))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Component)
