import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //keep track of global state, store, and make sure it can be used inside anywhere of the app
import {  } from 'react-redux';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

