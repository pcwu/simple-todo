import { combineReducers } from 'redux';
import todos from './todos';
import todoFilter from './todoFilter';

const rootReducer = combineReducers({
  todos,
  todoFilter,
});

export default rootReducer;
