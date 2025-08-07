import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    let [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(task)
        dispatch(addTodo(task))
        setTask("");
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="" id="" onChange={(e) => setTask(e.target.value)} />
            <button>Add</button>
        </form>
    )
}