import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import { getLinks, destroyLink } from '../../actions';

const LinksList = ({ links, getLinks, destroyLink, history }) => {
  const [linkData, setLinkData] = useState(null);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  useEffect(() => {
    setLinkData(links);
  }, [links]);

  const handleDelete = (link) => {
    destroyLink(link);
  }

  const linksRender = linkData ? linkData.map((link) => {
    return <li key={link.id}>{link.title} {link.url} <button type='button' onClick={ () => handleDelete(link) }>delete</button></li>;
  }) : null;

  return (
    <React.Fragment>
      <Navbar history={ history }/>
      Links List
      <ul>{ linksRender }</ul>
      <NewLinks history={ history } />
    </React.Fragment>
  );
}

export default connect(({ links }) => ({ links }), { getLinks, destroyLink })(LinksList);
