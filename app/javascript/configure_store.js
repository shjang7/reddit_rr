import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  things: []
};

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
