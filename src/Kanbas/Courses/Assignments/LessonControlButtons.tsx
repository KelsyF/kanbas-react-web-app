
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
    return (
        <div className="float-end ms-3">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-3" />
        </div>
    );
}