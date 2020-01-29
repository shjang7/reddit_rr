import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments, createComments, destroyComment } from '../../actions';
import CommentForm from '../../components/comments/comment_form';
import { timeSince } from '../../common/functions';

const Comments = ({ comments, getComments, createComments, destroyComment, linkId }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getComments(linkId);
  }, []);

  useEffect(() => {
    setCommentsData(comments);
  }, [comments]);

  const handleDelete = (id) => {
    destroyComment(id);
  }

  const renderComments = commentsData ? commentsData.map((data) => {
    return (
      <li key={ data.id }>
        { data.body }
        | { timeSince(data.created_at) }
        | user id: { data.user_id }
        <button type='button' onClick={ () => handleDelete(data.id) }>
          delete
        </button>
      </li>
    );
  }) : null;

  const submitComment = ({ body }) => {
    createComments(body, linkId);
  }

  return (
    <React.Fragment>
      <h3>{ commentsData.length } Comments</h3>
      <ul>{ renderComments }</ul>
      <CommentForm submitBtn='Add Comment' handleSubmit={ submitComment } />
    </React.Fragment>
  );
}

export default connect(({ comments }) => ({ comments }), { getComments, createComments, destroyComment })(Comments);
