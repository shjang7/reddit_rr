import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  links: [
    {
      id: 1,
      title: "Sample title",
      url: "www.naver.com"
    }
  ]
};

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
