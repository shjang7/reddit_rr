import axios from 'axios';
import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EXCEPTION_ERROR
} from '../common/types';

export const getComments = (link_id) => async (dispatch) => {
  // dispatch({ type: GET_COMMENTS_REQUEST });
  // return await axios.get(`/links/${link_id}/comments`)
  //   .then(({ data }) => {
  //     if (!data || !data.comments) throw new Error('connection error');
  //     dispatch({ type: GET_COMMENTS_SUCCESS, payload: data.comments });
  //   })
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createComments = (body, link_id) => async (dispatch) => {
  // return await axios.post(`/comments`, { comment: { body, link_id }})
  //   .then(({ data }) => {
  //     if (!data) throw new Error('connection error');
  //     if (data.status !== 'created') throw new Error(data.errors || 'failed create');
  //     dispatch({ type: CREATE_COMMENT, payload: data.location });
  //   })
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const destroyComment = (id) => async (dispatch) => {
  // return await axios.delete(`/comments/${id}`, { id })
  //   .then(({ data }) => {
  //     if (!data || data.status != 'destroyed') throw new Error(data.errors || 'failed delete');
  //     dispatch({ type: DELETE_COMMENT, payload: id });
  //   })
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
