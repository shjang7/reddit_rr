import React from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';

const Comment = ({ data, handleDelete }) => {
  const { body, created_at, user_id } = data;

  return (
    <>
      { data.body }
      | { timeSince(data.created_at) }
      | user id: { data.user_id }
      <button type='button' className="btn btn-base btn-sm" onClick={ () => handleDelete(data.id) }>
        delete
      </button>
    </>
  )
}


export default Comment;
