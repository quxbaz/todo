import style from './style.css'
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
      <div className={style.TodoItem}>
        <div style={{marginRight: '6px'}}>
          {this.props.i + 1}.
        </div>
        <div className={style.ColLeft}>
          <input className={style.Checkbox} type='checkbox' checked={todo.isCompleted} onChange={this.handleToggle} />
          {todo.text}
        </div>
        <div className={style.ColRight}>
          <button className={style.Remove} onClick={this.handleRemove}>remove</button>
        </div>
      </div>
    )
  }

}

TodoItem.propTypes = {
  i: PropTypes.number.isRequired,
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
}

export default TodoItem
