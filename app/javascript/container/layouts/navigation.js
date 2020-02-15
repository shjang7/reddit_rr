import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { destroySession, readSession } from '../../actions';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = ({ session, destroySession, readSession }) => {
  const [uname, setUname] = useState('');
  useEffect(() => {
    readSession();
  }, []);

  useEffect(() => {
    setUname(session.username);
  }, [session]);

  const handleLogout = async () => {
    await destroySession(session);
  }

  const userLinks = () => (
    <>
      { uname ? (
        <Nav.Link href="#" disabled>login with: {uname}</Nav.Link>
      ) : null }
      <Nav.Link href="/links/new">Write Link</Nav.Link>
      <Nav.Link href="#" onClick={ () => handleLogout() }>Log Out</Nav.Link>
    </>
  );

  const guestLinks = () => (
    <>
      <Nav.Link href="/login">Log In</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
    </>
  );

  return (
    <Navbar bg="dark" expand="lg" className="fixed-top navbar-dark">
      <Navbar.Brand href="/">Reddit</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { uname ? userLinks() : guestLinks() }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {
  session: PropTypes.shape({
    username: PropTypes.string,
  }),
  destroySession: PropTypes.func.isRequired,
  readSession: PropTypes.func.isRequired,
}

export default connect(({ session }) => ({ session }), { destroySession, readSession })(Navigation);
