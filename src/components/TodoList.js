import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, actions }) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        actions={actions}
        todo={todo}
        key={todo._id}
        {...todo}
      />,
    )}
  </ul>
);

export default TodoList
