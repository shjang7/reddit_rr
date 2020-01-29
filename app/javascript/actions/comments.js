import axios from 'axios';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EXCEPTION_ERROR
} from '../common/variables';

export const getComments = (linkId) => async (dispatch) => {
  dispatch({ type: GET_COMMENTS_REQUEST });
  return await axios.get(`/api/v1/links/${linkId}/comments`)
    .then(({ data }) => {
      if (!data || !data.comments) throw new Error('connection error');
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data.comments });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createComments = (body, link_id) => async (dispatch) => {
  return await axios.post(`/api/v1/comments`, { comment: { body, link_id }})
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors[0] || 'failed create');
      dispatch({ type: CREATE_COMMENT, payload: data.location });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERRORS, payload: error }));
};

export const destroyComment = (id) => async (dispatch) => {
  return await axios.delete(`/api/v1/comments/${id}`, { id })
    .then(({ data }) => {
      if (!data || data.status != 'destroyed') throw new Error(data.errors[0] || 'failed delete');
      dispatch({ type: DELETE_COMMENT, payload: id });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
