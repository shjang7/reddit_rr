import {
  GET_LINK,
  GET_USER,
  CURRENT_USER
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    // case CURRENT_USER:
    //   console.log('show user');
    //   return { ...state, currentUser: payload };
    case GET_LINK:
      return { ...state, link: payload };
    // case GET_USER:
    //   console.log('show user');
    //   return { ...state, showUser: payload };
    default:
      return state;
  }
};
