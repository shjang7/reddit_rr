import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';

const ALink = ({ data, handleUpvote, handleDownvote, handleDelete }) => {
  const { author, link: { created_at, id, title, updated_at, url, user_id }, votes: { up, down, weight }} = data;

  return (
    <div>
      <div>
        { title } { timeSince(created_at) } { url }
        <button type='button' onClick={ () => handleDelete() }>delete</button>
      </div>
      <div>{ author }</div>
      <button type='button' onClick={ () => handleUpvote() }>upvote</button>
      <button type='button' onClick={ () => handleDownvote() }>downvote</button>
      <div>{ up } { down } { weight }</div>
    </div>
  )
}

export default ALink;
