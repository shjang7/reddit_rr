import { combineReducers } from 'redux';
import links from './link_reducer.js';
import session from './session_reducer.js';
import errors from './errors_reducer.js';

export default combineReducers({
  links,
  session,
  errors
});
