import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';

const ALink = ({ data, handleUpvote, handleDownvote, handleDelete, titleTo }) => {
  const { author, created_at, id, title, updated_at, url, user_id, votes} = data;

  const renderTitle = titleTo ? (
    <Link to={titleTo}>
      { title }
    </Link>
  ) : title;

  const handleDeleteLocal = () => {
    handleDelete(id);
  }

  const handleUpvoteLocal = () => {
    handleUpvote(id);
  }

  const handleDownvoteLocal = () => {
    handleDownvote(id);
  }

  return (
    <div>
      <div>
        { renderTitle }
        { timeSince(created_at) } { url }
        <button type='button' onClick={ () => handleDeleteLocal() }>delete</button>
      </div>
      <div>{ author }</div>
      <div>
        { id }
        <span>id</span>
        <button type='button' onClick={ () => handleUpvoteLocal() }>upvote</button>
        { votes.up }
        <button type='button' onClick={ () => handleDownvoteLocal() }>downvote</button>
        { votes.down }
        <span>total</span>
        { votes.weight }
      </div>
    </div>
  )
}


export default ALink;
