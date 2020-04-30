import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_POST,
} from '../common/types'

const initialState = {
  posts: [],
  post: null,
  loading: true,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      }
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      }
    case UPDATE_POST:
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload.id ? payload : post,
        ),
        loading: false,
      }
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: [payload, ...state.post.comments] },
        loading: false,
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment.id !== payload,
          ),
        },
        loading: false,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
        loading: false,
      }
    case POST_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
