import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import Comments from '../comments/comments';
import { destroyLink } from '../../actions';
import { timeSince } from '../../common/functions';

const ShowLink = ({ destroyLink, links, history, location, match: { params: { id: linkId } } }) => {
  const [link, setLink] = useState(null);
  useEffect(() => {
    const item = links.find(({ id }) => id == linkId);
    if (item) setLink(item);
  }, [linkId]);

  const handleDelete = (link) => {
    destroyLink(link);
  }

  const renderLink = link ? (
      <div>
        <Link to={`/links/${link.id}`}>{ link.title }</Link>
        { timeSince(link.created_at) }
        { link.url }
        <button type='button' onClick={ () => handleDelete(link) }>delete</button>
      </div>
    )
    : null;

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      <h1>Show Link</h1>
      <div>{ renderLink }</div>
      <Comments linkId={ linkId } />
    </React.Fragment>
  );
}

export default connect(({ links }) => ({ links }), { destroyLink })(ShowLink);
