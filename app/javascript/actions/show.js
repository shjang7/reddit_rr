import axios from 'axios';
import {
  READ_LINK,
  EXCEPTION_ERROR
} from '../common/variables';

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
