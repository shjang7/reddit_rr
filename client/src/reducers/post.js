import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../common/types'

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts
          .map(post => (post.id === payload.id ? payload : post))
          .sort((a, b) => a.get_upvotes.length > b.get_upvotes.length),
        loading: false,
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}
