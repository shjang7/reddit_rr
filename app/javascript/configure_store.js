import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  links: { links: [], link: { author: null, link: {}, votes: { up: 0, down: 0, weight: 0 }} },
  comments: [],
  session: {},
  errors: []
};

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
