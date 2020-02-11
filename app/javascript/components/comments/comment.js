import React from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';

const Comment = ({ data, handleDelete }) => {
  const { id, body, created_at, user_id, author } = data;

  return (
    <>
      { body }
      | { timeSince(created_at) }
      | by { author }
      <button type='button' className="btn btn-base btn-sm" onClick={ () => handleDelete(id) }>
        delete
      </button>
    </>
  )
}


export default Comment;
