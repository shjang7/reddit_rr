import {
  FAIL_LINKS_REQUEST,
  FAIL_REGISTRATION
} from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case FAIL_LINKS_REQUEST:
      // console.log('fails link', payload);
      return 'It didn\'t get links';
    case FAIL_REGISTRATION:
      return payload;
    default:
      return state;
  }
};
