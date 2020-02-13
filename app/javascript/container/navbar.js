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
    <>
      { uname ? <li className="nav-item active"><span>login with: {uname.username} </span></li> : null }
      <li className="nav-item"><Link to='/links/new'>Write Link</Link></li>
      <li className="nav-item" onClick={ () => handleLogout() }>
        <span>Log Out</span>
      </li>
    </>
  );

  const guestLinks = () => (
    <>
      <li className="nav-item active"><Link to='/login'>Log In</Link></li>
      <li className="nav-item"><Link to='/signup'>Sign Up</Link></li>
    </>
  );

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-secondary" role="navigation">
      <a className="navbar-brand" href="/">Reddit</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
          { uname.username ? userLinks() : guestLinks() }
				</ul>
      </div>
    </header>
  );
};

export default connect(({ session }) => ({ session }), { destroySession, readSession })(Navbar);
