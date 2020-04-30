import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost, getPost } from '../../actions/post'
import { Link } from 'react-router-dom'

const PostEdit = ({ post: { post, loading }, addPost, getPost, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
  })

  useEffect(() => {
    getPost()
    if (!loading && post) {
      setFormData({
        title: post.title,
        url: post.url,
      })
    }
    // eslint-disable-next-line
  }, [loading, getPost])

  const { title, url } = formData

  const onChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value })

  const onSubmit = async e => {
    e.preventDefault()
    await addPost({ title, url }, history)
  }

  return (
    <>
      <Link to="/" className="btn btn-dark mb-3">
        Go Back
      </Link>
      <div className="post-form">
        <h5>Edit Post...</h5>
        <form className="form my-1" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              value={title}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="url"
              placeholder="Write a url"
              value={url}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-dark my-1 form-control"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </>
  )
}

PostEdit.propTypes = {
  addPost: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const setStateToProps = state => ({
  post: state.post,
})

export default connect(
  setStateToProps,
  { addPost, getPost },
)(PostEdit)
