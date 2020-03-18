import { createStore, compose, applyMiddleware } from 'redux';

import axios from 'axios';

import operations from './reducers'

const composer = __DEV__
  ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
  : applyMiddleware(...[]);

const store = createStore(operations, composer);

export default store;
