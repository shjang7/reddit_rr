import {
  FAIL_LINKS_REQUEST,
  FAIL_REGISTRATION,
  FAIL_LOGIN
} from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case FAIL_LINKS_REQUEST:
      // console.log('fails link', payload);
      return payload;
    case FAIL_REGISTRATION:
      // console.log('fails registrations')
      return payload;
    case FAIL_LOGIN:
      // console.log('fail login');
      return payload;
    default:
      return state;
  }
};
