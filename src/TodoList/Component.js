import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'

class TodoList extends Component {

  render () {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    )
  }

}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList
