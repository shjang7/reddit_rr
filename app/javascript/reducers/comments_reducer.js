import { GET_COMMENTS_SUCCESS } from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_COMMENTS_SUCCESS:
      console.log('get comments', payload);
      return payload;
    default:
      return state;
  }
};
