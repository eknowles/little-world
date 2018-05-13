import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxUnhandledAction from 'redux-unhandled-action';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import rootReducer from './root.reducer';

require('./index.css');

const middlewares = [
  reduxUnhandledAction(action => {
    console.log('action didn\'t lead to creation of a new state object', action);
  }),
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

ReactDom.render(
  <Provider store={store} >
    <BrowserRouter >
      <App />
    </BrowserRouter >
  </Provider >,
  document.getElementById('root'),
);
