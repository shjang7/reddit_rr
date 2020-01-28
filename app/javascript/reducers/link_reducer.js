import {
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  DELETE_LINK
} from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_LINKS_SUCCESS:
      return payload;
    case CREATE_LINK:
      return [...state, payload];
    case DELETE_LINK:
      return [...state.filter(({id}) => id !== payload)];
    default:
      return state;
  }
};
