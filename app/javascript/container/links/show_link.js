import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import Comments from '../comments/comments';
import { destroyLink, readLink } from '../../actions';
import { timeSince } from '../../common/functions';

const ShowLink = ({ history, location, match: { params: { id: linkId } }, errors, destroyLink, show, readLink }) => {
  const [link, setLink] = useState(null);
  useEffect(() => {
    readLink(linkId);
  }, []);

  useEffect(() => {
    setLink(show.link);
  }, [show]);

  const redirect = () => {
    history.push('/');
  }

  const handleDelete = async (link) => {
    await destroyLink(link)
      .then(redirect());
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
      <div>{ errors }</div>
      <h1>Show Link</h1>
      <div>{ renderLink }</div>
      <Comments linkId={ linkId } />
    </React.Fragment>
  );
}

export default connect(({ errors, show }) => ({ errors, show }), { destroyLink, readLink })(ShowLink);
