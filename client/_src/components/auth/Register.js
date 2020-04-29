import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const { username, email, password, password2 } = formData;

  const onChange = ({ target: { name, value }}) =>
    setFormData({ ...formData, [name]: value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ username, email, password });
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <>
      <h1 className="signup h-title">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
    </>
  );
}

// <form className="form" onSubmit={ onSubmit }>
//   <input type="text" name="username" placeholder="username" value={ username } onChange={ onChange } className="form-control" required />
//   <input type="text" name="email" placeholder="email" value={ email } onChange={ onChange } className="form-control" required />
//   <input type="password" name="password" placeholder="password" value={ password } onChange={ onChange } className="form-control" required />
//   <input type="password" name="password2" placeholder="password confirmation" value={ password2 } onChange={ onChange } className="form-control" required />
//   <button type="submit" className="btn btn-primary form-control" value="Register" />
// </form>

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
