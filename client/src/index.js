import React from 'react';
import ReactDOM from 'react-dom';
//initialize redux
import { Provider } from 'react-redux'; //keep track of global state, store, and make sure it can be used inside anywhere of the app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

