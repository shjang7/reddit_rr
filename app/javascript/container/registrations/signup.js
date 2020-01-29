import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../../components/registrations/signup_form';
import { createRegistration } from '../../actions';

const Signup = ({ history, createRegistration }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = async (user) => {
    await createRegistration(user)
      .then(redirect());
  }

  return <SignupForm title="Sign Up" submitBtn="signup" handleSubmit={ handleSubmitLocal } />;
}

Signup.propTypes = {
  createRegistration: PropTypes.func.isRequired
}

export default connect(null, { createRegistration })(Signup);
