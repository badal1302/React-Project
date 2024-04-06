import React from "react";
import { NavLink } from 'react-router-dom';

const AcademicDashNavbar = () => {
	return (
		<div>
            {/* <!--MENU --> */}
  <nav id="navbar" class="">
    <div class="nav-wrapper">
      {/* <!-- Navbar Logo --> */}
      <div class="logo">
        <a href="/">URM Application </a>
      </div>

      {/* <!-- Navbar Links --> */}
      <ul id="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/academia-positions">Job Postings</NavLink></li>
        <li><NavLink to="/academic-candi-int">Hired/Bookmarked Candidates</NavLink></li>
        <li><NavLink to="/academia-profile">Profile</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
      </ul>
    </div>
  </nav>


  {/* <!-- Menu Icon --> */}
  <div class="menuIcon">
    <span class="icon icon-bars"></span>
    <span class="icon icon-bars overlay"></span>
  </div>


  <div class="overlay-menu">
    <ul id="menu">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/academia-positions">Job Postings</NavLink></li>
      <li><NavLink to="/academic-candi-int">Hired/Bookmarked Candidates</NavLink></li>
      <li><NavLink to="/academia-profile">Profile</NavLink></li>
      <li><NavLink to="/">Logout</NavLink></li>
      </ul>
  </div>
  {/* <!--END MENU --> */}
        </div>
	);
};

export default AcademicDashNavbar;
