
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
        const location = useLocation()
        const links = [
            { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard, state: "dashboard" },
            { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid, state: "courses" },
            { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline, state: "calendar" },
            { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox, state: "inbox" },
            { label: "Labs", path: "/#/Labs", icon: LiaCogSolid, state: "labs" },
        ];
    return (
        <div id="wd-kanbas-navigation" style={{ width: 110 }}
                className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block z-2 bg-black">
            <a href="https://northeastern.edu/" id="wd-neu-link" target="_blank" rel="noreferrer"
                className="list-group-item bg-black border-0">
                    <img src="/images/NEU.png" width="75px"  alt="NEU.png"/>
            </a>
            <NavLink to="/Kanbas/Account" id="wd-account-link"
                className={ ({isActive}) =>
                    `list-group-item text-center border-0 ${isActive ? "bg-white text-danger" : "bg-black text-white"}`}>
                    <VscAccount className="fs-1 text" />
                    <br />
                    Account
            </NavLink>
                {links.map((link) => (
                    <NavLink key={ link.path }
                             to={ link.path }
                             state={{from: link.state}}
                                className={ ({isActive}) =>
                                `list-group-item text-center border-0 ${
                                        isActive && location.state?.from === link.state ? "bg-white text-danger" : "bg-black text-white"}`}>
                            {link.icon({className: "fs-1 text"})}
                            <br />
                            {link.label}
                    </NavLink>
                ))}
        </div>
    );
}