import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  READ_LINK,
  DELETE_LINK,
  UPVOTE_LINK,
  DOWNVOTE_LINK,
  EXCEPTION_ERROR
} from '../common/variables';

export const getLinks = () => async (dispatch) => {
  dispatch({ type: GET_LINKS_REQUEST });
  return await axios.get(`/api/v1/links`)
    .then(({ data }) => {
      if (!data || !data.location) throw new Error('connection error');
      return data.location;
    })
    .then(payload => dispatch({ type: GET_LINKS_SUCCESS, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const readLink = (id) => async (dispatch) => {
  return await axios.get(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      if (!data.location) throw new Error(data.errors || 'fail at loading link');
      return data.location;
    })
    .then(payload => dispatch({ type: READ_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createLinks = (linkData) => async (dispatch) => {
  return await axios.post('/api/v1/links', { link: linkData })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors || 'failed create');
      return data.location;
    })
    .then(payload => dispatch({ type: CREATE_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const destroyLink = (id) => async (dispatch) => {
  return await axios.delete(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'destroyed') throw new Error(data.errors || 'failed delete');
      return id;
    })
    .then(payload => dispatch({ type: DELETE_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const upvoteLink = (id) => async (dispatch) => {
  return await axios.post(`/api/v1/links/${id}/upvote`)
  .then(({ data }) => {
    if (!data) throw new Error('connection error');
    if (!data.location) throw new Error(data.errors || 'Vote fail');
    return { id, votes: data.location };
  })
  .then(payload => dispatch({ type: UPVOTE_LINK, payload }))
  .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const downvoteLink = (id) => async (dispatch) => {
  return await axios.post(`/api/v1/links/${id}/downvote`)
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (!data.location) throw new Error(data.errors || 'Vote fail');
      return { id, votes: data.location };
    })
    .then(payload => dispatch({ type: DOWNVOTE_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
