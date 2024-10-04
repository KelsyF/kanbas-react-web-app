
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="border border-secondary px-2 py-2 rounded-pill text-secondary">40% of Total</span>
            <BsPlus className="fs-3" />
            <IoEllipsisVertical className="fs-3" />
        </div>
    );
}