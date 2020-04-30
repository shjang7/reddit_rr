import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'

const PostCreate = ({ auth: { loading, user }, addPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
  })

  const { title, url } = formData

  const onChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value })

  const onSubmit = async e => {
    e.preventDefault()
    await addPost({ title, url })
    setFormData({ title: '', url: '' })
  }

  return (
    !loading &&
    user && (
      <div className="post-form">
        <h5>Upload a url...</h5>
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
    )
  )
}

PostCreate.propTypes = {
  addPost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { addPost },
)(PostCreate)
