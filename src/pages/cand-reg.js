import React from 'react';

const CandReg = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner homebanner_in padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Create An Account </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <form action="/cand-reg" method="post" className="reg_log_div">
                    <h2 className="section_title  align_center section_title_sm">Register as a candidate</h2>
                    <div className="containerx">
                        <div className=" full_row">
                            <div className="half_row">
                                <label htmlFor="uname"><b>First name</b></label>
                                <input type="text" placeholder="First name" name="firstName" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Last name</b></label>
                                <input type="text" placeholder="Last name" name="lastName" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Email</b></label>
                                <input type="email" placeholder="Enter Email" name="Email" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Date of birth</b></label>
                                <input type="date" placeholder="Date of birth" name="DOB" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Phone</b></label>
                                <input type="text" placeholder="Phone" name="text" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Institution</b></label>
                                <input type="text" placeholder="Institution" name="text" required />
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="password_rex" required />
                            </div>
                            <div className="full_row">
                                <label htmlFor="uname"><b>Nationality</b></label>
                                <input type="text" placeholder="Nationality" name="nationality" required />
                            </div>
                            <div className="full_row">
                                <button type="submit" name="reg">Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="containerx">
                        <h4>Have an  account?  <a href="/login">Login</a></h4>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default CandReg;