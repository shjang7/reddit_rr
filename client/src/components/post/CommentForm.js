import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('')

  return (
    <div className="comment-form">
      <h5>Leave a comment</h5>
      <form
        className="form my-1"
        onSubmit={async e => {
          e.preventDefault()
          await addComment(postId, { body: text })
          setText('')
        }}
      >
        <div className="form-group">
          <input
            type="text"
            name="text"
            placeholder="Write a text"
            value={text}
            onChange={e => setText(e.target.value)}
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
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
}

export default connect(
  null,
  { addComment },
)(CommentForm)
