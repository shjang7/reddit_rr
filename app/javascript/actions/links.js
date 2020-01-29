import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  DELETE_LINK,
  EXCEPTION_ERROR
} from '../common/variables';

export const getLinks = () => async (dispatch) => {
  dispatch({ type: GET_LINKS_REQUEST });
  return await axios.get(`/api/v1/links`)
    .then(({ data }) => {
      if (!data || !data.links) throw new Error('connection error');
      dispatch({ type: GET_LINKS_SUCCESS, payload: data.links });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createLinks = (linkData) => async dispatch => {
  return await axios.post('/api/v1/links', { link: linkData })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors[0] || 'failed create');
      dispatch({ type: CREATE_LINK, payload: data.location });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}

export const destroyLink = ({ id }) => async dispatch => {
  return await axios.delete(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'destroyed') throw new Error(data.error || 'failed delete');
      dispatch({ type: DELETE_LINK, payload: id });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
