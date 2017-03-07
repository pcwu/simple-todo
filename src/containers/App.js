import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import * as Actions from '../actions';
import './App.css';

injectTapEventPlugin();

const App = ({ todos, actions }) => (
    <MuiThemeProvider>
      <div className="App">
        <TodoList todos={todos} actions={actions} />
      </div>
    </MuiThemeProvider>
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
