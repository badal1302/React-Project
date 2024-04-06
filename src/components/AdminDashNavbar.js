import React from "react";
import { NavLink } from 'react-router-dom';

const AdminDashNavbar = () => {
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
                <li><a href="/">Home</a></li>
                <li><a href="/">Logout</a></li>
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
              <li><NavLink to="/admin-jobs">Posted Jobs</NavLink></li>
              <li><NavLink to="/admin-match">Matching Candidates</NavLink></li>
              <li><NavLink to="/admin-users"><i className="fa-solid fa-angles-right" /> User Registrations</NavLink></li>
              <li><NavLink to="/admin-profiles"><i className="fa-solid fa-angles-right" /> User Profiles</NavLink></li>
              <li><NavLink to="/admin-log"><i className="fa-solid fa-angles-right" /> Activity Log</NavLink></li>
              <li><NavLink to="/">Logout</NavLink></li>
            </ul>
          </div>
          {/*END MENU */}
        </div>
	);
};

export default AdminDashNavbar;
