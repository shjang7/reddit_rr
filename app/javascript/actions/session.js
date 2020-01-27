import axios from 'axios';
import {
  CREATE_SESSION,
  DESTROY_SESSION,
  FAIL_LOGIN,
  FAIL_LOGOUT
} from '../common/variables';

export const createSession = (userData) => {
  return dispatch => {
    return axios.post('login', { session: userData })
      .then((response) => {
        if (response.data) return response.data;
        throw new Error('Failed login');
      })
      .then((data) => {
        if (data.logged_in) return data.user;
        throw new Error(data.errors[0]);
      })
      .then(payload => dispatch({ type: CREATE_SESSION, payload }))
      .catch(error => dispatch({ type: FAIL_LOGIN, payload: error }));
  }
}

export const destroySession = (userData) => {
  return dispatch => {
    return axios.delete('logout', { session: userData })
      .then((response) => {
        if (response.data) return response.data;
        throw new Error('Failed logout');
      })
      .then((data) => {
        if (data.status === 200) return data.logged_out;
        throw new Error('Failed logout');
      })
      .then(payload => dispatch({ type: DESTROY_SESSION, payload }))
      .catch(error => dispatch({ type: FAIL_LOGOUT, payload: error }));
  }
}
