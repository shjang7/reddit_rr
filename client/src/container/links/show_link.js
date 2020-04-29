import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewLinks from './new_links';
import Comments from '../comments/comments';
import { destroyLink, readLink, upvoteLink, downvoteLink } from '../../actions';
import ALink from '../../components/links/a_link';

const ShowLink = (props) => {
  const { match: { params: { id: linkId }}, links, session: { username },
  destroyLink, readLink, upvoteLink, downvoteLink, history, location } = props;
  const [link, setLink] = useState(null);

  useEffect(() => {
    readLink(linkId);
  }, []);

  useEffect(() => {
    setLink(links.link);
  }, [links.link]);

  const redirect = () => {
    history.push('/');
  }

  const handleDelete = async () => {
    await destroyLink(linkId)
    redirect();
  }

  const handleUpvote = () => {
    upvoteLink(linkId);
  }

  const handleDownvote = () => {
    downvoteLink(linkId);
  }

  const renderLink = (link && link.constructor === Object && Object.entries(link).length !== 0) ? (
    <ALink data={link} handleUpvote={handleUpvote} handleDownvote={handleDownvote} />
  ) : null;

  const renderEdit = (
    <Link to={`/links/edit/${linkId}`} className="btn btn-base btn-sm">edit</Link>
  )

  const renderDelete = (
    <button type='button' className="btn btn-base btn-sm" onClick={ () => handleDelete() }>
      delete
    </button>
  );

  const renderButtons = (link && link.constructor === Object && Object.entries(link).length !== 0 && username === link.author) ? (
    <div className='buttons'>
      { renderEdit }
      { renderDelete }
    </div>
  ) : null;

  return (
    <React.Fragment>
      { renderLink }
      <div className="col-md-9 mx-auto">
        { renderButtons }
        <Comments linkId={ linkId } />
      </div>
    </React.Fragment>
  );
}

ShowLink.defaultProps = { session: { username: '' }, history: '/'};

ShowLink.propTypes = {
  links: PropTypes.shape({
    links: PropTypes.array.isRequired,
    link: PropTypes.object.isRequired,
  }),
  destroyLink: PropTypes.func.isRequired,
  readLink: PropTypes.func.isRequired,
  upvoteLink: PropTypes.func.isRequired,
  downvoteLink: PropTypes.func.isRequired,
  session: PropTypes.shape({
    username: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.object
}

export default connect(({ links, session }) => ({ links, session }), { destroyLink, readLink, upvoteLink, downvoteLink })(ShowLink);
