import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface TodoItemProps {
    todo: {
        id: string;
        title: string;
    };
}

export default function TodoItem({todo}: TodoItemProps) {
    const dispatch = useDispatch()
    return (
        <li key={todo.id} className="list-group-item d-flex align-items-center">
            {todo.title}
            <div className="ms-auto d-flex">
                <button onClick={() => dispatch(setTodo(todo))}
                        id="wd-set-todo-click"
                        className="btn btn-primary m-1">
                    Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}
                        id="wd-delete-todo-click"
                        className="btn btn-danger m-1">
                    Delete
                </button>
            </div>
        </li>
    );
}