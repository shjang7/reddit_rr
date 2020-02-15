import {
  GET_LINKS_SUCCESS,
  CREATE_LINK,
  UPDATE_LINK,
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
    case UPDATE_LINK:
      return { ...state, links: [...state.links.filter(({id}) => id !== payload.id), payload] };
    case DELETE_LINK:
      return { ...state, links: [...state.links.filter(({id}) => id !== payload)] };
    case READ_LINK:
      return { ...state, link: payload };
    case UPVOTE_LINK:
      return { ...state, links:
        [
          ...state.links.filter(({id}) => id !== payload.id),
          { ...state.links.find(({id}) => id === payload.id), votes: payload.votes }
        ],
        link: { ...state.link, votes: payload.votes }
      };
    case DOWNVOTE_LINK:
      return { ...state, links:
        [
          ...state.links.filter(({id}) => id !== payload.id),
          { ...state.links.find(({id}) => id === payload.id), votes: payload.votes }
        ],
        link: { ...state.link, votes: payload.votes }
      };
    default:
      return state;
  }
};
