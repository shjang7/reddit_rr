import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../../components/sessions/login_form';
import { createSession } from '../../actions';

const Login = ({ history, createSession }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = ({ username, password }) => {
    createSession({ username, password });
    redirect();
  }

  return <LoginForm title="Log In" type="login" handleSubmit={ handleSubmitLocal } />;
}

Login.propTypes = {
  createSession: PropTypes.func.isRequired
}


export default connect(null, { createSession })(Login);
