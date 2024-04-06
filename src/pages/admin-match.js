import React from 'react';

const AdminMatch = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner admin_banner padder align_center website_bg">
                <div className="admin_inner">
                    <h2 className="section_title text_white">  Admin Dashboard </h2>
                </div>
            </div>
            <section className="full_row ">
                <div className="a_quarter_row show_mob">
                    <nav className="navigation">
                        <ul className="mainmenu">
                            <li><a href="/admin-jobs"> Posted Jobs</a></li>
                            <li><a href="/admin-match">Matching Candidates</a></li>
                            <li><a href>Users <i className="fa-solid fa-chevron-right" /></a>
                                <ul className="submenu">
                                    <li><a href="/admin-users"> <i className="fa-solid fa-angles-right" /> User Registrations</a></li>
                                    <li><a href="/admin-profiles"> <i className="fa-solid fa-angles-right" /> User Profiles</a></li>
                                </ul>
                            </li>
                            <li><a href>Reports <i className="fa-solid fa-chevron-right" /></a>
                                <ul className="submenu">
                                    <li><a href><i className="fa-solid fa-angles-right" /> Registered Users</a></li>
                                </ul>
                            </li>
                            <li><a href="/admin-log"><i className="fa-solid fa-angles-right" /> Activity Log</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="a_3quarter_row admin_3quarter">
                    <h2 className="section_title  section_title_sm">Matching Candidates</h2>
                    <div className="full_row">
                        <table className="dash_table">
                            <tbody><tr>
                                <th>Candidate</th>
                                <th>Academia</th>
                                <th>Recruiter</th>
                                <th>DEI Officer</th>
                                <th>Approve</th>
                            </tr>
                            <tr>
                                <td>John Doe</td>
                                <td>Academia X</td>
                                <td>Recruiter x</td>
                                <td>DEI XY</td>
                                <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                    <a href className="system_btn system_btn_danger">Decline</a></td>
                            </tr>
                            <tr>
                                <td>Cate Ian </td>
                                <td>Academia ddX</td>
                                <td>Recruiter x</td>
                                <td>DEI dddXY</td>
                                <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                    <a href className="system_btn system_btn_danger">Decline</a></td>
                            </tr>
                            <tr>
                                <td>John Ian </td>
                                <td>Academia ddX</td>
                                <td>Recruiter x</td>
                                <td>DEI dddXY</td>
                                <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                    <a href className="system_btn system_btn_danger">Decline</a></td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminMatch;