import React, { useState, useEffect, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession, readSession } from '../actions';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = ({ session, destroySession, readSession }) => {
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
      { uname ? (
        <Nav.Link href="#" className="nav-item" disabled>login with: {uname.username}</Nav.Link>
      ) : null }
      <Nav.Link href="/links/new" className="nav-item">Write Link</Nav.Link>
      <Nav.Link href="#" className="nav-item" onClick={ () => handleLogout() }>Log Out</Nav.Link>
    </>
  );

  const guestLinks = () => (
    <>
      <Nav.Link href="/login" className="nav-item">Log In</Nav.Link>
      <Nav.Link href="/signup" className="nav-item">Sign Up</Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" expand="lg" className="fixed-top">
      <Navbar.Brand href="/">Reddit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { uname.username ? userLinks() : guestLinks() }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(({ session }) => ({ session }), { destroySession, readSession })(Navigation);
