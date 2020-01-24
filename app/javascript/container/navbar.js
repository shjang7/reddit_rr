import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginNavbar from '../components/login_navbar';
import LogoutNavbar from '../components/logout_navbar';
import { updateUser } from '../actions';

const Navbar = ({ user, updateUser, history }) => {
  const [uname, setUname] = useState(null);
  useEffect(() => {
    setUname(user.username);
  }, [user]);

  const handleLogoutLocal = () => {
    updateUser();
    redirect();
  }

  const redirect = () => {
    history.push('/');
  }

  return (
    <>
      { uname ? <LogoutNavbar uname={ uname } handleLogout={ handleLogoutLocal } /> : <LoginNavbar /> }
    </>
  );
};

export default connect(({ user }) => ({ user }), { updateUser })(Navbar);
