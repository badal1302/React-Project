import React from 'react';

const CandidateReview = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Candidate Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Candidate Review and feedback</h2>
                <form action="#" method="post" className="search_col container">
                    <div className="full_row">
                        <div className="full_row">
                            <label>Rate</label>
                            <select name="rate" id="rate">
                                <option value>Select Rate</option>
                                <option value="Unacceptable">Unacceptable</option>
                                <option value="Needs Improvement">Needs Improvement</option>
                                <option value="Meets Expectations">Meets Expectations</option>
                                <option value=" Exceeds Expectations"> Exceeds Expectations</option>
                                <option value="Outstanding">Outstanding</option>
                            </select>
                        </div>
                        <div className="full_row">
                            <textarea id="about" name="about" rows={4} cols={10} defaultValue={"        "} />
                        </div>
                        <div className="full_row">
                            <button type="submit" name="rev">Rate And Review</button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default CandidateReview;