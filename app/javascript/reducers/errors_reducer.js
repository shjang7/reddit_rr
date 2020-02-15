import {
  EXCEPTION_ERROR
} from '../common/variables';

export default (state = '', { type, payload }) => {
  switch(type) {
    case EXCEPTION_ERROR:
      console.log('EXCEPTION', payload);
      return payload.message;
    default:
      return state;
  }
};
