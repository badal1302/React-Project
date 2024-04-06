import React from 'react';

const RecAppPos = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Recruiter Dashboard </h2>
                </div>
            </div>
            <section className="boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Applied Positions</h2>
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>Position</th>
                            <th>Agency </th>
                            <th>Candidate </th>
                            <th>Approve </th>
                        </tr>
                        <tr>
                            <td>Position 1</td>
                            <td>Agency YY</td>
                            <td>Candidate yyy </td>
                            <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        <tr>
                            <td>Position 2</td>
                            <td>Agency YYz</td>
                            <td>Candidate YYz </td>
                            <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        <tr>
                            <td>Position 3</td>
                            <td>Agency AGh</td>
                            <td>Candidate AGh </td>
                            <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default RecAppPos;