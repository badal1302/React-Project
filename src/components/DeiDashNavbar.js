import React from "react";
import { NavLink } from 'react-router-dom';

const DeiDashNavbar = () => {
	return (
        <div>
          {/*MENU */}
          <nav id="navbar" className>
            <div className="nav-wrapper">
              {/* Navbar Logo */}
              <div className="logo">
                <a href="/">URM Application
                </a>
              </div>
              {/* Navbar Links */}
              <ul id="menu">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/dei-jobs">Matching Jobs</NavLink></li>
                  <li><NavLink to="/dei-profile">Matching Jobs</NavLink></li>
                  <li><NavLink to="/">Logout</NavLink></li>
              </ul>
            </div>
          </nav>
          {/* Menu Icon */}
          <div className="menuIcon">
            <span className="icon icon-bars" />
            <span className="icon icon-bars overlay" />
          </div>
          <div className="overlay-menu">
            <ul id="menu">
              <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dei-jobs">Matching Jobs</NavLink></li>
                <li><NavLink to="/dei-profile">Matching Jobs</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
          </div>
          {/*END MENU */}
        </div>
	);
};

export default DeiDashNavbar;
