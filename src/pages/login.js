import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
	return (
		<main>
        {/*homebanner*/}
        <div className="fluid homebanner padder align_center website_bg">
          <div className="homebanner_inner">
            <h2 className="section_title text_white">Login</h2>
          </div>
        </div>
        <section className="full_row register_p containerx boxed_wrapper">
          <form action="/login" method="post" className="reg_log_div">
            <h2 className="section_title  align_center section_title_sm">Sign In To Access Your Dashboard</h2>
            <div className="containerx">
              <label htmlFor="uname"><b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="uname" required />
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="password_rex" required />
            </div>
            <div className="full_row">
              <div className="half_row">
                <button type="submit" name="auth_login">Login</button>
              </div>
              <div className="half_row">
                <a href="/forgot" className="rest_pass">Forgot Password <i className="fa-solid fa-circle-question" /></a>
              </div>
            </div>
            <div className="containerx">
              <h4>Not Registered?  Create Account As:</h4>
              <p className="reg_ass">
                <NavLink to="/academi-reg">ACADEMIA</NavLink>
                <NavLink to="/cand-reg">CANDIDATE</NavLink>
                <NavLink to="/recr-reg">RECRUITER</NavLink>
                <NavLink to="/dei-reg">DEI OFFICER</NavLink>
              </p>
            </div>
          </form>
        </section>
      </main>
	);
};

export default SignUp;
