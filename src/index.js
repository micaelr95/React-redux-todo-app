import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
  }

  * {
    font-family: 'Montserrat';
  }
`;

const tasks = ['task 1', 'task 2', 'task 3', 'task 4'];

const reducer = (state = { tasks }, action) => {
  switch (action.type) {
    case 'ADD_NEW_TASK':
      return { tasks: [...state.tasks, action.newTask] };
    case 'DELETE_TASK':
      return { tasks: state.tasks.filter((task) => task !== action.task) };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
