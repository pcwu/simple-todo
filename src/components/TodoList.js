import React, { PropTypes } from 'react';
import { withState } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import TodoForm from './TodoForm';
import TodoTab from './TodoTab';
import TodoItem from './TodoItem';


const TodoList = ({ todos, actions, todoFilter, setFilter }) => (
  <div>
    <TodoTab setFilter={setFilter} />
    <TodoForm addTodo={actions.addTodo} />
    {todos.filter(todoFilter).map(todo =>
      <TodoItem
        actions={actions}
        todo={todo}
        key={todo._id}
      />,
    )}
    <RaisedButton
      label="CLEAR COMPLETED TASKS"
      fullWidth
      onClick={() => actions.clearCompleted()}
    />
  </div>
);

export default withState('todoFilter', 'setFilter', () => () => true)(TodoList);
