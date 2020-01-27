import { GET_LINKS_SUCCESS } from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_LINKS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
