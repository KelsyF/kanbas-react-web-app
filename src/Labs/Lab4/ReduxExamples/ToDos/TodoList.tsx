
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todosReducer);

    return (
        <div className="w-50">
            <h2>To-Do List</h2>
            <ul className="list-group">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem
                        todo={todo}
                    />
                ))}
            </ul>
            <hr/>
        </div>
    );
}