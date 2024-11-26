
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-5">
            {links.map((link) => (
                <NavLink
                    key={link}
                    to={`/Kanbas/Account/${link}`}
                    className={({ isActive }) =>
                        `list-group-item border-0 ${isActive ? "active" : "text-danger"}`
                    }
                >
                    {link === "Signin" ? "Sign in" : link === "Signup" ? "Sign up" : "Profile"}
                </NavLink>
            ))}
        </div>
    );
}