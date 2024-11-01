
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash, FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons(
    { moduleId, deleteModule, editModule }:
        { moduleId: string, deleteModule: (moduleId: string) => void; editModule: (moduleId: string) => void }
) {
    return (
        <div className="float-end">
            <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)} />
            <FaTrash className="text-danger me-2 mb-1 cursor-pointer" onClick={() => deleteModule(moduleId)} />
            <GreenCheckmark />
            <BsPlus className="fs-4" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}