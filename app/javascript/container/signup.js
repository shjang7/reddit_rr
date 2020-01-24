import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import Form from '../components/form';

const Signup = ({ updateUser, history }) => {
  const [errors, setErrors] = useState('');

  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = ({ username, email, password }) => {
    updateUser(username);
    redirect();
  };

  return <Form title="Sign Up" type="signup" handleSubmit={ handleSubmitLocal } errors={ errors } />;
}

export default connect(null, { updateUser })(Signup);
