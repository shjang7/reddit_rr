import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import Form from '../components/form';

const Login = ({ updateUser, history }) => {
  const [errors, setErrors] = useState('');

  const redirect = () => {
    history.push('/');
  }

  const handleSubmitLocal = ({ username, password }) => {
    updateUser(username);
    redirect();
  };

  return <Form title="Log In" type="login" handleSubmit={ handleSubmitLocal } errors={ errors } />;
}

export default connect(null, { updateUser })(Login);
