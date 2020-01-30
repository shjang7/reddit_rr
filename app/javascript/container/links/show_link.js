import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import Comments from '../comments/comments';
import { destroyLink, readLink, upvoteLink, downvoteLink } from '../../actions';
import { timeSince } from '../../common/functions';

const ShowLink = (props) => {
  const { history, location, match: { params: { id: linkId } }, errors, links, destroyLink, readLink, upvoteLink, downvoteLink } = props;
  const [link, setLink] = useState(null);
  useEffect(() => {
    readLink(linkId);
  }, []);

  useEffect(() => {
    setLink(links.link);
  }, [links.link]);

  const redirect = () => {
    history.push('/');
  }

  const handleDelete = async (link) => {
    await destroyLink(link)
    redirect();
  }

  const handleUpvote = () => {
    upvoteLink(linkId);
  }

  const handleDownvote = () => {
    downvoteLink(linkId);
  }

  const renderLink = link ? (
      <div>
        { link.title }
        { timeSince(link.created_at) }
        { link.url }
        <button type='button' onClick={ () => handleDelete(link) }>delete</button>
      </div>
    )
    : null;

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      <Link to='/'>main</Link>
      <div>{ errors }</div>
      <h1>Show Link</h1>
      <div>{ renderLink }</div>
      <button type='button' onClick={ () => handleUpvote() }>upvote</button>
      <button type='button' onClick={ () => handleDownvote() }>downvote</button>
      <div>{ links.vote.up_count }{ links.vote.down_count }</div>
      <Comments linkId={ linkId } />
    </React.Fragment>
  );
}

export default connect(({ errors, links }) => ({ errors, links }), { destroyLink, readLink, upvoteLink, downvoteLink })(ShowLink);
