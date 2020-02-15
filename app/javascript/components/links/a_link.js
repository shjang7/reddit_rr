import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { timeSince } from '../../common/functions';
import { FaChevronUp, FaChevronDown } from 'react-icons/lib/fa';

const ALink = ({ data, handleUpvote, handleDownvote, titleRedirect }) => {
  const { id, url, title, created_at, updated_at, user_id, author, votes} = data;

  const renderTitle = titleRedirect ? (
    <Link to={`/links/${id}`}>
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
    <li className="link col-md-9 mx-auto">
      <h2 className="h-title">{ renderTitle }</h2>
      <div>Submitted about { timeSince(created_at) } by { author }</div>
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
    </li>
  )
}

ALink.defaultProps = { titleRedirect: false };

ALink.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    votes: PropTypes.object.isRequired,
  }),
  handleUpvote: PropTypes.func.isRequired,
  handleDownvote: PropTypes.func.isRequired,
  titleRedirect: PropTypes.bool,
};


export default ALink;
