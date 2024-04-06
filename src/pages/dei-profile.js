import React from 'react';

const DeiProfile = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white"> DEI Officer Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <form action="#" method="post" className="reg_log_div">
                    <h2 className="section_title  align_center section_title_sm"> DEI Officer Profile </h2>
                    <div className="full_row">
                        <div className="half_row">
                            <label htmlFor>Goals &amp; initiatives</label>
                            <input type="text" placeholder="Goals" name="goals" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor>Candidate Location</label>
                            <input type="text" placeholder="Candidate Location" name="candidateLocation" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor>Candidate Choice</label>
                            <input type="text" placeholder="Candidate Choice" name="candidateChoice" required />
                        </div>
                        <div className="half_row">
                            <label htmlFor>Research focus area</label>
                            <input type="text" placeholder="Research focus area" name="focus" required />
                        </div>
                        <div className="full_row">
                            <label htmlFor="psw"><b>About</b></label>
                            <textarea id="about" name="about" rows={4} cols={10} defaultValue={""} />
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

export default DeiProfile;