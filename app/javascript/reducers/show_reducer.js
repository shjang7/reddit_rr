import {
  READ_LINK
} from '../common/variables';

export default (state = {}, { type, payload }) => {
  switch(type) {
    case READ_LINK:
      return { ...state, link: payload };
    default:
      return state;
  }
};
