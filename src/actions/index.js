import * as types from '../constants';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
export const loadTodo = () => (dispatch) => {
  fetch('/api/todos')
  .then(res => res.json())
  .then((data) => { dispatch({ type: types.LOAD_TODO, todos: data.todos }); });
};

export const addTodo = text => (dispatch) => {
  fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  .then(res => res.json())
  .then((data) => { dispatch({ type: types.ADD_TODO, todo: data.todo }); });
};

export const deleteTodo = _id => (dispatch) => {
  fetch(`/api/todos/${_id}`, { method: 'DELETE' })
  .then(res => res.json())
  .then(() => { dispatch({ type: types.DELETE_TODO, _id }); });
};

export const editTodo = (_id, text) => (dispatch) => {
  fetch(`/api/todos/${_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
  .then(res => res.json())
  .then(() => { dispatch({ type: types.EDIT_TODO, _id, text }); });
};

export const completeTodo = (_id, completed) => (dispatch) => {
  fetch(`/api/todos/${_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  })
  .then(res => res.json())
  .then(() => { dispatch({ type: types.COMPLETE_TODO, _id }); });
};

export const clearCompleted = () => (dispatch) => {
  fetch('/api/todos', { method: 'DELETE' })
  .then(res => res.json())
  .then(() => { dispatch({ type: types.CLEAR_COMPLETED }); });
};
