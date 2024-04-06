import React from "react";
import { NavLink } from 'react-router-dom';

const RecAppDashNavbar = () => {
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
                  <li><NavLink to="/rec-avail-pos">Job Postings</NavLink></li>
                  <li><NavLink to="/rec-app-pos">Applied Positions</NavLink></li>
                  <li><NavLink to="/rec-match">Matches</NavLink></li>
                  <li><NavLink to="/rec-pro">Profile</NavLink></li>
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
                <li><NavLink to="/rec-avail-pos">Job Postings</NavLink></li>
                <li><NavLink to="/rec-app-pos">Applied Positions</NavLink></li>
                <li><NavLink to="/rec-match">Matches</NavLink></li>
                <li><NavLink to="/rec-pro">Profile</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
          </div>
          {/*END MENU */}
        </div>
	);
};

export default RecAppDashNavbar;
