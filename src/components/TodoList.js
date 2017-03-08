import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TodoItem from './TodoItem';

const filters = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: todo => !todo.completed,
  SHOW_COMPLETED: todo => todo.completed,
};

const TodoList = ({ todos, todoFilter, actions }) => (
  <div>
    {todos.filter(filters[todoFilter]).map(todo =>
      <TodoItem
        actions={actions}
        todo={todo}
        key={todo._id}
      />,
    )}
    <FlatButton
      label="CLEAR COMPLETED TASKS"
      onClick={() => actions.clearCompleted()}
      secondary
    />
  </div>
);

export default TodoList;
