import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import { getLinks, destroyLink } from '../../actions';
import { timeSince } from '../../common/functions';

const LinksList = ({ errors, links, getLinks, destroyLink, history }) => {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    getLinks();
  }, [getLinks, destroyLink]);

  useEffect(() => {
    if(links) setLinkData(links);
  }, [links]);

  const handleDelete = (link) => {
    destroyLink(link);
  }

  const linksRender = linkData ? linkData.map((link) => {
    return (
      <li key={ link.id }>
        <Link to={ `/links/${link.id}` }>
          { link.title }
        </Link>
        { timeSince(link.created_at) }
        <button type='button' onClick={ () => handleDelete(link) }>
          delete
        </button>
      </li>
    );
  }) : null;

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      <div>{ errors }</div>
      Links List
      <ul>{ linksRender }</ul>
      <NewLinks history={ history } />
    </React.Fragment>
  );
}

export default connect(({ errors, links }) => ({ errors, links }), { getLinks, destroyLink })(LinksList);
