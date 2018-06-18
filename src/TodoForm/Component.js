import style from './style.css'
import React, {Component} from 'react'
import InputField from '../InputField'
import TodoList from '../TodoList'

class TodoForm extends Component {

  render () {
    return (
      <div className={style.TodoForm}>
        <h1>Todo List</h1>
        <InputField />
        <TodoList />
      </div>
    )
  }

}

export default TodoForm
