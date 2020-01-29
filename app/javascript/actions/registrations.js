import axios from 'axios';
import {
  EXCEPTION_ERROR,
  CREATE_SESSION
} from '../common/variables';

export const createRegistration = (userData) => async (dispatch) => {
  return await axios.post('api/v1/users', { user: userData })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors[0]);
      return data.user;
    })
    .then((payload) => {
      dispatch({ type: CREATE_SESSION, payload });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
