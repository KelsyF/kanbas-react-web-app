
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../../store";

export default function TodoForm() {
    const { todo } = useSelector((state: RootState) => state.todosReducer);
    const dispatch = useDispatch()
    return (
        <li className="list-group-item d-flex align-items-center">
            <input value={todo.title}
                   onChange={ (e) => dispatch(setTodo({...todo, title: e.target.value })) }
                   className="form-control me-2"/>
            <div className="ms-auto d-flex">
                <button onClick={() => dispatch(updateTodo(todo))}
                        id="wd-update-todo-click"
                        className="btn btn-warning m-1">
                    Update
                </button>
                <button onClick={() => dispatch(addTodo(todo))}
                        id="wd-add-todo-click"
                        className="btn btn-success m-1">
                    Add
                </button>
            </div>
        </li>
    );
}