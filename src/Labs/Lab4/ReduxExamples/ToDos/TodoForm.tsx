
export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string, title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
}) {
    return (
        <li className="list-group-item d-flex align-items-center">
            <input defaultValue={todo.title}
                   value={todo.title}
                   onChange={ (e) => setTodo({...todo, title: e.target.value }) }
                   className="form-control me-2"/>
            <div className="ms-auto d-flex">
                <button onClick={() => updateTodo(todo)}
                        id="wd-update-todo-click"
                        className="btn btn-warning m-1">
                    Update
                </button>
                <button onClick={() => addTodo(todo)}
                        id="wd-add-todo-click"
                        className="btn btn-success m-1">
                    Add
                </button>
            </div>
        </li>
    );
}