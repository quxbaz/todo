import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  handleToggle = () => {
    this.props.onToggle(this.props.todo)
  }

  handleRemove = () => {
    this.props.onClickRemove(this.props.todo)
  }

  render () {
    const {todo} = this.props
    return (
      <div>
        <input type='checkbox' checked={todo.isCompleted} onChange={this.handleToggle} />
        {todo.text}
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    )
  }

}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
}

export default TodoItem
