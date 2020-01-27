import {
  FAIL_LINKS_REQUEST,
  FAIL_REGISTRATION,
  FAIL_LOGIN,
  FAIL_LOGOUT,
  EXCEPTION_ERROR
} from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case FAIL_LINKS_REQUEST:
      console.log('fails link', payload);
      return payload;
    case FAIL_REGISTRATION:
      console.log('fails registrations', payload)
      return payload;
    case FAIL_LOGIN:
      console.log('fail login');
      return payload;
    case FAIL_LOGOUT:
      console.log('fail logout');
      return payload;
    case EXCEPTION_ERROR:
      console.log('exception error', payload);
      return payload;
    default:
      return state;
  }
};
