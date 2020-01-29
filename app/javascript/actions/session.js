import axios from 'axios';
import {
  CREATE_SESSION,
  DESTROY_SESSION,
  EXCEPTION_ERROR
} from '../common/variables';

export const createSession = (userData) => async (dispatch) => {
  return await axios.post('/login', { session: userData })
    .then( async ({ data }) => {
      if (!data) throw new Error('Failed login');
      if (!data.logged_in) throw new Error(data.errors[0]);
      await dispatch({ type: CREATE_SESSION, payload: data.user });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}

export const destroySession = () => async (dispatch) => {
  return await axios.delete('/logout')
    .then(({ data }) => {
      if (!data || !data.logged_out) throw new Error('Failed logout');
      dispatch({ type: DESTROY_SESSION, payload: '' });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
