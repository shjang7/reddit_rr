import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments, createComments, destroyComment } from '../../actions';
import CommentForm from '../../components/comments/comment_form';
import Comment from '../../components/comments/comment';
import { timeSince } from '../../common/functions';

const Comments = ({ comments, getComments, createComments, destroyComment, session: { username }, linkId }) => {
  useEffect(() => {
    getComments(linkId);
  }, []);

  const handleDelete = (id) => {
    destroyComment(id);
  }

  const renderComments = comments.map((data) => (
    <Comment data={data} key={ data.id } handleDelete={handleDelete} currentUser={username} />
  ));

  const submitComment = ({ body }) => {
    if (!body || !linkId) return false;

    createComments(body, linkId);
  }

  return (
    <div className="comments">
      <h3>{ comments.length } Comments</h3>
      <ul className="list-style-none">{ renderComments }</ul>
      <CommentForm submitBtn='Add Comment' handleSubmit={ submitComment } />
    </div>
  );
}

Comments.defaultProps = { session: { username: '' }};

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  getComments: PropTypes.func.isRequired,
  createComments: PropTypes.func.isRequired,
  destroyComment: PropTypes.func.isRequired,
  session: PropTypes.shape({
    username: PropTypes.string
  }),
  linkId: PropTypes.string.isRequired,
}

export default connect(({ comments, session }) => ({ comments, session }), { getComments, createComments, destroyComment })(Comments);
