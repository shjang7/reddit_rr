import axios from 'axios';
import {
  CREATE_SESSION,
  FAIL_REGISTRATION
} from '../common/variables';
import { createSession } from '../session';

export const createRegistration = (userData) => {
  return dispatch => {
    return axios.post('api/v1/users', { user: userData })
      .then(({ data }) => (data.status === 'created' ? data.user : null))
      .then(payload => dispatch(createSession(payload)))
      .catch(error => ({ type: FAIL_REGISTRATION, payload: error.errors}));
  }
}
