import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>    
   <li> <a href="https://vxp9395.uta.cloud/blog/" target="_blank">
        Blog
        </a>
</li>
        <li><NavLink to="/login">Login/Register</NavLink></li>
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
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
   <li> <a href="https://vxp9395.uta.cloud/blog/" target="_blank">
        Blog
        </a>
</li>
      <li><NavLink to="/login">Login/Register</NavLink></li>
      </ul>
  </div>
  {/* <!--END MENU --> */}
        </div>
	);
};

export default Navbar;
