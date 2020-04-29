import axios from 'axios'
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../common/types'

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/links')

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Upvote
export const upVote = id => async dispatch => {
  try {
    const res = await axios.get(`/links/${id}/upvote`)

    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Downvote
export const downVote = id => async dispatch => {
  try {
    const res = await axios.get(`/links/${id}/downvote`)

    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
