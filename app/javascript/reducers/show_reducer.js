import {
  GET_LINK,
  GET_USER,
  CURRENT_USER
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case GET_LINK:
      return { ...state, link: payload };
    default:
      return state;
  }
};
