import React from 'react';

const DeiJobs = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white"> DEI Officer Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm"> DEI Officer Matching Jobs <span>(3) Positions</span></h2>
            </section>
            <section className="full_row register_p containerx boxed_wrapper">
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>Position</th>
                            <th>No.of Candidates Applied </th>
                            <th>Review </th>
                        </tr>
                        <tr>
                            <td>Position 1</td>
                            <td>5 </td>
                            <td><a href className="system_btn system_btn_success">Approve <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        <tr>
                            <td>Position 2</td>
                            <td>34 </td>
                            <td><a href className="system_btn system_btn_success">Approve <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        <tr>
                            <td>Position 3</td>
                            <td>7 </td>
                            <td><a href className="system_btn system_btn_success">Approve <i className="fa-solid fa-check" /></a>
                                <a href className="system_btn system_btn_danger">Decline</a></td>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default DeiJobs;