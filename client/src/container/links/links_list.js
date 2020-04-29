import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLinks, destroyLink, upvoteLink, downvoteLink } from '../../actions';
import { timeSince } from '../../common/functions';
import ALink from '../../components/links/a_link';

const LinksList = ({ links, getLinks, destroyLink, upvoteLink, downvoteLink, history }) => {
  // const [linkData, setLinkData] = useState([]);
  //
  // useEffect(() => {
  //   getLinks();
  // }, [getLinks, destroyLink]);
  //
  // useEffect(() => {
  //   setLinkData(links.links);
  // }, [links.links]);
  //
  // const handleUpvote = (id) => {
  //   upvoteLink(id);
  // }
  //
  // const handleDownvote = (id) => {
  //   downvoteLink(id);
  // }
  //
  // const sortByVotes = (data) => (data.sort((a, b) => {
  //   const { up: a_up, down: a_down } = a.votes;
  //   const { up: b_up, down: b_down } = b.votes;
  //   if (a_up - a_down - (b_up - b_down) === 0) {
  //     return a_up < b_up;
  //   }
  //   return a_up - a_down < b_up - b_down;
  // }));
  //
  // const linksRender = linkData ? sortByVotes(linkData).map((data) => (
  //   <ALink data={data} handleUpvote={handleUpvote} handleDownvote={handleDownvote} key={ data.id } titleRedirect />
  // )) : null;

  return <></>;
  // return <ul className="links">{ linksRender }</ul>;
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

export default connect(({ links }) => ({ links }), { getLinks, destroyLink, upvoteLink, downvoteLink })(LinksList);
