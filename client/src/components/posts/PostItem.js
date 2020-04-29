import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { id, title, url, created_at, updated_at, user_id: author, get_upvotes: likes, get_downvotes: dislikes },
}) => {
  // const  = post;
  return (
    <div className="post border border-success rounded p-3 my-3">
      <div>

      </div>
      <div className="text-white">
        <p className="my-1">{title}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{created_at}</Moment>
        </p>
        <>
          <button
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down" />
          </button>

          {}
        </>

      </div>
    </div>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(PostItem);
