import React from 'react';

const AdminDasboard = () => {
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
                <div className="a_3quarter_row section_padding">
                    <div className="full_row">
                        <div className="a_quarter_row c-dashboardInfo">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i className="fa-solid fa-users" /> Candidates</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">56</span>
                            </div>
                        </div>
                        <div className="a_quarter_row c-dashboardInfo">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i className="fa-solid fa-users" /> Academia</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">12</span>
                            </div>
                        </div>
                        <div className="a_quarter_row c-dashboardInfo">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i className="fa-solid fa-users" /> Recruiters</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">19</span>
                            </div>
                        </div>
                        <div className="a_quarter_row c-dashboardInfo">
                            <div className="wrap">
                                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"><i className="fa-solid fa-users" /> Positions</h4>
                                <span className="hind-font caption-12 c-dashboardInfo__count">21</span>
                            </div>
                        </div>
                    </div>
                    {/*2*/}
                    <h2 className="section_title  section_title_sm">Latest Jobs Posted</h2>
                    <div className="full_row">
                        <table className="dash_table">
                            <tbody><tr>
                                <th>Institution</th>
                                <th>Position</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>XKK Academy</td>
                                <td>Position X</td>
                                <td>Active</td>
                                <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                    <a href className="system_btn system_btn_danger">Decline</a></td>
                            </tr>
                            <tr>
                                <td>Institution Y</td>
                                <td>Position XYZ</td>
                                <td>Closed</td>
                                <td><a href className="system_btn system_btn_success">Yes <i className="fa-solid fa-check" /></a>
                                    <a href className="system_btn system_btn_danger">Decline</a></td>
                            </tr>
                            <tr>
                                <td>Institution YY</td>
                                <td>Position ABD</td>
                                <td>Interviews On-going</td>
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

export default AdminDasboard;