import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS
} from '../common/variables';

export const getLinks = () => {
  console.log('getLinks() Action!!')
  return dispatch => {
    dispatch({ type: GET_LINKS_REQUEST });
    return fetch(`api/v1/links`)
      .then(response => response.json())
      .then(data => dispatch(getLinksSuccess(data)))
      .catch(error => console.log(error));
  };
};

export const getLinksSuccess = (data) => {
  return {
    type: GET_LINKS_SUCCESS,
    data
  };
};
