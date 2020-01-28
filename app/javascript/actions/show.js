import axios from 'axios';
import {
  GET_LINK,
  GET_USER,
  EXCEPTION_ERROR
} from '../common/variables';

export const getLink = (id) => dispatch => {
  return axios.post(`api/v1/links/${id}`, { id })
    .then(({ data }) => {
      if (!data) throw new Error('no link data');
      console.log('get link', data);
      // if (!data.statue !== ) throw new Error(data.errors[0]);
      // return data.user;
    })
    // .then(payload => dispatch({ type: CREATE_SESSION, payload }))
    .catch(error => dispatch({ type: FAIL_LOGIN, payload: error }));
}

// export const destroySession = () => {
//   return dispatch => {
//     return axios.delete('logout')
//       .then(({ data }) => {
//         if (!data || !data.logged_out) throw new Error('Failed logout');
//       })
//       .then(payload => dispatch({ type: DESTROY_SESSION, payload }))
//       .catch(error => dispatch({ type: FAIL_LOGOUT, payload: error }));
//   }
// }
//
// export const readSession = () => {
//   return dispatch => {
//     return axios.get('logged_in', { withCredentials: true})
//       .then(({ data }) => {
//         if (!data) throw new Error('Wrong info');
//         if (data.logged_in) dispatch({ type: READ_SESSION, payload: data.user });
//         else dispatch({ type: READ_SESSION, payload: {} })
//       })
//       .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
//   }
// }
