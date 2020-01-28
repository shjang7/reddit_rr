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
      if (!data || !data.comments) throw new Error('failed get comments');
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data.comments });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
