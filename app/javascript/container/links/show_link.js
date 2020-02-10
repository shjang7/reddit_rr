import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import Comments from '../comments/comments';
import { destroyLink, readLink, upvoteLink, downvoteLink } from '../../actions';
import ALink from '../../components/links/a_link';

const ShowLink = (props) => {
  const { history, location, match: { params: { id: linkId } }, errors, links, destroyLink, readLink, upvoteLink, downvoteLink } = props;
  useEffect(() => {
    readLink(linkId);
  }, []);

  const redirect = () => {
    history.push('/');
  }

  const handleDelete = async () => {
    await destroyLink(linkId)
    redirect();
  }

  const handleUpvote = () => {
    upvoteLink(linkId);
  }

  const handleDownvote = () => {
    downvoteLink(linkId);
  }

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      <Link to='/'>main</Link>
      <div>{ errors }</div>
      <h1>Show Link</h1>
      <ALink data={links.link} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleDelete={handleDelete} />
      <Comments linkId={ linkId } />
    </React.Fragment>
  );
}

export default connect(({ errors, links }) => ({ errors, links }), { destroyLink, readLink, upvoteLink, downvoteLink })(ShowLink);
