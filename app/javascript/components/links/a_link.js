import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';
import { FaChevronUp, FaChevronDown } from 'react-icons/lib/fa';

const ALink = ({ data, handleUpvote, handleDownvote, titleTo }) => {
  const { author, created_at, id, title, updated_at, url, user_id, votes} = data;

  const renderTitle = titleTo ? (
    <Link to={titleTo}>
      { title }
    </Link>
  ) : title;

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
      </div>
      <div>
        Submitted about { timeSince(created_at) } by { author }
      </div>
      <div className='buttons'>
        <a type='button' className="btn btn-primary btn-sm" rel="nofollow" href={ url }>
          <span>Visit Link</span>
        </a>
        <a type='button' className="btn btn-primary btn-sm vote" onClick={ () => handleUpvoteLocal() }>
          <FaChevronUp />
          <span>upvote</span>
          { votes.up }
        </a>
        <a type='button' className="btn btn-primary btn-sm vote" onClick={ () => handleDownvoteLocal() }>
          <FaChevronDown />
          <span>downvote</span>
          { votes.down }
        </a>
      </div>
    </div>
  )
}


export default ALink;
