import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../../components/users/user_form';
import { createRegistration } from '../../actions';

const Signup = ({ history, createRegistration }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = (user) => {
    createRegistration(user);
    redirect();
  }

  return <SignupForm title="Sign Up" type="signup" handleSubmit={ handleSubmitLocal } />;
}

Signup.propTypes = {
  createRegistration: PropTypes.func.isRequired
}

export default connect(null, { createRegistration })(Signup);
