import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="ROW">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/reactjs.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="reactjs.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                    CS12341 React JS
                                    </h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/giraffeLine.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="giraffeLine.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12342 Intro to Giraffes
                                    </h5>
                                    <p className="card-text">
                                        Giraffe facts 101
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/bestGirls.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="bestGirls.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12343 Advanced Pups
                                    </h5>
                                    <p className="card-text">
                                        The bestest pups around
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/html.jpg"  style={{width: "100%", height: "100%", objectFit: "cover"}} alt="html.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12344 HTML
                                    </h5>
                                    <p className="card-text">
                                        HTML for the uninitiated
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/romanEmpire.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="romanEmpire.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12345 Roman Empire
                                    </h5>
                                    <p className="card-text">
                                        Your Roman Empire
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/sketching.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="sketching.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12346 Sketching
                                    </h5>
                                    <p className="card-text">
                                        Mixed media sketching
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to="/Kanbas/Courses/12341/Home">
                                {/*Will need to place below style into .css*/}
                                <div style={{width: "100%", height: "200px", overflow: "hidden"}}>
                                    <img src="/images/nap.jpg" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="nap.jpg" />
                                </div>
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS12347 Napping
                                    </h5>
                                    <p className="card-text">
                                        Guide to Naps
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}