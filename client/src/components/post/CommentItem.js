import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'

const CommentItem = ({
  postId,
  comment: {
    id,
    body: text,
    user_id: authorId,
    user: { username: authorName },
    created_at,
    updated_at,
  },
  auth,
  deleteComment,
}) => (
  <div className="post border border-success rounded my-3">
    <div className="p-3">
      <div>{authorName}</div>
      <p className="text-white my-1">{text}</p>
      <p className="text-white post-date">
        Posted on <Moment format="YYYY/MM/DD">{created_at}</Moment>
      </p>
    </div>
    {!auth.loading && auth.user && authorId === auth.user.id && (
      <div className="control-buttons">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => deleteComment(postId, id)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    )}
  </div>
)

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { deleteComment },
)(CommentItem)
