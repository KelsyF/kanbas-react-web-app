import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}  alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12341/Home">
                            CS12341 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/12341/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/giraffeLine.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12342/Home">
                            CS12342 Intro to Giraffes
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Giraffe facts 101
                        </p>
                        <Link to="/Kanbas/Courses/12342/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/bestGirls.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12343/Home">
                            CS12343 Advanced Best Pups
                        </Link>
                        <p className="wd-dashboard-course-title">
                            The bestest pups around
                        </p>
                        <Link to="/Kanbas/Courses/12343/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/html.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12344/Home">
                            CS12344 HTML
                        </Link>
                        <p className="wd-dashboard-course-title">
                            HTML for the uninitiated
                        </p>
                        <Link to="/Kanbas/Courses/12344/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/romanEmpire.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12345/Home">
                            CS12345 Roman Empire
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Your Roman Empire
                        </p>
                        <Link to="/Kanbas/Courses/12345/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/sketching.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12346/Home">
                            CS12346 Sketching
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Mixed media sketching
                        </p>
                        <Link to="/Kanbas/Courses/12346/Home"> Go </Link>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/nap.jpg" width={200} alt="reactjs.jpg" />
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/12347/Home">
                            CS12347 Napping
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Guide to Naps
                        </p>
                        <Link to="/Kanbas/Courses/12347/Home"> Go </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}