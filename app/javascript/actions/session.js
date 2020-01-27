import axios from 'axios';
import {
  CREATE_SESSION,
  DESTROY_SESSION,
  READ_SESSION,
  FAIL_LOGIN,
  FAIL_LOGOUT,
  EXCEPTION_ERROR
} from '../common/variables';

export const createSession = (userData) => {
  return dispatch => {
    return axios.post('login', { session: userData })
      .then(({ data }) => {
        if (!data) throw new Error('Failed login');
        if (!data.logged_in) throw new Error(data.errors[0]);
        return data.user;
      })
      .then(payload => dispatch({ type: CREATE_SESSION, payload }))
      .catch(error => dispatch({ type: FAIL_LOGIN, payload: error }));
  }
}

export const destroySession = () => {
  return dispatch => {
    return axios.delete('logout')
      .then(({ data }) => {
        if (!data || !data.logged_out) throw new Error('Failed logout');
      })
      .then(payload => dispatch({ type: DESTROY_SESSION, payload }))
      .catch(error => dispatch({ type: FAIL_LOGOUT, payload: error }));
  }
}

export const readSession =() => {
  return dispatch => {
    return axios.get('logged_in', { withCredentials: true})
      .then(({ data }) => {
        if (!data) throw new Error('Wrong info');
        if (data.logged_in) dispatch({ type: READ_SESSION, payload: data.user });
        else dispatch({ type: READ_SESSION, payload: {} })
      })
      .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
  }
}
