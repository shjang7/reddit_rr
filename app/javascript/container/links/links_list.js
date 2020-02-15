import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLinks, destroyLink, upvoteLink, downvoteLink } from '../../actions';
import { timeSince } from '../../common/functions';
import ALink from '../../components/links/a_link';

const LinksList = ({ links, getLinks, upvoteLink, downvoteLink, history }) => {
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    getLinks();
  }, [getLinks, destroyLink]);

  useEffect(() => {
    setLinkData(links.links);
  }, [links.links]);

  const handleUpvote = (id) => {
    upvoteLink(id);
  }

  const handleDownvote = (id) => {
    downvoteLink(id);
  }

  const linksRender = linkData ? linkData.map((data) => (
    <ALink data={data} handleUpvote={handleUpvote} handleDownvote={handleDownvote} key={ data.id } titleRedirect />
  )) : null;

  return <ul className="links">{ linksRender }</ul>;
}

LinksList.defaultProps = { history: '/'};

LinksList.propTypes = {
  links: PropTypes.shape({
    links: PropTypes.array.isRequired,
    link: PropTypes.object.isRequired,
  }),
  getLinks: PropTypes.func.isRequired,
  upvoteLink: PropTypes.func.isRequired,
  downvoteLink: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default connect(({ links }) => ({ links }), { getLinks, upvoteLink, downvoteLink })(LinksList);
