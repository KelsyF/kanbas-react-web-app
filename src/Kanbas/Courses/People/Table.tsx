
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">000659910W</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">16:19:07</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Wade</span>{" "}
                            <span className="wd-last-name">Wilson</span>
                        </td>
                        <td className="wd-login-id">008008555W</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">00:01:35</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Peter</span>{" "}
                            <span className="wd-last-name">Parker</span>
                        </td>
                        <td className="wd-login-id">006438798P</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">32:46:35</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}