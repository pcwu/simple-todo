import React, { PropTypes } from 'react';

const TodoItem = ({ todo, actions }) => (
  <li>
    {todo.text}({todo.completed ? 'True' : 'False'})
    <button onClick={() => { actions.deleteTodo(todo._id); }}>DEL</button>
    <button onClick={() => { actions.editTodo(todo._id, 'Hello World'); }}>EDIT</button>
    <button onClick={() => { actions.completeTodo(todo._id, true); }}>Done</button>
  </li>
);

export default TodoItem;
