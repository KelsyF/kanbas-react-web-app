
import { NavLink } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigaiton" className="wd list-group fs-5 rounded-0 me-5">
            <NavLink to="/Kanbas/Account/Signin"
                className={({isActive}) =>
                    `list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
                Sign in
            </NavLink>
            <NavLink to="/Kanbas/Account/Signup"
                 className={({isActive}) =>
                     `list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
                Sign up
            </NavLink>
            <NavLink to="/Kanbas/Account/Profile"
                 className={({isActive}) =>
                     `list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
                Profile
            </NavLink>
        </div>
    );
}