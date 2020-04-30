import axios from 'axios'
import { setAlert } from './alert'
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_POST,
} from '../common/types'

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

// Delete post
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/links/${id}`)

    dispatch({
      type: DELETE_POST,
      payload: id,
    })

    dispatch(setAlert('Post Removed', 'alert'))
  } catch (err) {
    console.error(err)
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Add post
export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(`/links`, { link: formData }, config)

    dispatch({
      type: ADD_POST,
      payload: res.data,
    })

    dispatch(setAlert('Post Created', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Add post
export const updatePost = (id, formData, history = null) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.put(`/links/${id}`, { link: formData }, config)

    dispatch({
      type: UPDATE_POST,
      payload: res.data,
    })

    dispatch(setAlert('Post Updated', 'success'))

    if (history) {
      history.push('/')
    }
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Get post
export const getPost = id => async dispatch => {
  try {
    const res = await axios.get(`/links/${id}`)

    dispatch({
      type: GET_POST,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Add comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.post(
      `/links/${postId}/comments/`,
      { comment: formData },
      config,
    )

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    })

    dispatch(setAlert('Comment Added', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/links/${postId}/comments/${commentId}`)

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    })

    dispatch(setAlert('Comment Removed', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
