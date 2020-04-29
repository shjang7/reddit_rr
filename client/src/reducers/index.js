import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import link from './link';
import comment from './comment';
import error from './error';

export default combineReducers({
  alert,
  auth,
  link,
  comment,
  error,
});
