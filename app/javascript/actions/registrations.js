import axios from 'axios';
import {
  CREATE_SESSION,
  FAIL_REGISTRATION
} from '../common/variables';
import { createSession } from './session';

export const createRegistration = (userData) => {
  return dispatch => {
    return axios.post('api/v1/users', { user: userData })
      .then(({ data }) => {
        if (data.status != 'created') throw new Error(data.status);
        return data.user;
      })
      .then(payload => dispatch(createSession(payload)))  // ?
      .catch(error => {
        return dispatch({ type: FAIL_REGISTRATION, payload: error});
      });
  }
}
