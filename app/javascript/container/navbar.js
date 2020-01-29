import React, { useState, useEffect, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession, readSession } from '../actions';

const Navbar = ({ session, show, destroySession, readSession, history }) => {
  const [uname, setUname] = useState(null);
  useEffect(() => {
    readSession();
  }, []);

  useEffect(() => {
    setUname(session.username);
  }, [session]);

  const handleLogout = async () => {
    await destroySession(session)
      .then(redirect());
  }

  const redirect = () => {
    history.push('/');
  }

  const userLinks = () => (
    <div>
      <a href="/" onClick={ () => handleLogout() }>Log Out</a>
      <br />
      { 'login with: ' + uname }
      <br />
      <hr />
    </div>
  );

  const guestLinks = () => (
    <div>
      <Link to='/login'>Log In</Link>
      <br />
      <Link to='/signup'>Sign Up</Link>
      <br />
      <hr />
    </div>
  );

  return (
    <>
      { uname ? userLinks() : guestLinks() }
    </>
  );
};

export default connect(({ session, show }) => ({ session, show }), { destroySession, readSession })(Navbar);
