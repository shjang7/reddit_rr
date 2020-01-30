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
  const [upvote, setUpvote] = useState(null);
  const [downvote, setDownvote] = useState(null);
  const [voteweight, setVoteWeight] = useState(null);
  useEffect(() => {
    readLink(linkId);
  }, []);

  useEffect(() => {
    setLink(links.link);
    setUpvote(links.link.votes.up);
    setDownvote(links.link.votes.down);
    setVoteWeight(links.link.votes.weight);
  }, [links.link]);

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

  const renderLink = link ? (
      <div>
        { link.link.title }
        { timeSince(link.link.created_at) }
        { link.url }
        <button type='button' onClick={ () => handleDelete() }>delete</button>
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
      <div>{ links.link.author }</div>
      <button type='button' onClick={ () => handleUpvote() }>upvote</button>
      <button type='button' onClick={ () => handleDownvote() }>downvote</button>
      <div>{ upvote } { downvote } { voteweight }</div>
      <Comments linkId={ linkId } />
    </React.Fragment>
  );
}

export default connect(({ errors, links }) => ({ errors, links }), { destroyLink, readLink, upvoteLink, downvoteLink })(ShowLink);
