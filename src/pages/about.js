import React from 'react';

const About = () => {
	return (
		<main>
        {/*homebanner*/}
        <div className="fluid homebanner  padder align_center website_bg">
          <div className="homebanner_inner">
            <h2 className="section_title text_white">About US </h2>
            <h3 className="text_white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
          </div>
        </div>
        <section id className="boxed_wrapper  section_padding ">
          <div className=" full_row">
            <div className="half_row">
              <div className="table_div">
                <div className="td_div">
                  <h2 className="section_title ">Who We Are</h2>
                  <hr style={{width: '50%'}} align="left" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <br />
                  <a href="/login" className="button_dark"> Sign Up <i className="fa-solid fa-arrow-right-long" /></a>
                </div>
              </div>
            </div>
            <div className="half_row">
              <img src="assets/img/student2.jpg" className alt="" />
            </div>
          </div>
        </section>
        {/*testimonial */}
        <section id className="boxed_wrapper   ">
          <div className=" full_row testimonial section_padding">
            <h2 className="section_title align_center">Testimonials</h2>
            <div className="a_third_row align_center ">
              <div className="card test_card p_10">
                <h1>
                  <img src="assets/img/avatar.png" alt="Avatar" />
                </h1>
                <h4><b>John Doe</b></h4>
                <p className="quote">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                </p>
                <p className="rating">
                  <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                </p>
                <p className="position">Architect &amp; Engineer</p>
              </div>
            </div>
            {/*2*/}
            <div className="a_third_row align_center ">
              <div className="card test_card p_10">
                <h1>
                  <img src="assets/img/avatar.png" alt="Avatar" />
                </h1>
                <h4><b>Jane Clarkson</b></h4>
                <p className="quote">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                </p>
                <p className="rating">
                  <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                </p>
                <p className="position">Marketing Officer</p>
              </div>
            </div>
            {/*3*/}
            <div className="a_third_row align_center ">
              <div className="card test_card p_10">
                <h1>
                  <img src="assets/img/avatar.png" alt="Avatar" />
                </h1>
                <h4><b>Wayne Phil</b></h4>
                <p className="quote">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                </p>
                <p className="rating">
                  <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                </p>
                <p className="position">Accountant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
	);
};

export default About;
