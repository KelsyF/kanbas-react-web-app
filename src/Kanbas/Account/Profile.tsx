import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            <input id="wd-username"
                   value="Alice"
                   placeholder="Username"
                   className="form-control mb-2"/>
            <input id="wd-password"
                   value="123"
                   placeholder="password"
                   type="password"
                   className="form-control mb-2"/>
            <input id="wd-firstname"
                   value="Alice"
                   placeholder="First Name"
                   className="form-control mb-2"/>
            <input id="wd-lastname"
                   value="Wonderland"
                   placeholder="Last Name"
                   className="form-control mb-2"/>
            <input id="wd-dob"
                   value="2000-01-01"
                   type="date"
                   className="form-control mb-2"/>
            <input id="wd-email"
                   value="alice@wonderland.co"
                   type="email"
                   className="form-control mb-2"/>
            <select className="form-select mb-3">
                <option selected value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link id="wd-signout-btn"
                  to="/Kanbas/Account/Signin"
                  className="btn btn-danger w-100">
                Sign Out
            </Link>
        </div>
    );
}