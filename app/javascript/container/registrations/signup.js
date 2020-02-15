import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../../components/registrations/signup_form';
import { createRegistration } from '../../actions';

const Signup = ({ createRegistration, history }) => {
  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = async (user) => {
    await createRegistration(user)
      .then(() => redirect());
  }

  return <SignupForm headTitle="Sign Up" submitBtn="signup" handleSubmit={ handleSubmitLocal } />;
}

Signup.defaultProps = { history: '/'};

Signup.propTypes = {
  createRegistration: PropTypes.func.isRequired,
  history: PropTypes.object
}

export default connect(null, { createRegistration })(Signup);
