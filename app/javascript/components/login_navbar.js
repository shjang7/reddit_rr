import React from "react"
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
  return (
    <div>
      <Link to='/login'>Log In</Link>
      <br />
      <Link to='/signup'>Sign Up</Link>
      <br />
      <hr />
    </div>
  );
};

export default LoginNavbar;
