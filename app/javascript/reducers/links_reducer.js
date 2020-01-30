import {
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  DELETE_LINK,
  READ_LINK,
  VOTE_LINK
} from '../common/variables';

export default (state = [], { type, payload }) => {
  switch(type) {
    case GET_LINKS_SUCCESS:
      return { ...state, links: payload };
    case CREATE_LINK:
      return { ...state, links: [...state.links, payload] };
    case DELETE_LINK:
      return { ...state, links: [...state.links.filter(({id}) => id !== payload)] };
    case READ_LINK:
      return { ...state, link: payload };
    case VOTE_LINK:
      return { ...state, vote: payload };
    default:
      return state;
  }
};
