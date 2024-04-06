import React from 'react';

const AcademiCandiV = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Academia Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx">
                <div className="full_row full_row_sys">
                    <div className="a_quarter_row col_pad searchCol">
                        <p>Search</p>
                        <form action="#" method="post" className="search_col">
                            <div className="full_row">
                                <div className="full_row">
                                    <input type="text" placeholder="Candidate Name" name="cname" required />
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Field Of Study" name="fieldOfStudy" required />
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Institution" name="Institution" required />
                                </div>
                                <div className="full_row">
                                    <button type="submit" name="reg">Search</button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <p>Filter</p>
                        <form action="#" method="post" className="search_col">
                            <div className="full_row">
                                <div className="full_row">
                                    <select name="gender" id="gender">
                                        <option value>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="full_row">
                                    <select name="educationbackground" id="educationbackground">
                                        <option value>Education Background</option>
                                        <option value="High School">High School</option>
                                        <option value="College">College</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Research Experience" name="researchExperience" required />
                                </div>
                                <div className="full_row">
                                    <button type="submit" name="reg">Filter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="a_3quarter_row">
                        <h2 className="section_title  align_center section_title_sm"> Profile For Candiate X </h2>
                        <div className="not_my_profile full_row">
                            <div className="half_row">
                                <label htmlFor="uname"><b>First name</b></label>
                                <span>John</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Last name</b></label>
                                <span>Doe</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Email</b></label>
                                <span>Doe@gmail.com</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Date of birth</b></label>
                                <span>1996-09-23</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Phone</b></label>
                                <span>1996-09</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Institution</b></label>
                                <span>Institution x</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="psw"><b>Gender</b></label>
                                <span>Male</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Education Background</b></label>
                                <span>College</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>Field of study</b></label>
                                <span>Bsc Computer Science</span>
                            </div>
                            <div className="half_row">
                                <label htmlFor="uname"><b>CV</b></label>
                                <span><a href="/"> Downnload CV <i className="fa-solid fa-download" /></a></span>
                            </div>
                            <div className="full_row">
                                <label htmlFor="uname"><b>Cover Letter</b></label>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                            <div className="full_row">
                                <label htmlFor="uname"><b>Research Experience</b></label>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                            </div>
                            <div className="full_row">
                                <a href="/academi-candi-v" className="action_link"> Bookmark Candidate <i className="fa-regular fa-bookmark" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AcademiCandiV;