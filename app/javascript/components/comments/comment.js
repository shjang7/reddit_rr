import React from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';

const Comment = ({ data, handleDelete, currentUser }) => {
  const { id, body, created_at, user_id, author } = data;

  const renderDelete = currentUser === author ? (
    <button type='button' className="btn btn-base btn-sm" onClick={ () => handleDelete(id) }>
      delete
    </button>
  ) : null;

  return (
    <>
      <div className="float-left">
        <div className="lead">{ body }</div>
        <div>
          <small>
            Submitted <strong>{ timeSince(created_at) }</strong> by { author }
          </small>
        </div>
      </div>
      <div className="float-right btn-group">
        {renderDelete}
      </div>
    </>
  )
}


export default Comment;
