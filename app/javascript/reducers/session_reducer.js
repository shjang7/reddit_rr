import { CREATE_SESSION, DESTROY_SESSION } from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case CREATE_SESSION:
      const { username, email } = payload;
      return { username, email };
    case DESTROY_SESSION:
      return {};
    default:
      return state;
  }
};
