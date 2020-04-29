import {
  GET_COMMENTS_SUCCESS,
  CREATE_COMMENT,
  DELETE_COMMENT
} from '../common/types';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_COMMENTS_SUCCESS:
      return payload;
    case CREATE_COMMENT:
      return [...state, payload];
    case DELETE_COMMENT:
      return [...state.filter(({ id }) => id !== payload)];
    default:
      return state;
  }
};
