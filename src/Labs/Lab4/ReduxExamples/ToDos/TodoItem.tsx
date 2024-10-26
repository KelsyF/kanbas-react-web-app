import React from "react";

export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: {id: string; title: string}) => void;
}) {
    return (
        <li key={todo.id} className="list-group-item d-flex align-items-center">
            {todo.title}
            <div className="ms-auto d-flex">
                <button onClick={() => setTodo(todo)}
                        id="wd-set-todo-click"
                        className="btn btn-primary m-1">
                    Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}
                        id="wd-delete-todo-click"
                        className="btn btn-danger m-1">
                    Delete
                </button>
            </div>
        </li>
    );
}