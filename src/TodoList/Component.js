import style from './style.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'

class TodoList extends Component {

  render () {
    return (
      <div>
        {this.props.todos.map((todo, i) => (
          <div className={style.Container} key={todo.id}>
            {/* <div className={style.Number}>{i}</div> */}
            <TodoItem i={i} todo={todo} />
          </div>
        ))}
      </div>
    )
  }

}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList
