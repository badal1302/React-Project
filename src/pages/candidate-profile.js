import React from 'react';

const CandidateProfile = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Candidate Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <form action="#" method="post" className="reg_log_div">
                    <h2 className="section_title  align_center section_title_sm">Candidate Profile</h2>
                    <div className="full_row">
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
                            <label htmlFor="uname"><b>Nationality</b></label>
                            <input type="text" placeholder="Nationality" name="nationality" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor>Gender</label>
                            <select name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="half_row">
                            <label htmlFor>Education Background</label>
                            <select name="educationbackground" id="educationbackground">
                                <option value="High School">High School</option>
                                <option value="College">College</option>
                                <option value="Post Graduate">Post Graduate</option>
                            </select>
                        </div>
                        <div className="half_row">
                            <label htmlFor>Location Intrested To Work </label>
                            <input type="text" placeholder="Location Intrested To Work " name="locIntWork" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor>Field of study</label>
                            <input type="text" placeholder="Enter Email" name="fieldOfStudy" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor="myfile">CV</label>
                            <input type="file" id="CV" name="CV" />
                        </div>
                        <div className="half_row">
                            <label htmlFor="myfile">Cover Letter</label>
                            <input type="file" id="coverLetter" name="coverLetter" />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>Research Experience</b></label>
                            <textarea id="researchExperience" name="researchExperience" rows={4} cols={10} defaultValue={""} />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>Positions Intrested In</b></label>
                            <textarea id="posIntrestedIn" name="posIntrestedIn" rows={4} cols={10} defaultValue={"  "} />
                        </div>
                        <div className="full_row">
                            <button type="submit" name="reg">Update Profile</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default CandidateProfile;