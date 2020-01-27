import axios from 'axios';
import {
  CREATE_SESSION,
  DESTROY_SESSION,
  FAIL_LOGIN
} from '../common/variables';

export const createSession = (sessionData) => {
  return dispatch => {
    return axios.post('login', { session: sessionData })
      .then((response) => {
        if (response.data) return response.data;
        throw new Error('no data');
      })
      .then((data) => {
        if (data.logged_in) return data.user;
        throw new Error(data.errors[0]);
      })
      .then(payload => dispatch({ type: CREATE_SESSION, payload }))
      .catch(error => dispatch({ type: FAIL_LOGIN, payload: error }));
  }
}

export const destroySession = (payload) => {
  return { type: DESTROY_SESSION, payload };
}
