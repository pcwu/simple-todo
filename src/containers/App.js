import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TodoTab from '../components/TodoTab';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import * as Actions from '../actions';
import './App.css';

injectTapEventPlugin();

const App = ({ todos, todoFilter, actions }) => (
    <MuiThemeProvider>
      <div className="App">
        <TodoTab setFilter={actions.setFilter} />
        <TodoForm addTodo={actions.addTodo} />
        <TodoList todos={todos} todoFilter={todoFilter} actions={actions} />
      </div>
    </MuiThemeProvider>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
