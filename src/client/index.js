import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import App from '../containers/App';
import * as Actions from '../actions';

const initialState = { todos: [] }; // window.__INITIAL_STATE__;
const store = createStore(reducers, initialState, applyMiddleware(thunk));

store.dispatch(Actions.loadTodo());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
