
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaPlus } from "react-icons/fa6";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";

export default function Users() {
    const { uid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
            lastActivity: "2020-11-02",
            totalActivity: "15:32:43"
        });
        setUsers([...users, user]);
    };
    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            await fetchUsers();
        }
    };
    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            await fetchUsers();
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return(
        <div>
            <div className="mb-3">
                <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                    <FaPlus className="me-2" />
                    Users
                </button>
                <h3>Users</h3>
            </div>
            <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                   className="form-control float-start w-50 me-2 wd-filter-by-name" />
            <select value={role}
                    onChange={(e) => filterUsersByRole(e.target.value)}
                    className="form-select flost-start w-25 wd-select-role" >
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>
            <PeopleTable users={users} />
        </div>
    );
}