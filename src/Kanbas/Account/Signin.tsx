
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client"
import store from "../store";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        try {
            const user = await client.signin(credentials);
            if (!user) {
                alert("Invalid credentials.");
                return;
            }
            console.log("API response:", user);
            dispatch(setCurrentUser(user));
            console.log("Updated redux state:", store.getState());
            navigate("/Kanbas/Dashboard");
        } catch (error) {
            console.error("Signin failed:", error);
            alert("Signin failed. Please check your credentials and try again.");
        }
    };
    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>
            <input value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value })}
                id="wd-username"
                placeholder="username"
                className="form-control mb-2"/>
            <input value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                id="wd-password"
                placeholder="password"
                type="password"
                className="form-control mb-2"/>
            <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
                Sign in
            </button>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
        </div>
    )
}