import {
  READ_LINK,
  VOTE_LINK
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case READ_LINK:
      return { ...state, link: payload };
    case VOTE_LINK:
      return { ...state, vote: payload };
    default:
      return state;
  }
};
