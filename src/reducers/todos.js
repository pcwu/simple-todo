import { LOAD_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, CLEAR_COMPLETED } from '../constants';

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
const todos = (state = [], action) => {
  switch (action.type) {

    case LOAD_TODO:
      return action.todos;

    case ADD_TODO:
      return [...state, action.todo];

    case DELETE_TODO:
      return state.filter(todo =>
        todo._id !== action._id,
      );

    case EDIT_TODO:
      return state.map(todo =>
        (todo._id === action._id ?
          { ...todo, text: action.text } : todo));

    case COMPLETE_TODO:
      return state.map(todo =>
        (todo._id === action._id ?
          { ...todo, completed: !todo.completed } : todo));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
};

export default todos;
