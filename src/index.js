import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App.jsx';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';
// I imported bootstrap from the bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css';
// I imported bootstrap JS plugin from the bootstrap library
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
