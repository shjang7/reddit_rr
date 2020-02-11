import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';
import { FaChevronUp, FaChevronDown } from 'react-icons/lib/fa';

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

        <button type='button' onClick={ () => handleDeleteLocal() }>
          delete
        </button>
      </div>
      <div>
        Submitted about { timeSince(created_at) } by { author }
      </div>
      <div className='buttons'>
        <a type='button' className="btn btn-base btn-sm" rel="nofollow" href={ url }>
          <span>Visit Link</span>
        </a>
        <a type='button' className="btn btn-base btn-sm vote" rel="nofollow" onClick={ () => handleUpvoteLocal() }>
          <FaChevronUp />
          <span>upvote</span>
          { votes.up }
        </a>
        <a type='button' className="btn btn-base btn-sm vote" rel="nofollow" onClick={ () => handleDownvoteLocal() }>
          <FaChevronDown />
          <span>downvote</span>
          { votes.down }
        </a>
        <span className="btn btn-base btn-sm vote">
          <span>total</span>
          { votes.weight }
        </span>
      </div>
    </div>
  )
}


export default ALink;
