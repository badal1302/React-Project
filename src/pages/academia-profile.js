import React from 'react';

const AcademiaProfile = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Academia Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
            </section>
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
                        <h2 className="section_title  align_center section_title_sm">Academia Profile </h2>
                        <form action="#" method="post" className="reg_log_divs ">
                            <div className="full_row">
                                <div className="half_row">
                                    <label htmlFor>Available positions</label>
                                    <input type="text" placeholder="Available positions" name="availablePositions" required />
                                </div>
                                <div className="half_row">
                                    <label htmlFor>Type Of Candidate  Looking For</label>
                                    <select name="typeOfCandidateLookingFor" id="typeOfCandidateLookingFor">
                                        <option value="Preference one"> Preference one</option>
                                        <option value="Preference two"> Preference two</option>
                                        <option value="Preference three"> Preference three</option>
                                    </select>
                                </div>
                                <div className="half_row">
                                    <label htmlFor>Faculty</label>
                                    <input type="text" placeholder="Faculty" name="Faculty" required />
                                </div>
                                <div className="half_row">
                                    <label htmlFor>Research focus area</label>
                                    <input type="text" placeholder="Research focus area" name="focus" required />
                                </div>
                                <div className="half_row">
                                    <label htmlFor="uname"><b>Email</b></label>
                                    <input type="email" placeholder="Enter Email" name="Email" required />
                                </div>
                                <div className="half_row">
                                    <label htmlFor="uname"><b>Address</b></label>
                                    <input type="text" placeholder="Address" name="Address" required />
                                </div>
                                <div className="full_row">
                                    <label htmlFor="psw"><b>About</b></label>
                                    <textarea id="about" name="about" rows={4} cols={10} defaultValue={"        "} />
                                </div>
                                <div className="full_row">
                                    <label htmlFor="psw"><b>Candidates Intrested In</b></label>
                                    <textarea id="about" name="about" rows={4} cols={10} defaultValue={"        "} />
                                </div>
                                <div className="full_row">
                                    <button type="submit" name="reg">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AcademiaProfile;