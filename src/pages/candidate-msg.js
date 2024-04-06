import React from 'react';

const CandidateMsg = () => {
    return (
        <main>
            {/*homebanner*/}
            <div className="fluid homebanner padder align_center website_bg">
                <div className="homebanner_inner">
                    <h2 className="section_title text_white">Candidate Dashboard </h2>
                </div>
            </div>
            <section className="boxed_wrapper">
                <h2 className="section_title  align_center section_title_sm">Messages Inbox </h2>
                <div className="full_row boxed_system">
                    <table className="dash_table">
                        <tbody><tr>
                            <th>#</th>
                            <th>From</th>
                            <th>Date</th>
                            <th>Message</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Acedemia x</td>
                            <td>2022:05:11 05:36</td>
                            <th><small>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small></th>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Acedemia x</td>
                            <td>2022:05:11 05:36</td>
                            <th><small>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small></th>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Acedemia x</td>
                            <td>2022:05:11 05:36</td>
                            <th><small>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small></th>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Acedemia x</td>
                            <td>2022:05:11 05:36</td>
                            <th><small>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </small></th>
                        </tr>
                        </tbody></table>
                </div>
            </section>
        </main>
    );
};

export default CandidateMsg;