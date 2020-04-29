import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Login = props => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('Success!');
  };
  return <div>MyComponent</div>;
};

Login.propTypes = {};

export default Login;
