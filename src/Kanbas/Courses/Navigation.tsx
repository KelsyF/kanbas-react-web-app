
import { NavLink, useParams } from "react-router-dom";


export default function CoursesNavigation() {
        const { cid } = useParams();
        const links = [
            "Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"
        ];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0 me-5">
            {links.map((link) => (
                <NavLink
                    key={link}
                    to={`/Kanbas/Courses/${cid}/${link}`}
                         className={ ({isActive})=>
                             `list-group-item border-0 ${isActive ? "active" : "text-danger"}`}>
                        {link}
                </NavLink>
            ))}
        </div>
    );
}