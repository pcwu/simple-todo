import React, { PropTypes } from 'react';
import { withState } from 'recompose';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';



const TodoItem = ({ todo, actions }) => (
  <div>
    <Checkbox
      label={todo.text}
      checked={todo.completed ? true : false}
      onClick={() => { actions.completeTodo(todo._id, true); }}
    />
    <FlatButton
      icon={<FontIcon className="material-icons">delete</FontIcon>}
      onClick={() => { actions.deleteTodo(todo._id); }}
    />
    <FlatButton
      icon={<FontIcon className="material-icons">mode_edit</FontIcon>}
      onClick={() => { actions.editTodo(todo._id, 'Hello World'); }}
    />
  </div>
);

export default TodoItem;
