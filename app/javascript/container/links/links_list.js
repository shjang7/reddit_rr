import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar';
import NewLinks from './new_links';
import { getLinks } from '../../actions';

const LinksList = ({ links, getLinks, history }) => {
  const [linkData, setLinkData] = useState(null);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  useEffect(() => {
    setLinkData(links);
  }, [links]);

  const linksRender = linkData ? linkData.map((link) => {
    return <li key={link.id}>{link.title} {link.url}</li>;
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

export default connect(({ links }) => ({ links }), { getLinks })(LinksList);
