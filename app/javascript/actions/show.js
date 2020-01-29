import axios from 'axios';
import {
  GET_LINK,
  GET_USER,
  EXCEPTION_ERROR
} from '../common/variables';

export const getLink = (id) => dispatch => {
  return axios.get(`/api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      if (!data.statue === 500) throw new Error(data.errors[0]);
      return data.link;
    })
    .then(payload => dispatch({ type: GET_LINK, payload }))
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
}
