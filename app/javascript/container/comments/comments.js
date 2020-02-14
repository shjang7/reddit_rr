import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComments, createComments, destroyComment } from '../../actions';
import CommentForm from '../../components/comments/comment_form';
import Comment from '../../components/comments/comment';
import { timeSince } from '../../common/functions';

const Comments = ({ comments, getComments, createComments, destroyComment, session, linkId }) => {
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
      <li key={ data.id } className="clearfix list-style-none">
        <Comment data={data} handleDelete={handleDelete} currentUser={session.username} />
      </li>
    );
  }) : null;

  const submitComment = ({ body }) => {
    if (!body || !linkId) return false;

    createComments(body, linkId);
  }

  return (
    <React.Fragment>
      <h3>{ commentsData.length } Comments</h3>
      <ul className='comments'>{ renderComments }</ul>
      <CommentForm submitBtn='Add Comment' handleSubmit={ submitComment } />
    </React.Fragment>
  );
}

export default connect(({ comments, session }) => ({ comments, session }), { getComments, createComments, destroyComment })(Comments);
