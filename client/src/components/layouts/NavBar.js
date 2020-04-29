import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className="navbar">
      <h1>Reddit RR</h1>
      <ul>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
