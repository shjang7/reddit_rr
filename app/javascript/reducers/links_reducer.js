import {
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  DELETE_LINK,
  READ_LINK,
  UPVOTE_LINK,
  DOWNVOTE_LINK,
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
    case UPVOTE_LINK:
      console.log('upvote', payload);
      return { ...state, link: { ...state.link, ...payload }};
    case DOWNVOTE_LINK:
    console.log('upvote', payload);
      return { ...state, link: { ...state.link, ...payload }};
    default:
      return state;
  }
};
