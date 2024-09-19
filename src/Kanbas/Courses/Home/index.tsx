import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
        <table id="wd-home">
            <tbody>
                <tr>
                    <td valign="top">
                        <Modules />
                    </td>
                    <td valign="top">
                        <CourseStatus />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}