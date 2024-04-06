import React from 'react';

const Contact = () => {
	return (
		<main>
        {/*homebanner*/}
        <div className="fluid homebanner homebanner_in padder align_center website_bg">
          <div className="homebanner_inner">
            <h2 className="section_title text_white">Contact Us </h2>
          </div>
        </div>
        <section className="full_row register_p containerx boxed_wrapper">
          <form action="#" method="post" className="reg_log_divx">
            <h2 className="section_title  align_center section_title_sm">Drop Us A Message</h2>
            <div className="containerx">
              <div className=" full_row">
                <div className="half_row">
                  <label htmlFor="uname"><b>Name</b></label>
                  <input type="text" placeholder="Name" name="names" required />
                </div>
                <div className="half_row">
                  <label htmlFor="uname"><b>Phone</b></label>
                  <input type="text" placeholder="Phone" name="phone" required />
                </div>
                <div className="half_row">
                  <label htmlFor="uname"><b>Email</b></label>
                  <input type="email" placeholder="Enter Email" name="Email" required />
                </div>
                <div className="half_row">
                  <label htmlFor="uname"><b>Subject</b></label>
                  <input type="text" placeholder="Subject" name="Subject" required />
                </div>
                <div className="full_row">
                  <label htmlFor="psw"><b>Your Message</b></label>
                  <textarea id="msg" name="msg" rows={4} cols={10} defaultValue={""} />
                </div>
                <div className="full_row">
                  <button type="submit" name="submitMsg">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
	);
};

export default Contact;