import {
  CREATE_SESSION,
  DESTROY_SESSION,
  READ_SESSION
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_SESSION:
      console.log('create session');
      return payload;
    case DESTROY_SESSION:
      console.log('destroy session');
      return {};
    case READ_SESSION:
      // console.log('read session', payload);
      // if (payload == {}) return state;
      return state;
    default:
      return state;
  }
};
