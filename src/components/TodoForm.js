import React, { Component, PropTypes } from 'react'
import { compose, withHandlers, withState } from 'recompose';
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const enhance = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: props => (event) => {
      props.updateValue(event.target.value);
    },
    onSubmit: props => (event) => {
      if (!!props.value && event.keyCode === 13) {
        props.addTodo(props.value);
        props.updateValue('');
      }
    },
  }),
);

const TodoForm = ({ value, onChange, onSubmit }) => (
  <Toolbar>
    <ToolbarGroup>
      <TextField
        name="TodoForm"
        hintText="What needs to be done?"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onSubmit}
      />
    </ToolbarGroup>
  </Toolbar>
);

export default enhance(TodoForm);
