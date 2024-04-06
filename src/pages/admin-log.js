import React from 'react';

const AdminLog = () => {
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
                                    <li><a href><i className="fa-solid fa-angles-right" /> Posted Jobs</a></li>
                                </ul>
                            </li>
                            <li><a href="/admin-log"><i className="fa-solid fa-angles-right" /> Activity Log</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="a_3quarter_row admin_3quarter">
                    <h2 className="section_title  section_title_sm">Admin Activity Log</h2>
                    <div className="full_row">
                        <table className="dash_table">
                            <tbody><tr>
                                <th>#id</th>
                                <th>Timestamp</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td><i className="fa-solid fa-clock" /> 2023-01-23 00:12:22</td>
                                <td>Message from PurpleGurl 36 wks 5 days 8 hrs 2 mins , 15 secs ago. </td>
                            </tr>
                            <tr>
                            </tr><tr>
                                <td>33</td>
                                <td><i className="fa-solid fa-clock" /> 2023-09-09 00:12:22</td>
                                <td>Admin Approved profile for candidate john Doe 36 wks 5 days 8 hrs 2 mins , 15 secs ago. </td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td><i className="fa-solid fa-clock" /> 2023-05-09 00:12:22</td>
                                <td>Academia X logged in to the  dashboard 2 mins , 15 secs ago. </td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminLog;