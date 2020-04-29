import axios from 'axios'
import { setAlert } from './alert'

import {
  GET_PROFILE,
  PROFILE_ERROR,
} from '../common/types'

// Get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = axios.get('/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
