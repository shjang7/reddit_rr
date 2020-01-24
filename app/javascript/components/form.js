import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, type, handleSubmit, errors }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmitLocal = (event) => {
    event.preventDefault();
    let user = {
      username,
      email,
      password,
      passwordConfirmation
    };

    handleSubmit(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == 'username') setUsername(value);
    else if (name == 'email') setEmail(value);
    else if (name == 'password') setPassword(value);
    else if (name == 'password_confirmation') setPasswordConfirmation(value);
  }

  const handleErrors = errors ? (
        <ul>
          { errors.map((error) => {
            return <li key={ error }>{ error }</li>
          })}
        </ul>
      ) : null;

  const renderEmail = type == 'signup' ? <input placeholder="email" type="text" name="email" value={ email } onChange={ handleChange } /> : null;
  const renderConfirm = type == 'signup' ? <input placeholder="password confirmation" type="password" name="password_confirmation" value={ passwordConfirmation } onChange={ handleChange } /> : null;
  const renderSignupBtn = type == 'login' ? <div>or <Link to='/signup'>sign up</Link></div> : null;

  return (
    <div>
      <h1>{ title }</h1>
      <form onSubmit={ handleSubmitLocal }>
        <input placeholder="username" type="text" name="username" value={ username } onChange={ handleChange } />
        { renderEmail }
        <input placeholder="password" type="password" name="password" value={ password } onChange={ handleChange } />
        { renderConfirm }
        <button placeholder="submit" type="submit">{ type == 'signup'  ? 'Sign Up' : 'Log In' }</button>
        { renderSignupBtn }
      </form>
      { handleErrors }
    </div>
  );
}

export default Form;
