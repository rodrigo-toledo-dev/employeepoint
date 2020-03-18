import { createStore, compose, applyMiddleware } from 'redux';

import axios from 'axios';

import reducer from './reducers';

const composer = __DEV__
  ? compose(applyMiddleware(...[]), console.tron.createEnhancer())
  : applyMiddleware(...[]);

const store = createStore(reducer, composer);

console.tron.log(store.getState());

export default store;
