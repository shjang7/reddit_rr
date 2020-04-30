import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const onChange = ({ target: { name, value } }) =>
    setFormData({ ...formData, [name]: value })

  const onSubmit = async e => {
    e.preventDefault()
    await login({ username, password })
  }

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1 className="signin h-title">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="username"
            minLength="4"
            maxLength="50"
            value={username}
            onChange={onChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength="4"
            value={password}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary form-control">
          Login
        </button>
      </form>
      <p className="my-4">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      <div className="white-space-pre sample-account">
        {`
      Sample Account(ID / PW) :
      user-0 / foobar
      or
      user-1 / foobar
        `}
      </div>
    </>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(
  mapStateToProps,
  { login },
)(Login)
