import React from 'react';

const AppPos = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Candidate Dashboard </h2>
                </div>
            </div>
            <section className="boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Applied  Positions - Total(3) </h2>
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>Institution</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>action</th>
                        </tr>
                        <tr>
                            <td>XKK Academy</td>
                            <td>Position X</td>
                            <td>Pending</td>
                            <td>
                                <a href="/candidate-review">Review Academia</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Institution Y</td>
                            <td>Position XYZ</td>
                            <td>Under Review</td>
                            <td>
                                <a href="/candidate-review">Review Academia</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Institution YY</td>
                            <td>Position ABD</td>
                            <td>Pending</td>
                            <td>
                                <a href="/candidate-review">Review Academia</a>
                            </td>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default AppPos;