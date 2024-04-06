import React from 'react';

const RecPro = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Recruiter Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <form action="#" method="post" className="reg_log_div">
                    <h2 className="section_title  align_center section_title_sm">Recruiter Profile </h2>
                    <div className="full_row">
                        <div className="half_row">
                            <label htmlFor>Clients</label>
                            <select name="gender" id="gender">
                                <option value="Client X">Client X</option>
                                <option value="Client Y">Client S</option>
                                <option value="Client Y">Client Y</option>
                            </select>
                        </div>
                        <div className="half_row">
                            <label htmlFor>Jobs</label>
                            <select name="educationbackground" id="educationbackground">
                                <option value="Job X">Job X</option>
                                <option value="Job Y">Job Y</option>
                                <option value="Job N">Job N</option>
                            </select>
                        </div>
                        <div className="full_row">
                            <label htmlFor>Candidates location</label>
                            <input type="text" placeholder="Enter Location" name="candidateLocation" required />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>	Information about our recruiting agency</b></label>
                            <textarea id="about" name="about" rows={4} cols={10} defaultValue={""} />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>	Clients Information</b></label>
                            <textarea id="about" name="about" rows={4} cols={10} defaultValue={"  "} />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>Candidates Intrested In</b></label>
                            <textarea id="about" name="about" rows={4} cols={10} defaultValue={""} />
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

export default RecPro;