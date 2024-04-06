import React from 'react';

const Forgot = () => {
	return (
		<main>
        {/*homebanner*/}
        <div className="fluid homebanner padder align_center website_bg">
          <div className="homebanner_inner">
            <h2 className="section_title text_white">Forgot Password </h2>
          </div>
        </div>
        <section className="full_row register_p containerx boxed_wrapper">
          <form action="/forgot" method="post" className="reg_log_div">
            <h2 className="section_title  align_center section_title_sm">Enter Your Email To Initiate A Password Reset</h2>
            <div className="containerx">
              <label htmlFor="uname"><b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="uname" required />
            </div>
            <div className="full_row">
              <button type="submit" name="resetPass">Reset Email </button>
            </div>
          </form>
        </section>
      </main>
	);
};

export default Forgot;
