import SalesGraph from "../components/charts/SalesGraph.tsx";

const Dashboard = () => {
    return (
        <div className="content-body">
            <div className="container">
                <div className="row page-titles">
                    <div className="col p-0">
                        <h4>Hello, <span>Welcome here</span></h4>
                    </div>
                    <div className="col p-0">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Download <span className="pull-right"><i className="ion-android-download f-s-30 text-primary"></i></span></h4>
                                <h6 className="m-t-20 f-s-14">50% Complete</h6>
                                <div className="progress m-t-0 h-7px">
                                    <div className="progress-bar bg-primary wow animated progress-animated w-50pc h-7px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Upload <span className="pull-right"><i className="ion-android-upload f-s-30 text-success"></i></span></h4>
                                <h6 className="m-t-20 f-s-14">90% Complete</h6>
                                <div className="progress m-t-0 h-7px">
                                    <div className="progress-bar bg-success wow animated progress-animated w-90pc h-7px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4>Ticket <span className="pull-right"><i className="ion-android-list f-s-30 text-danger"></i></span></h4>
                                <h6 className="m-t-20 f-s-14">65% Ticket Checked</h6>
                                <div className="progress m-t-0 h-7px">
                                    <div className="progress-bar bg-danger wow animated progress-animated w-65pc h-7px"></div>
                                </div>
                            </div>
                        </div>
                    </div>.
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Monthly Income</h4>
                                <div className="f-s-30 f-w-300 text-success">$3500 <span
                                    className="f-s-16 text-uppercase">USD</span></div>
                                <a href="#" className="btn btn-outline-dark btn-flat m-t-5 m-b-30 f-s-14">View
                                    Details</a>

                                <div className="graph-container">
                                    <SalesGraph/>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Messages</h4>
                                <div className="media border-bottom-1 p-t-15 p-b-15 d-flex gap-5">
                                    <img src="/images/avatar/1.jpg" className="mr-3 rounded-circle" alt="Avatar" />
                                    <div className="media-body m-r-80">
                                        <h5>John Tomas</h5>
                                        <p className="m-b-0">I shared this on my fb wall a few months back,</p>
                                    </div><span className="text-muted f-s-12">April 24, 2018</span>
                                </div>
                                <div className="media border-bottom-1 p-t-15 p-b-15 d-flex gap-5">
                                    <img src="/images/avatar/2.jpg" className="mr-3 rounded-circle" alt="Avatar" />
                                    <div className="media-body m-r-80">
                                        <h5>John Tomas</h5>
                                        <p className="m-b-0">I shared this on my fb wall a few months back,</p>
                                    </div><span className="text-muted f-s-12">April 24, 2018</span>
                                </div>
                                <div className="media p-t-15 p-b-15 d-flex gap-5">
                                    <img src="/images/avatar/3.jpg" className="mr-3 rounded-circle" alt="Avatar" />
                                    <div className="media-body m-r-80">
                                        <h5>John Tomas</h5>
                                        <p className="m-b-0">I shared this on my fb wall a few months back,</p>
                                    </div><span className="text-muted f-s-12">April 24, 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body ">
                                <h2 className="f-s-30 m-b-0">$6,932.60</h2><span className="f-w-600">Total Revenue</span>
                                <div className="m-t-30">
                                    <h4 className="f-w-600">2,365</h4>
                                    <h6 className="m-t-10 text-muted">Online Earning <span className="pull-right">50%</span></h6>
                                    <div className="progress m-t-15 h-6px">
                                        <div className="progress-bar bg-primary wow animated progress-animated w-50pc h-6px"></div>
                                    </div>
                                </div>
                                <div className="m-t-20 m-b-20">
                                    <h4 className="f-w-600">1,250</h4>
                                    <h6 className="m-t-10">Offline Earning <span className="pull-right">50%</span></h6>
                                    <div className="progress m-t-15 h-6px">
                                        <div className="progress-bar bg-success wow animated progress-animated w-50pc h-6px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body p-0">
                                <a href="#">
                                    <div className="card-bg-img-1">
                                        <div className="card-img-overlay dark-overlay-5 text-white">
                                            <div className="position-absolute left-20 bottom-20">
                                                <span className="label label-primary label-rounded">News</span>
                                                <h4 className="text-white m-t-20 m-b-10">The science<br />behind the dress</h4>
                                                <div>
                                                    <span className="f-s-16"><i className="ti-comment m-r-10 f-s-13"></i>74</span>
                                                    <span className="p-l-10 p-r-10">|</span>
                                                    <span className="f-s-16"><i className="ti-heart m-r-10 f-s-13"></i>210</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <i className="icon ion-ios-paper-outline f-s-75 text-success"></i>
                                    <h4 className="m-b-2">Knowledge Base</h4>
                                    <p className="p-l-30 p-r-30 m-t-15 m-b-30">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                    <a href="#" className="btn btn-sm btn-success btn-block m-t-15">Browse Article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="active-member">
                                    <div className="table-responsive">
                                        <table className="table table-xs">
                                            <thead>
                                                <tr>
                                                    <th>Top Active Members</th>
                                                    <th>Views</th>
                                                    <th>Country</th>
                                                    <th>Status</th>
                                                    <th>Comments</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/1.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>125</span></td>
                                                    <td>United States</td>
                                                    <td><i className="fa fa-circle-o text-success f-s-12 m-r-10"></i> Active</td>
                                                    <td><span>84</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/2.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>547</span></td>
                                                    <td>Canada</td>
                                                    <td><i className="fa fa-circle-o text-success f-s-12 m-r-10"></i> Active</td>
                                                    <td><span>36</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/3.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>557</span></td>
                                                    <td>Germany</td>
                                                    <td><i className="fa fa-circle-o text-danger f-s-12 m-r-10"></i> Inactive</td>
                                                    <td><span>55</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/4.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>753</span></td>
                                                    <td>England</td>
                                                    <td><i className="fa fa-circle-o text-success f-s-12 m-r-10"></i> Active</td>
                                                    <td><span>45</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/5.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>453</span></td>
                                                    <td>China</td>
                                                    <td><i className="fa fa-circle-o text-danger f-s-12 m-r-10"></i> Inactive</td>
                                                    <td><span>63</span></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="/images/avatar/6.jpg" className="w-40px rounded-circle m-r-10" alt="" />Arden Karn
                                                    </td>
                                                    <td><span>658</span></td>
                                                    <td>Japan</td>
                                                    <td><i className="fa fa-circle-o text-success f-s-12 m-r-10"></i> Active</td>
                                                    <td><span>38</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <img src="/images/users/2.jpg" className="rounded-circle m-t-15 w-75px" alt="" />
                                    <h4 className="m-t-15 m-b-2">Paul Custard</h4>
                                    <p className="text-muted">Web Developer</p>
                                    <ul className="list-inline m-t-15">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook-square f-s-20 text-muted"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter f-s-20 text-muted"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-pinterest f-s-20 text-muted"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin f-s-20 text-muted"></i></a></li>
                                    </ul>
                                    <div className="row">
                                        <div className="col-12 border-bottom-1 p-t-20 p-b-10"><span className="pull-left f-w-600">Name:</span> <span className="pull-right">Bob Springer</span></div>
                                        <div className="col-12 border-bottom-1 p-t-10 p-b-10"><span className="pull-left f-w-600">Email:</span> <span className="pull-right">example@examplel.com</span></div>
                                        <div className="col-12 p-t-10 p-b-10"><span className="pull-left f-w-600">Phone:</span> <span className="pull-right">+12 123 124 125</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Activity Timeline</h4>
                                <div className="timeline-">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-badge primary"></div>
                                            <a href="#" className="timeline-panel text-muted">
                                                <span>10 minutes ago</span>
                                                <h6 className="m-t-5">Youtube, a video-sharing website, goes live.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge warning"></div>
                                            <a href="#" className="timeline-panel text-muted">
                                                <span>20 minutes ago</span>
                                                <h6 className="m-t-5">Mashable, a news website and blog, goes live.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge danger"></div>
                                            <a href="#" className="timeline-panel text-muted">
                                                <span>30 minutes ago</span>
                                                <h6 className="m-t-5">Google acquires Youtube.</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="timeline-badge success"></div>
                                            <a href="#" className="timeline-panel text-muted">
                                                <span>15 minutes ago</span>
                                                <h6 className="m-t-5">StumbleUpon is acquired by eBay.</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <img src="/images/users/1.jpg" className="rounded-circle m-t-10 w-50px" alt="" />
                                    <h6 className="f-w-500 m-t-15">Bob Springer</h6>
                                    <p className="m-b-0 f-s-12">Status: <strong>Online</strong></p>
                                    <p className="m-b-0 f-s-12">Response Time: <strong>3 Hours</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center">
                                    <img src="/images/users/2.jpg" className="rounded-circle m-t-10 w-50px" alt="" />
                                    <h6 className="f-w-500 m-t-15">Bob Springer</h6>
                                    <p className="m-b-0 f-s-12">Status: <strong>Online</strong></p>
                                    <p className="m-b-0 f-s-12">Response Time: <strong>3 Hours</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
