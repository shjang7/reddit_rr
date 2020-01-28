import {
  GET_LINK,
  GET_USER
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case GET_LINK:
      console.log('show link');
      return payload;
    case GET_USER:
      console.log('show user');
      return payload;
    default:
      return state;
  }
};
