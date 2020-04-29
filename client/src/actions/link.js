import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  READ_LINK,
  UPDATE_LINK,
  DELETE_LINK,
  UPVOTE_LINK,
  DOWNVOTE_LINK,
  EXCEPTION_ERROR
} from '../common/types';

export const getLinks = () => async (dispatch) => {
  // dispatch({ type: GET_LINKS_REQUEST });
  // return await axios.get(`/links`)
  //   .then(({ data }) => {
  //     if (!data || !data.location) throw new Error('connection error');
  //     return data.location;
  //   })
  //   .then(payload => dispatch({ type: GET_LINKS_SUCCESS, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const readLink = (id) => async (dispatch) => {
  // return await axios.get(`/links/${id}`, { id })
  //   .then(({ data }) => {
  //     if (!data) throw new Error('no link data');
  //     if (!data.location) throw new Error(data.errors || 'fail at loading link');
  //     return data.location;
  //   })
  //   .then(payload => dispatch({ type: READ_LINK, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createLinks = (link) => async (dispatch) => {
  // return await axios.post('/links', { link })
  //   .then(({ data }) => {
  //     if (!data) throw new Error('connection error');
  //     if (data.status !== 'created') throw new Error(data.errors || 'failed create');
  //     return data.location;
  //   })
  //   .then(payload => dispatch({ type: CREATE_LINK, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const updateLinks = (id, link) => async (dispatch) => {
  // console.log('updateLinks', id, link);
  // return await axios.put(`/links/${id}`, { id, link })
  //   .then(({ data }) => {
  //     if (!data) throw new Error('connection error');
  //     if (data.status !== 'updated') throw new Error(data.errors || 'failed update');
  //     return data.location;
  //   })
  //   .then(payload => dispatch({ type: UPDATE_LINK, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const destroyLink = (id) => async (dispatch) => {
  // return await axios.delete(`/links/${id}`, { id })
  //   .then(({ data }) => {
  //     if (!data) throw new Error('connection error');
  //     if (data.status !== 'destroyed') throw new Error(data.errors || 'failed delete');
  //     return id;
  //   })
  //   .then(payload => dispatch({ type: DELETE_LINK, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const upvoteLink = (id) => async (dispatch) => {
  // return await axios.post(`/links/${id}/upvote`)
  // .then(({ data }) => {
  //   if (!data) throw new Error('connection error');
  //   if (!data.location) throw new Error(data.errors || 'Vote fail');
  //   return { id, votes: data.location };
  // })
  // .then(payload => dispatch({ type: UPVOTE_LINK, payload }))
  // .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const downvoteLink = (id) => async (dispatch) => {
  // return await axios.post(`/links/${id}/downvote`)
  //   .then(({ data }) => {
  //     if (!data) throw new Error('connection error');
  //     if (!data.location) throw new Error(data.errors || 'Vote fail');
  //     return { id, votes: data.location };
  //   })
  //   .then(payload => dispatch({ type: DOWNVOTE_LINK, payload }))
  //   .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};
