import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  READ_LINK,
  DELETE_LINK,
  VOTE_LINK,
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

export const readLink = (id) => async (dispatch) => {
  return await axios.get(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      if (!data.link) throw new Error(data.errors || 'fail at loading link');
      return data.link;
    })
    .then(payload => dispatch({ type: READ_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createLinks = (linkData) => async (dispatch) => {
  return await axios.post('/api/v1/links', { link: linkData })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors || 'failed create');
      dispatch({ type: CREATE_LINK, payload: data.location });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const destroyLink = ({ id }) => async (dispatch) => {
  return await axios.delete(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'destroyed') throw new Error(data.errors || 'failed delete');
      dispatch({ type: DELETE_LINK, payload: id });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const upvoteLink = (id) => async (dispatch) => {
  return await axios.post(`/api/v1/links/${id}/upvote`, { id })
  .then(({ data }) => {
    if (!data) throw new Error('connection error');
    if (data.status !== 'success') throw new Error(data.errors || 'Vote fail');
    dispatch({ type: VOTE_LINK, payload: data });
  })
  .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const downvoteLink = (id) => async (dispatch) => {
  return await axios.post(`/api/v1/links/${id}/downvote`)
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'success') throw new Error(data.errors || 'Vote fail');
      dispatch({ type: VOTE_LINK, payload: data });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
