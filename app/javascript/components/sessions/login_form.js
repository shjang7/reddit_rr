import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [blank, setBlank] = useState(false);

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    if (username == null || password == null) {
      setBlank(true);
      return;
    }
    handleSubmit({
      username,
      password,
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

  const renderSampleAccount = (
    <div className="sample-account">
      Sample Account : <br />

      username: user-0 ~ user-9 <br />
      password: foobar <br />
    </div>
  )

  return (
    <div className="col-md-6 offset-md-3 login">
      <h1 className="h-title">Log In</h1>
      <form onSubmit={ handleSubmitLocal }>
        <input placeholder="username" type="text" name="username" value={ username } onChange={ handleChange } className="form-control" />
        <input placeholder="password" type="password" name="password" value={ password } onChange={ handleChange } className="form-control" />
        <button className="btn btn-primary form-control" type="submit">log in</button>
        <div>or <Link to='/signup'>sign up</Link></div>
        {renderSampleAccount}
      </form>
      <div>{ blank ? 'Fill in all data' : null }</div>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm;
