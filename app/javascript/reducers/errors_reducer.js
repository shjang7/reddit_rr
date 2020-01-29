import {
  FAIL_LOGIN,
  FAIL_LOGOUT,
  EXCEPTION_ERROR
} from '../common/variables';

export default (state = '', { type, payload }) => {
  switch(type) {
    case FAIL_LOGIN:
      console.log('fail login');
      // return [payload];
    case FAIL_LOGOUT:
      console.log('fail logout');
      // return [payload];
    case EXCEPTION_ERROR:
      console.log('EXCEPTION_ERROR');
      return payload.message;
    default:
      return state;
  }
};
