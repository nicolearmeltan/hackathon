import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from '../src/reducer/'
import AppComponent from '../src/component/app';

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();