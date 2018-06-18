import {values} from 'lodash'
import {connect} from 'react-redux'
import state from '../state'
import Component from './Component'

const mapDispatchToProps = (dispatch) => ({
  onSubmit (text) {
    dispatch(state.todos.actions.create(text))
  },
})

export default connect(
  null,
  mapDispatchToProps,
)(Component)
