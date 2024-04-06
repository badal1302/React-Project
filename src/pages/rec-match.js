import React from 'react';

const RecMatch = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Recruiter Dashboard </h2>
                </div>
            </div>
            <section className="boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Recruiter Candidate Match</h2>
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>#</th>
                            <th>Academia</th>
                            <th>Position</th>
                            <th>Candidate</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>XKK Academy</td>
                            <td>Position X</td>
                            <td>Candidate x</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>XKKss Academy</td>
                            <td>Position Xssss</td>
                            <td>Candidate xaaz</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>University x</td>
                            <td>Position Scientist</td>
                            <td>John Doe</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>University Texas</td>
                            <td>Position YY</td>
                            <td>Caroline Mehta</td>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default RecMatch;