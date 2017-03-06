import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import * as Actions from '../actions';

const App = ({ todos, actions }) => (
  <div>
    <TodoForm addTodo={actions.addTodo} />
    <TodoList todos={todos} actions={actions} />
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
