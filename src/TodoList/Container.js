import {sortBy, values} from 'lodash'
import {connect} from 'react-redux'
import Component from './Component'

const mapStateToProps = (state) => ({
  todos: sortBy(values(state.todos), 'timestamp'),
})

// const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  null,
  // mapDispatchToProps,
)(Component)
