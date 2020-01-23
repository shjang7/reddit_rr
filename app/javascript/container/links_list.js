import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLinks } from '../actions';

const LinksList = ({ links, getLinks }) => {
  useEffect(() => {
    getLinks();
  }, [getLinks]);

  const linksRender = links.map((link) => {
    return <li key={link.id}>{link.title} {link.url}</li>;
  });

  return (
    <React.Fragment>
      Links List
      <ul>{ linksRender }</ul>
    </React.Fragment>
  );

}

export default connect(({ links }) => ({ links }), { getLinks })(LinksList);
