import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './semantic.css';
import './index.css';
import App from './containers/App';
import tasksReducer from './reducers/tasks';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
