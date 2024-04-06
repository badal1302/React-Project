import React from 'react';
// import logo from './logo.svg';

const Home = () => {
	return (
		<main>
    {/* <!--homebanner--> */}
    <div class="fluid homebanner padder align_center website_bg">
      <div class="homebanner_inner">
        <h5>This is a URM Application </h5>
    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </h3>
    <a href="/login" class="button_dark"> Get Started <i class="fa-solid fa-arrow-right-long"></i></a>
     </div>
        </div>
     {/* <!--end homebanner-->

    <!--layer2--> */}
    <div id="" class="boxed_wrapper  section_padding align_center">

      <h2 class="section_title">Welcome to URM Application</h2>
      <p >
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>

   </div>
   {/* <!--end layer 2-->
   <!--layer3--> */}

   {/* <!--end layer 3--> */}
   <section id="" class="boxed_wrapper  section_padding ">
     <div class=" full_row">
               <div class="half_row">
                 <div class="table_div">
                   <div class="td_div">
                     <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
                     <br />
                     <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    <br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                       </p>
                       <br />
                           <a href="/login" class="button_dark"> Get Started <i class="fa-solid fa-arrow-right-long"></i></a>

                   </div>
                 </div>



                 </div>
                 <div class="half_row">
             <img src="assets/img/student.jpg" class="" alt="" />
                   </div>

             </div>
  </section>
  {/* <!--testimonial --> */}
  <section id="" class="boxed_wrapper   ">
    <div class=" full_row testimonial section_padding  bg_dark">
    <h2 class="section_title align_center">Testimonials</h2>
              <div class="a_third_row align_center ">
                <div class="card test_card p_10">
                  <h1>
                      <img src="assets/img/avatar.png" alt="Avatar" />
                  </h1>
    <h4><b>John Doe</b></h4>
    <p class="quote">
"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    </p>
    <p class="rating">
<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>

    </p>
    <p class="position">Architect & Engineer</p>

</div>
                </div>
                {/* <!--2--> */}
                <div class="a_third_row align_center ">
                  <div class="card test_card p_10">
                    <h1>
                        <img src="assets/img/avatar.png" alt="Avatar" />
                    </h1>
      <h4><b>Jane Clarkson</b></h4>
      <p class="quote">
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      </p>
      <p class="rating">
  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>

      </p>
      <p class="position">Marketing Officer</p>

  </div>
                  </div>
                  {/* <!--3--> */}
                  <div class="a_third_row align_center ">
                    <div class="card test_card p_10">
                      <h1>
                          <img src="assets/img/avatar.png" alt="Avatar" />
                      </h1>
        <h4><b>Wayne Phil</b></h4>
        <p class="quote">
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        </p>
        <p class="rating">
    <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>

        </p>
        <p class="position">Accountant</p>

    </div>
                    </div>
                    </div>
                  </section>


  {/* <!--end testimonial -->
  <!--cta section--> */}
  <div class="full_row align_center section_padding bg_red">
      <div class="half_row">
    <a href="/login"  class="button_purple ">Create an account <i class="fa-solid fa-user-check"></i></a>

        </div>
        <div class="half_row">
      <a href="/login"  class="button_dark">Sign In <i class="fa-solid fa-lock"></i></a>

          </div>

      </div>
  {/* <!--end CTA section--> */}





  </main>
	);
};

export default Home;
