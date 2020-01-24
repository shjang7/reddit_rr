import { combineReducers } from 'redux';
import links from './link_reducer.js';
import user from './user_reducer.js';

export default combineReducers({
  links,
  user
});
