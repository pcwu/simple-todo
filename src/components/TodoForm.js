import React, { Component, PropTypes } from 'react'
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

class TodoForm extends Component {

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (!!text && e.which === 13) {
      this.props.addTodo(text)
      this.setState({ text: '' })
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <Toolbar>
      <ToolbarGroup>
      <TextField
        name="TodoForm"
        hintText="What needs to be done?"
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
      </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default TodoForm;
