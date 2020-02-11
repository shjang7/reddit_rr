import React, { useState, useEffect, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession, readSession } from '../actions';

const Navbar = ({ session, destroySession, readSession }) => {
  const [uname, setUname] = useState({username: undefined});
  useEffect(() => {
    readSession();
  }, []);

  useEffect(() => {
    setUname(session);
  }, [session]);

  const handleLogout = async () => {
    await destroySession(session);
  }

  const userLinks = () => (
    <div>
      { uname ? 'login with: ' + uname.username : null }
      <a type='button' className="btn btn-base btn-sm" onClick={ () => handleLogout() }>
        Log Out
      </a>
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
      { uname.username ? userLinks() : guestLinks() }
    </>
  );
};

export default connect(({ session }) => ({ session }), { destroySession, readSession })(Navbar);
