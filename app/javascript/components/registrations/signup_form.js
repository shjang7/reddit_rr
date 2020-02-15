import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({ headTitle, submitBtn, handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [blank, setBlank] = useState(false);

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    if (username == null || email == null || password == null || passwordConfirmation == null) {
      setBlank(true);
      return;
    }
    handleSubmit({
      username,
      email,
      password,
      password_confirmation: passwordConfirmation
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == 'username') setUsername(value);
    else if (name == 'email') setEmail(value);
    else if (name == 'password') setPassword(value);
    else if (name == 'password_confirmation') setPasswordConfirmation(value);
    if (username && email && password && passwordConfirmation) {
      setBlank(false);
    }
  }
  return (
    <div className="col-md-6 offset-md-3 signup">
      <h1 className="h-title">{ headTitle }</h1>
      <form onSubmit={ handleSubmitLocal }>
        <input placeholder="username" type="text" name="username" value={ username } onChange={ handleChange } className="form-control" />
        <input placeholder="email" type="text" name="email" value={ email } onChange={ handleChange } className="form-control" />
        <input placeholder="password" type="password" name="password" value={ password } onChange={ handleChange } className="form-control" />
        <input placeholder="password confirmation" type="password" name="password_confirmation" value={ passwordConfirmation } onChange={ handleChange } className="form-control" />
        <button className="btn btn-primary form-control" type="submit">{ submitBtn }</button>
      </form>
      <div>{ blank ? 'Fill in all data' : null }</div>
    </div>
  );
}

SignupForm.propTypes = {
  headTitle: PropTypes.string.isRequired,
  submitBtn: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default SignupForm;
