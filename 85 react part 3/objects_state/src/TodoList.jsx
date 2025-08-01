import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample-task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("")
    let style = { textDecoration: "line-through" };


    let addNewTask = () => {
        setTodos(() => {
            return [...todos, { task: newTodo, id: uuidv4(), isDone: false }]
        })
        setNewTodo("")
    }

    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }

    let upperCaseAll = () => {
        setTodos((prevTasks) => {
            return prevTasks.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase(),
                }
            })
        })
    }

    let upperCaseOne = (id) => {
        setTodos((prevTasks) => {
            return prevTasks.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, task: todo.task.toUpperCase(),
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    let markAsDone = (id) => {
        setTodos((prevTasks) => {
            return prevTasks.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo, isDone: true,
                    }
                } else {
                    return todo;
                }
            })
        })
    }

     let markAll = () => {
        setTodos((prevTasks) => {
            return prevTasks.map((todo) => {
                return {
                    ...todo, isDone:true,
                }
            })
        })
    }


    return (
        <div>
            <h1>Todo App</h1>
            <br />
            <input placeholder="Enter the task " value={newTodo} onChange={updateTodovalue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <h3>Tasks to Todo : </h3>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                                {todo.task}</span> &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                            
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UppperCase All</button>
            <button onClick={markAll}>Mark All As Done</button>

        </div>
    )
}