import {
  READ_LINK,
  READ_SESSION
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    // case CURRENT_USER:
    //   console.log('show user');
    //   return { ...state, currentUser: payload };
    case READ_LINK:
      return { ...state, link: payload };
    // case READ_SESSION:
    //   console.log('session reducer', payload);
    //   return { ...state, session: payload };
    default:
      return state;
  }
};
