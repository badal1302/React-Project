import React from 'react';

const CandidateMatchJobs = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Candidate Dashboard </h2>
                </div>
            </div>
            <section className="boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Available Matching Positions</h2>
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>Institution</th>
                            <th>Position</th>
                        </tr>
                        <tr>
                            <td>XKK Academy</td>
                            <td>Position X</td>
                        </tr>
                        <tr>
                            <td>Institution Y</td>
                            <td>Position XYZ</td>
                        </tr>
                        <tr>
                            <td>Institution YY</td>
                            <td>Position ABD</td>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default CandidateMatchJobs;