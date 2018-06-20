import style from './style.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TodoItem extends Component {

  handleClick = () => {
    this.props.onToggle(this.props.todo)
  }

  handleRemove = (event) => {
    event.stopPropagation()
    this.props.onClickRemove(this.props.todo)
  }

  render () {
    const {todo} = this.props
    const className = classNames(style.TodoItem, {
      [style.isCompleted]: todo.isCompleted,
    })
    return (
      <div className={className} onClick={this.handleClick}>
        <div className={style.CheckMark}>✔</div>
        <div style={{marginRight: '6px'}}>
          {this.props.i + 1}.
        </div>
        <div className={style.ColLeft}>{todo.text}</div>
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
