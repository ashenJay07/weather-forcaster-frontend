import Cookies from 'js-cookie';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const naviagte = useNavigate();
  const handleClick = () => {
    Cookies.remove('auth');
    naviagte('/');
  };

  const authCookie = Cookies.get('auth');
  const login = authCookie
    ? 'nav-link white-font active d-none'
    : 'nav-link white-font active';
  const logout = authCookie ? 'btn btn-warning' : 'btn btn-warning d-none';

  return (
    <nav
      className="navbar navbar-expand theme-dark-purple px-5"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand white-font bold">
          Weather Forcaster
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample02"
          aria-controls="navbarsExample02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link white-font active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className={login}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className={login}>
                Signup
              </Link>
            </li>
          </ul>
          <button type="button" className={logout} onClick={handleClick}>
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
