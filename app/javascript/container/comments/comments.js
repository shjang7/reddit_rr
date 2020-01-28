import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments } from '../../actions';
import CommentForm from '../../components/comments/comment_form';
import { timeSince } from '../../common/functions';

const Comments = ({ comments, getComments, linkId }) => {
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    getComments(linkId);
  }, []);

  useEffect(() => {
    setCommentsData(comments);
    console.log('set comments', comments)
  }, [comments]);

  const handleDelete = (data) => {
    console.log('delete');
    // destroyComment(data);
  }

  const renderComments = commentsData ? commentsData.map((data) => {
    return (
      <li key={ data.id }>
        { data.body }
        { timeSince(data.created_at) }
        <button type='button' onClick={ () => handleDelete(data) }>
          delete
        </button>
      </li>
    );
  }) : null;

  const handleSubmitComment = ({ body }) => {
    console.log('submit comment', body);
  }

  return (
    <React.Fragment>
      <h1>Comments List</h1>
      <ul>{ renderComments }</ul>
      <CommentForm submitBtn='Add Comment' handleSubmit={ handleSubmitComment } />
    </React.Fragment>
  );
}

export default connect(({ comments }) => ({ comments }), { getComments })(Comments);
