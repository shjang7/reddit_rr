import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import { getLinks } from '../actions';

const LinksList = ({ links, username, getLinks, loggedInStatus, handleLogout, history }) => {
  const [linkData, setLinkData] = useState(null);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  useEffect(() => {
    setLinkData(links.links);
  }, [links]);

  const linksRender = linkData ? linkData.map((link) => {
      return <li key={link.id}>{link.title} {link.url}</li>;
  }) : null;

  return (
    <React.Fragment>
      <Navbar loggedInStatus={ loggedInStatus } handleLogout={ handleLogout } />
      Links List
      <ul>{ linksRender }</ul>
    </React.Fragment>
  );

}

export default connect(({ links, username }) => ({ links, username }), { getLinks })(LinksList);
