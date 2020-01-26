import { CREATE_SESSION, DESTROY_SESSION } from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_SESSION:
      return payload;
    case DESTROY_SESSION:
      return {};
    default:
      return state;
  }
};
