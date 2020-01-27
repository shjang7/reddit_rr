import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkForm from '../../components/links/link_form';
import { createLinks } from '../../actions';

const NewLinks = ({ errors, history, createLinks }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmit = (link) => {
    createLinks(link);
    console.log('create error', errors);
    redirect();
  }

  return (
    <LinkForm headTitle='New Link' type='Create' handleSubmit={ handleSubmit } />
  )
}

export default connect(({ errors }) => ({ errors }), { createLinks })(NewLinks);
