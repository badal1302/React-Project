import React from 'react';

const AcademiCandi = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Academia Dashboard </h2>
                </div>
            </div>
            <section className="full_row register_p containerx">
                <div className="full_row full_row_sys">
                    <div className="a_quarter_row col_pad searchCol">
                        <p>Search</p>
                        <form action="#" method="post" className="search_col">
                            <div className="full_row">
                                <div className="full_row">
                                    <input type="text" placeholder="Candidate Name" name="cname" required />
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Field Of Study" name="fieldOfStudy" required />
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Institution" name="Institution" required />
                                </div>
                                <div className="full_row">
                                    <button type="submit" name="reg">Search</button>
                                </div>
                            </div>
                        </form>
                        <br />
                        <p>Filter</p>
                        <form action="#" method="post" className="search_col">
                            <div className="full_row">
                                <div className="full_row">
                                    <select name="gender" id="gender">
                                        <option value>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="full_row">
                                    <select name="educationbackground" id="educationbackground">
                                        <option value>Education Background</option>
                                        <option value="High School">High School</option>
                                        <option value="College">College</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                </div>
                                <div className="full_row">
                                    <input type="text" placeholder="Research Experience" name="researchExperience" required />
                                </div>
                                <div className="full_row">
                                    <button type="submit" name="reg">Filter</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="a_3quarter_row">
                        <h2 className="section_title  align_center section_title_sm"> Applicants for for position X</h2>
                        <table className="dash_table">
                            <tbody><tr>
                                <th>ID</th>
                                <th>Candidate </th>
                                <th>Institution </th>
                                <th>Action </th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Candidate X</td>
                                <td>Institution X</td>
                                <td><a href="/academi-candi-v"> View Profile</a>
                                    <a href="/academi-candi-v" className="action_link"> Bookmark Candidate <i className="fa-regular fa-bookmark" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Candidate YY</td>
                                <td>Institution YY</td>
                                <td><a href="/academi-candi-v"> View Profile</a>
                                    <a href="/academi-candi-v" className="action_link"> Bookmark Candidate <i className="fa-regular fa-bookmark" /></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Candidate X</td>
                                <td>Institution bBB</td>
                                <td><a href="/academi-candi-v"> View Profile</a>
                                    <a href="/academi-candi-v" className="action_link"> Bookmark Candidate <i className="fa-regular fa-bookmark" /></a>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AcademiCandi;