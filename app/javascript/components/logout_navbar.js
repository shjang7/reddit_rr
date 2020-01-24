import React from "react"
import { Link } from 'react-router-dom';

const LogoutNavbar = ({ uname, handleLogout }) => {
  return (
    <div>
      <Link to='/' onClick={ handleLogout }>Log Out</Link>
      <br />
      { 'login with: ' + uname }
      <br />
      <hr />
    </div>
  );
};

export default LogoutNavbar;
