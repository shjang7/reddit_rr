import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession } from '../actions';

const Navbar = ({ session, destroySession, history }) => {
  const [uname, setUname] = useState(null);
  useEffect(() => {
    setUname(session.username);
  }, [session]);

  const handleLogout = () => {
    destroySession(session);
    redirect();
  }

  const redirect = () => {
    history.push('/');
  }

  const userLinks = () => (
    <div>
      <Link to='/' onClick={ handleLogout }>Log Out</Link>
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

export default connect(({ session }) => ({ session }), { destroySession })(Navbar);
