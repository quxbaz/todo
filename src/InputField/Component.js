import React, {Component} from 'react'

class InputField extends Component {

  state = {
    text: '',
  }

  constructor (props) {
    super(props)
    this.input = React.createRef()
  }

  componentDidMount () {
    setTimeout(() => {
      this.input.current.focus()
    }, 0)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
    this.setState({text: ''})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.input} value={this.state.text} type='text' onChange={this.handleChange} placeholder='What needs doing?' />
        <button type='submit'>Add Todo</button>
      </form>
    )
  }

}

export default InputField
