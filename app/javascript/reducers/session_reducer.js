import {
  CREATE_SESSION,
  DESTROY_SESSION,
  READ_SESSION
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_SESSION:
      return payload;
    case DESTROY_SESSION:
      return {};
    case READ_SESSION:
      return payload;
    default:
      return state;
  }
};
