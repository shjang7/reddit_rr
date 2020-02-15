import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkForm from '../../components/links/link_form';
import { createLinks } from '../../actions';

const NewLinks = ({ createLinks, history }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmit = async (link) => {
    await createLinks(link)
    redirect();
  }

  return (
    <LinkForm headTitle='New Link' submitBtn='Create' handleSubmit={ handleSubmit } />
  )
}

NewLinks.propTypes = {
  createLinks: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default connect(null, { createLinks })(NewLinks);
