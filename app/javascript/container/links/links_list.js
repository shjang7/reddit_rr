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

  const linksRender = linkData ? linkData.map((data) => {
    const { id } = data;
    return (
      <li key={ id } className="link">
        <ALink data={data} handleUpvote={handleUpvote} handleDownvote={handleDownvote} titleRedirect={ `/links/${id}` } />
      </li>
    );
  }) : null;

  return (
    <div className="links">
      <h1>Links List</h1>
      <ul>{ linksRender }</ul>
    </div>
  );
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
