import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            <AddForm />
            <h3>Todos</h3>
            <ul>
                {todos && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.task}
                            <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <li>No todos found</li>
                )}
            </ul>
        </>
    );
}
