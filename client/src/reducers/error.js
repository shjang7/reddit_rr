import {
  EXCEPTION_ERROR
} from '../common/types';

export default (state = '', { type, payload }) => {
  switch(type) {
    case EXCEPTION_ERROR:
      console.log('EXCEPTION', payload);
      return payload.message;
    default:
      return state;
  }
};
