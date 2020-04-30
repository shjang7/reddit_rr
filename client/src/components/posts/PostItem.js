import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { upVote, downVote, deletePost } from '../../actions/post'

const PostItem = ({
  upVote,
  downVote,
  deletePost,
  auth,
  post: {
    id,
    title,
    url,
    created_at,
    updated_at,
    user_id: authorId,
    user: { username: authorName },
    get_upvotes: likes,
    get_downvotes: dislikes,
    comments,
  },
  showActions,
}) => (
  <div className="post border border-success rounded my-3">
    {showActions && (
      <div className="votings">
        <a type="button" onClick={() => upVote(id)}>
          <i className="fas fa-long-arrow-alt-up" />{' '}
          <span>{likes.length || ''}</span>
        </a>
        <a type="button" onClick={() => downVote(id)}>
          <i className="fas fa-long-arrow-alt-down" />{' '}
          <span>{dislikes.length || ''}</span>
        </a>
      </div>
    )}
    <div className="p-3">
      <div>{authorName}</div>

      <p className="text-white my-1">{title}</p>
      <a href={url}>
        <p className="text-warning my-1">{url}</p>
      </a>
      <p className="text-white post-date">
        Posted on <Moment format="YYYY/MM/DD">{created_at}</Moment>
      </p>
    </div>
    {showActions && (
      <div className="control-buttons">
        <Link to={`/posts/${id}`} className="btn btn-dark">
          Discussion{' '}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && auth.user && authorId === auth.user.id && (
          <>
            <Link to={`/posts/${id}/edit`} className="btn btn-dark">
              <i class="fab fa-elementor" />
            </Link>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => deletePost(id)}
            >
              <i className="fas fa-times" />
            </button>
          </>
        )}
      </div>
    )}
  </div>
)

PostItem.defaultProps = {
  showActions: true,
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(
  mapStateToProps,
  { upVote, downVote, deletePost },
)(PostItem)
