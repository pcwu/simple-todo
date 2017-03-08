import React, { PropTypes } from 'react';
import { withState } from 'recompose';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import TodoEdit from './TodoEdit';

const TodoItem = ({ todo, actions, editing, setEditing }) => (
  <div style={{ clear: 'both' }}>
    <div style={{ width: '80%', float: 'left', padding: '6px 0px' }}>
      <Checkbox
        label={todo.text}
        checked={todo.completed}
        onClick={() => { actions.completeTodo(todo._id, !todo.completed); }}
      />
    </div>
    <div style={{ width: '20%', float: 'right' }}>
      <FlatButton
        icon={<FontIcon className="material-icons">delete</FontIcon>}
        onClick={() => { actions.deleteTodo(todo._id); }}
        style={{ marginRight: '5px', minWidth: '36px' }}
      />
      <FlatButton
        icon={<FontIcon className="material-icons">mode_edit</FontIcon>}
        onClick={() => { setEditing(true); }}
        style={{ marginRight: '5px', minWidth: '36px' }}
      />
    </div>
    <TodoEdit
      editing={editing}
      setEditing={setEditing}
      todo={todo}
      editTodo={actions.editTodo}
    />
  </div>
);

export default withState('editing', 'setEditing', false)(TodoItem);
