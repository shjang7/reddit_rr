import {
  EXCEPTION_ERROR
} from '../common/variables';

export default (state = '', { type, payload }) => {
  switch(type) {
    case EXCEPTION_ERROR:
      return payload.message;
    default:
      return state;
  }
};
