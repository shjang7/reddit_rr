import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkForm from '../../components/links/link_form';
import { createLinks } from '../../actions';

const NewLinks = ({ history, createLinks }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmit = async (link) => {
    await createLinks(link)
      .then(redirect());
  }

  return (
    <LinkForm headTitle='New Link' type='Create' handleSubmit={ handleSubmit } />
  )
}

export default connect(null, { createLinks })(NewLinks);
