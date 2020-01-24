import { CREATE_SESSION } from '../common/variables';

export default (state = {}, { type, data }) => {
  switch(type) {
    case CREATE_SESSION:
      return { ...state, username: data };
    default:
      return state;
  }
};
