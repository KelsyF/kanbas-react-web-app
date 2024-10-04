
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="d-flex align-items-center text-nowrap">
            <div className="input-group input-group-lg">
                <div className="input-group-prepend input-group-lg">
                    <span className="input-group-text text-secondary bg-white"><FaMagnifyingGlass/></span>
                </div>
                <input type="text" id="wd-search-assignment" className="text-secondary input-group-lg me-1" placeholder="Search..."/>
            </div>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"
                    type="button">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Group
            </button>
            <button id="wd-add-assignment" className="btn btn-lg btn-secondary me-1 float-end"
                    type="button">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }}/>
                Assignment
            </button>
        </div>
    );
}