
import React, { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement= () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button className="btn btn-success mb-2" onClick={addElement}>Add Element</button>
            <ul className="list-unstyled">
                {array.map((item, index) => (
                    <li className="border p-2 d-flex justify-content-between align-items-center" key={index}>
                        <h3>{item}</h3>
                        <button className="btn btn-danger" onClick={() => deleteElement(index)}
                                id="wd-delete-element-click">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}