import {
  GET_LINKS_REQUEST,
  GET_LINKS_SUCCESS,
  FAIL_LINKS_REQUEST
} from '../common/variables';

export const getLinks = () => {
  console.log('getLinks() Action!!')
  return dispatch => {
    dispatch({ type: GET_LINKS_REQUEST });
    return fetch(`api/v1/links`)
      .then(response => response.json())
      .then(data => data.links ? data.links : null) // ?
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
