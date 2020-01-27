import axios from 'axios';
import {
  FAIL_REGISTRATION
} from '../common/variables';
import { createSession } from './session';

export const createRegistration = (userData) => {
  return dispatch => {
    return axios.post('api/v1/users', { user: userData })
      .then((response) => {
        if (response.data) return response.data;
        throw new Error('no data');
      })
      .then((data) => {
        if (data.status === 'created') return data.user;
        throw new Error(data.status);
      })
      .then(payload => dispatch(createSession(payload)))  // ?
      .catch(error => dispatch({ type: FAIL_REGISTRATION, payload: error}));
  }
}
