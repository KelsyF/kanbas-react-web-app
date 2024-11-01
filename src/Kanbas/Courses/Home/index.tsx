import Modules from "../Modules";
import CourseStatus from "./Status";
import FacultyContent from "../../Account/FacultyContent";

export default function Home() {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill">
                <Modules />
            </div>
            <FacultyContent>
                <div className="d-none d-xl-block ms-4">
                    <CourseStatus />
                </div>
            </FacultyContent>
        </div>
    );
}