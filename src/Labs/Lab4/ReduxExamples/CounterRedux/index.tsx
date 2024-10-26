
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
    const { count } = useSelector((state: any) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div id="wd-counter-redux">
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}
                    className="btn btn-primary m-1"
                    id="wd-counter-redux-increment-click">
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}
                    className="btn btn-primary m-1"
                    id="wd-counter-redux-click">
                Decrement
            </button>
            <hr/>
        </div>
    );
}