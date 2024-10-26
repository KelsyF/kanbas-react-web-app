
import React, { useState } from "react";

export default function BooleanStateVariables() {
    const [done, setDone]  = useState(true);
    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            <p>{done ? "Done :D" : "Not Done :("}</p>
            <label className="form-control">
                <input type="checkbox" className="m-1" checked={done}
                       onChange={() => setDone(!done)} />
                Done
            </label>
            { done && <div className="alert alert-success">
                Yay! You're done!! </div> }
            <hr/>
        </div>
    );
}