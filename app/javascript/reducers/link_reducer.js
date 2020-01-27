import { GET_LINKS_SUCCESS, CREATE_LINK } from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_LINKS_SUCCESS:
      return payload;
    case CREATE_LINK:
      return [...state, payload];
    default:
      return state;
  }
};
