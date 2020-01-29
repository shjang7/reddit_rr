import axios from 'axios';
import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  DELETE_LINK,
  FAIL_LINKS_REQUEST,
  EXCEPTION_ERROR
} from '../common/variables';

export const getLinks = () => {
  console.log('getLinks() Action!!')
  return dispatch => {
    dispatch({ type: GET_LINKS_REQUEST });
    return fetch(`api/v1/links`)
      .then(response => response.json())
      .then(data => {
        if(data.links) return data.links;

        throw new Error('no data');
      })
      .then(links => dispatch(getLinksSuccess(links)))
      .catch(error => (dispatch({ type: FAIL_LINKS_REQUEST, payload: error })));
  };
};

export const getLinksSuccess = (data) => {
  return {
    type: GET_LINKS_SUCCESS,
    payload: data
  };
};

export const createLinks = (linkData) => async dispatch => {
  return await axios.post('/api/v1/links', { link: linkData })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      if (data.status !== 'created') throw new Error(data.errors[0]);
      dispatch({ type: CREATE_LINK, payload: data.location });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}

export const destroyLink = ({ id }) => async dispatch => {
  return await axios.delete(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('failed delete');
      if (data.status === 'fail') throw new Error(data.message);
      dispatch({ type: DELETE_LINK, payload: id });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
