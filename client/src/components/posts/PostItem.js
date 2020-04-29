import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { id, title, url, created_at, updated_at, user_id: authorId, user: {username: authorName}, get_upvotes: likes, get_downvotes: dislikes },
  showActions
}) => (
  <div className="post border border-success rounded my-3">
    <div className="buttons">
      <a>
        <i class="fas fa-long-arrow-alt-up" />{' '}
        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
      </a>
      <a>
        <i class="fas fa-long-arrow-alt-down" />{' '}
      </a>

      {}
    </div>
    <div className="p-3">
      <Link to={`/profile/${'authorId'}`}>
        <h4>{authorName}</h4>
      </Link>
      <p className="text-white my-1">{title}</p>
      <p className="text-white post-date">
        Posted on <Moment format="YYYY/MM/DD">{created_at}</Moment>
      </p>
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(PostItem);

// <Link to={`/posts/${id}`} className="btn btn-primary">
//   Discussion{' '}
//   {}
// </Link>

// !auth.loading && authorId === auth.user.id && (
//   <button
//     type="button"
//     className="btn btn-danger"
//   >
//     <i className="fas fa-times" />
//   </button>
// )


// showActions && (
//   <Fragment>
//     <button
//       type="button"
//       className="btn btn-light"
//     >
//       <i className="fas fa-thumbs-up" />{' '}
//       <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
//     </button>
//     <button
//       type="button"
//       className="btn btn-light"
//     >
//       <i className="fas fa-thumbs-down" />
//     </button>
//     <Link to={`/posts/${_id}`} className="btn btn-primary">
//       Discussion{' '}
//       {comments.length > 0 && (
//         <span className="comment-count">{comments.length}</span>
//       )}
//     </Link>
//     {!auth.loading && user === auth.user._id && (
//       <button
//         type="button"
//         className="btn btn-danger"
//         onClick={e => deletePost(_id)}
//       >
//         <i className="fas fa-times" />
//       </button>
//     )}
//   </Fragment>
// )
