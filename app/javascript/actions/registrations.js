import axios from 'axios';
import {
  FAIL_REGISTRATION
} from '../common/variables';
import { createSession } from './session';

export const createRegistration = (userData) => {
  return dispatch => {
    return axios.post('api/v1/users', { user: userData })
      .then(({ data }) => {
        if (!data) throw new Error('no data');
        if (data.status !== 'created') throw new Error(data.status);
        return data.user;
      })
      .then(() => {
        const logInUser = (({ username, password }) => ({ username, password }))(userData);
        return dispatch(createSession(logInUser));
      })
      .catch(error => dispatch({ type: FAIL_REGISTRATION, payload: error }));
  }
}
