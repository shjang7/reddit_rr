import {
  GET_LINK,
  GET_USER,
  CURRENT_USER
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case GET_LINK:
      console.log('show link');
      return { ...state, showLink: payload };
    case GET_USER:
      console.log('show user');
      return { ...state, showUser: payload };
    case CURRENT_USER:
      console.log('show user');
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
