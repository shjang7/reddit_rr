import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import link from './link';
import comment from './comment';
import error from './error';

export default combineReducers({
  auth,
  alert,
  link,
  comment,
  error,
});
