import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/sessions/login_form';
import { createSession } from '../../actions';

const Login = ({ createSession, history }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = ({ username, password }) => {
    createSession({ username, password })
      .then(() => redirect());
  }

  return <LoginForm handleSubmit={ handleSubmitLocal } />;
}

Login.propTypes = {
  createSession: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default connect(null, { createSession })(Login);
