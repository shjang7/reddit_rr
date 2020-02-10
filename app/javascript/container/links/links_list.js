import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import { getLinks, destroyLink, upvoteLink, downvoteLink } from '../../actions';
import { timeSince } from '../../common/functions';
import ALink from '../../components/links/a_link';

const LinksList = ({ errors, links, getLinks, destroyLink, upvoteLink, downvoteLink, history }) => {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    getLinks();
  }, [getLinks, destroyLink]);

  useEffect(() => {
    setLinkData(links.links);
  }, [links.links]);

  const handleDelete = (id) => {
    destroyLink(id);
  }

  const handleUpvote = (id) => {
    upvoteLink(id);
  }

  const handleDownvote = (id) => {
    downvoteLink(id);
  }

  const linksRender = linkData ? linkData.map((data) => {
    const { id } = data;
    return (
      <li key={ id }>
        <ALink data={data} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleDelete={handleDelete} titleTo={ `/links/${id}` } />
      </li>
    );
  }) : null;

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      <div>{ errors }</div>
      <h1>Links List</h1>
      <ul>{ linksRender }</ul>
      <NewLinks history={ history } />
    </React.Fragment>
  );
}

export default connect(({ errors, links }) => ({ errors, links }), { getLinks, destroyLink, upvoteLink, downvoteLink })(LinksList);
